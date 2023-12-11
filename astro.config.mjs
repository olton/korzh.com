import { defineConfig } from 'astro/config';
import remarkToc from "remark-toc";

export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: 'dracula',
            langs: [],
            wrap: false,
        },
        // remarkPlugins: [remarkToc]
    },
});