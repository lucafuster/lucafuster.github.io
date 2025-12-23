import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Remplace par ton URL exacte
  site: 'https://lucafuster.github.io',
  // Ajoute le nom de ton dépôt ici
  base: '/lucafuster', 
  integrations: [tailwind()],
});