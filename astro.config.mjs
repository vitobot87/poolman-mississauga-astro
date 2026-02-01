// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://vitobot87.github.io',
  base: '/poolman-mississauga-astro',
  vite: {
    plugins: [tailwindcss()]
  }
});
