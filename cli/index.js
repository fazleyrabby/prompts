#!/usr/bin/env node

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

  // Create a searchable select list
  const promptChoice = await select({
    message: 'Select a prompt to copy:',
    options: allPrompts.map(p => ({
      value: p,
      label: p.title,
      hint: pc.dim(p.category)
    })),
    maxItems: 10
  });

  if (isCancel(promptChoice)) {
    cancel('Operation cancelled.');
    process.exit(0);
  }

  // Handle Variables
  let finalPromptText = promptChoice.promptText;
  
  if (promptChoice.variables && promptChoice.variables.length > 0) {
    outro(pc.cyan(`\nThis prompt requires ${promptChoice.variables.length} variables:`));
    
    for (const variable of promptChoice.variables) {
      const varValue = await text({
        message: pc.white(`Value for ${pc.yellow(`{{${variable}}}`)}:`),
        placeholder: `Enter ${variable.toLowerCase().replace(/_/g, ' ')}...`
      });

      if (isCancel(varValue)) {
        cancel('Operation cancelled.');
        process.exit(0);
      }

      // Replace globally
      const regex = new RegExp(`\\{\\{${variable}\\}\\}`, 'g');
      finalPromptText = finalPromptText.replace(regex, varValue);
    }
  }

  // Copy to clipboard
  try {
    await clipboardy.write(finalPromptText);
    outro(pc.green('✨ Successfully copied to clipboard!'));
    console.log(pc.dim('----------------------------------------'));
    // Console log the first 100 characters preview
    console.log(pc.gray(finalPromptText.substring(0, 100) + (finalPromptText.length > 100 ? '...' : '')));
    console.log(pc.dim('----------------------------------------\n'));
  } catch (err) {
    cancel('Failed to copy to clipboard automatically.');
    console.log('\nHere is your compiled prompt:\n\n' + finalPromptText);
    process.exit(1);
  }
}

main();
