import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alterationsbynicole.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
