import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // updated for your custom subdomain
  site: 'https://prompts.fazleyrabbi.xyz',
  base: '/', 
  integrations: [tailwind()],
  prefetch: true,
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
  output: 'static',
  compressHTML: true,
});
