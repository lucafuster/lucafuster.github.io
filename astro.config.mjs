import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  site: 'https://lucafuster.github.io',
  

  integrations: [tailwind()],
});