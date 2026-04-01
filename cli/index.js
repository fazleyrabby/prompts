#!/usr/bin/env node

import Fuse from 'fuse.js';
import enquirer from 'enquirer';
const { AutoComplete } = enquirer;
import { intro, outro, spinner, select, text, isCancel, cancel } from '@clack/prompts';
import clipboardy from 'clipboardy';
import pc from 'picocolors';

// In production, this would be pointed to the actual GitHub Pages URL
const API_URL = process.env.PROMPTS_API_URL || 'https://fazleyrabby.github.io/prompts/api/prompts.json';

async function fetchPrompts() {
  const s = spinner();
  s.start('Fetching prompt library...');
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('API unreachable');
    const prompts = await res.json();
    s.stop(`Loaded ${prompts.length} prompts.`);
    return prompts;
  } catch (error) {
    s.stop('Failed to connect to the prompt library.');
    cancel('Could not load prompts. Ensure the development server is running or you are connected to the internet.');
    process.exit(1);
  }
}

async function main() {
  console.clear();
  intro(pc.bgBlue(pc.white(' 🚀 @fazleyrabbi/prompts CLI ')));

  const allPrompts = await fetchPrompts();

  const fuse = new Fuse(allPrompts, {
    keys: [
      { name: 'title', weight: 0.6 },
      { name: 'category', weight: 0.3 },
      { name: 'tags', weight: 0.1 }
    ],
    threshold: 0.4
  });

  let stayInCli = true;

  while (stayInCli) {
    let promptChoice;
    try {
      const prompt = new AutoComplete({
        name: 'prompt',
        message: pc.cyan('Select a prompt (start typing to filter)'),
        limit: 10,
        choices: allPrompts.map(p => ({
          name: p.title,
          message: p.title,
          hint: pc.dim(`(${p.category})`)
        })),
        async suggest(input, choices) {
          if (!input) return choices;
          const results = fuse.search(input);
          return results.map(r => {
             const choice = choices.find(c => c.name === r.item.title);
             return choice;
          }).filter(Boolean);
        }
      });

      const selectedTitle = await prompt.run();
      promptChoice = allPrompts.find(p => p.title === selectedTitle);
    } catch (err) {
      outro(pc.yellow('Exiting... Thanks for using @fazleyrabbi/prompts!'));
      process.exit(0);
    }

    if (!promptChoice) {
      cancel('No prompt selected.');
      process.exit(0);
    }

    // Handle Variables
    let finalPromptText = promptChoice.promptText;
    
    if (promptChoice.variables && promptChoice.variables.length > 0) {
      outro(pc.cyan(`\nPrompt selected: ${pc.bold(promptChoice.title)}`));
      console.log(pc.dim(`This prompt requires ${promptChoice.variables.length} variables:\n`));
      
      for (const variable of promptChoice.variables) {
        const varValue = await text({
          message: pc.white(`Value for ${pc.yellow(`{{${variable}}}`)}:`),
          placeholder: `Enter ${variable.toLowerCase().replace(/_/g, ' ')}...`,
          hint: 'Press Esc/Ctrl+C to go back to search'
        });

        if (isCancel(varValue)) {
          console.clear();
          intro(pc.bgBlue(pc.white(' 🚀 @fazleyrabbi/prompts CLI ')));
          console.log(pc.yellow('↩ Went back to search.'));
          promptChoice = null;
          break;
        }

        const regex = new RegExp(`\\{\\{${variable}\\}\\}`, 'g');
        finalPromptText = finalPromptText.replace(regex, varValue);
      }
    }

    if (!promptChoice) continue;

    // Copy to clipboard
    try {
      await clipboardy.write(finalPromptText);
      outro(pc.green('✨ Successfully copied to clipboard!'));
      console.log(pc.dim('----------------------------------------'));
      console.log(pc.gray(finalPromptText.substring(0, 100) + (finalPromptText.length > 100 ? '...' : '')));
      console.log(pc.dim('----------------------------------------\n'));
    } catch (err) {
      console.log('\nHere is your compiled prompt:\n\n' + finalPromptText);
    }

    // Navigation: Continue or Exit?
    const nextAction = await select({
      message: 'What would you like to do next?',
      options: [
        { value: 'search', label: '🔍 Search more prompts', hint: 'Back to the list' },
        { value: 'exit', label: '👋 Exit CLI', hint: 'Close the program' }
      ]
    });

    if (isCancel(nextAction) || nextAction === 'exit') {
      stayInCli = false;
      outro(pc.yellow('Exiting... Thanks for using @fazleyrabbi/prompts!'));
    } else {
      console.clear();
      intro(pc.bgBlue(pc.white(' 🚀 @fazleyrabbi/prompts CLI ')));
      console.log(pc.dim(`Currently loaded: ${allPrompts.length} prompts\n`));
    }
  }
}

main();
