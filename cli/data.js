import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

/**
 * For 1k+ prompts, we should load titles first and lazy-load bodies
 * to ensure near-instant CLI start-up.
 */
export async function loadPromptIndex() {
  const promptsDir = path.resolve('../src/content/prompts');
  if (!fs.existsSync(promptsDir)) return [];
  
  const files = fs.readdirSync(promptsDir).filter(f => f.endsWith('.md'));
  
  // Quick-parse only the frontmatter for the index
  const index = files.map(file => {
    const fullPath = path.join(promptsDir, file);
    const content = fs.readFileSync(fullPath, 'utf-8');
    
    const fmMatch = content.match(/^---\n([\s\S]+?)\n---/);
    let meta = {};
    if (fmMatch) {
      try {
        meta = yaml.load(fmMatch[1]);
      } catch (e) {}
    }
    
    return {
      filename: file,
      title: meta.title || file.replace('.md', ''),
      category: meta.category || 'general',
      tags: meta.tags || [],
      // We don't load the body yet to save memory/IO
    };
  });
  
  return index;
}

export async function loadPromptContent(filename) {
  const promptsDir = path.resolve('../src/content/prompts');
  const fullPath = path.join(promptsDir, filename);
  const content = fs.readFileSync(fullPath, 'utf-8');
  
  const fmMatch = content.match(/^---\n([\s\S]+?)\n---/);
  const body = fmMatch ? content.replace(fmMatch[0], '').trim() : content.trim();
  
  const variables = [...new Set(body.match(/\{\{([\s\S]+?)\}\}/g) || [])].map(v => v.replace(/\{\{|\}\}/g, ''));
  
  return {
    body,
    variables
  };
}
