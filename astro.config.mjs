import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alterationsbynicole.co.uk',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
