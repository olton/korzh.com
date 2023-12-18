import {defineConfig} from 'astro/config'
import mdx from "@astrojs/mdx"
import {readingTime} from "./src/js/reading-time.js"

// https://astro.build/config
export default defineConfig({
    site: 'https://korzh.com',
    compressHTML: false,
    markdown: {
        shikiConfig: {
            theme: 'dracula',
            langs: [],
            wrap: false
        },
        remarkPlugins: [
            readingTime,
        ],
    },
    integrations: [
        mdx(),
    ]
});