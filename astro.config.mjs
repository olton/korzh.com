import { defineConfig } from 'astro/config';
import remarkToc from "remark-toc";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: [],
      wrap: false
    }
    // remarkPlugins: [remarkToc]
  },
  integrations: [mdx()]
});