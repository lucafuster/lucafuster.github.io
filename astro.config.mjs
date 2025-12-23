// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // site: 'https://yourusername.github.io',
  // base: '/mon-portfolio', // Changer avec nom epository, ou '/' si repo principal (username.github.io)
  
  base: '/',
  integrations: [tailwind()],
  output: 'static',
});