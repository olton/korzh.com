import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://korzh.com',
  compressHTML: false,
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: [],
      wrap: false
    }
  },
  integrations: [
      mdx(),
  ]
});