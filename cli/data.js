import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This ensures we always find the prompts folder relative to the script
const PROMPTS_DIR = path.resolve(__dirname, '../src/content/prompts');

export async function loadPromptIndex() {
  if (!fs.existsSync(PROMPTS_DIR)) {
    // Fallback search: check for root content if path above fails
    const alternativeDir = path.resolve(process.cwd(), 'src/content/prompts');
    if (fs.existsSync(alternativeDir)) return scanDir(alternativeDir);
    return [];
  }
  
  return scanDir(PROMPTS_DIR);
}

function scanDir(dir) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  
  return files.map(file => {
    const fullPath = path.join(dir, file);
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
    };
  });
}

export async function loadPromptContent(filename) {
  // Use the same robust path logic
  let targetDir = PROMPTS_DIR;
  if (!fs.existsSync(PROMPTS_DIR)) {
    const alternativeDir = path.resolve(process.cwd(), 'src/content/prompts');
    if (fs.existsSync(alternativeDir)) targetDir = alternativeDir;
  }

  const fullPath = path.join(targetDir, filename);
  const content = fs.readFileSync(fullPath, 'utf-8');
  
  const fmMatch = content.match(/^---\n([\s\S]+?)\n---/);
  const body = fmMatch ? content.replace(fmMatch[0], '').trim() : content.trim();
  
  const variables = [...new Set(body.match(/\{\{([\s\S]+?)\}\}/g) || [])].map(v => v.replace(/\{\{|\}\}/g, ''));
  
  return {
    body,
    variables
  };
}
