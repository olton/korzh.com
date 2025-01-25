import {defineConfig} from 'astro/config';
import mdx from "@astrojs/mdx";
import {readingTime} from "./src/js/reading-time.js";
import netlify from '@astrojs/netlify';

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
    site: 'https://korzh.com',
    compressHTML: true,
    output: 'server',
    adapter: netlify({
        edgeMiddleware: true
    }),
    experimental: {
        assets: true,
    },
    image: {
        service: "astro/assets/services/sharp",
    },
    markdown: {
        remarkPlugins: [readingTime]
    },
    integrations: [
        expressiveCode({
            themes: ['dracula']
        }),
        mdx(),
    ]
});