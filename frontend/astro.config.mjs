// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://glennfreeman.github.io',
  base: '/tandem-website',
  outDir: '../docs',
  vite: {
    plugins: [tailwindcss()]
  }
});