import {defineConfig, passthroughImageService} from 'astro/config';
import mdx from "@astrojs/mdx";
import {readingTime} from "./src/js/reading-time.js";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
    site: 'https://korzh.com',
    compressHTML: true,
    markdown: {
        remarkPlugins: [readingTime]
    },
    integrations: [
        expressiveCode({
            themes: ['dracula']
        }),
        mdx(),
    ],
});