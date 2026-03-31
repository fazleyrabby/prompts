import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // replace with your GitHub Pages URL
  site: 'https://fazleyrabby.github.io',
  base: '/prompts',
  integrations: [tailwind()],
  prefetch: true,
});
