import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from "autoprefixer"
import progress from 'rollup-plugin-progress';
import replace from '@rollup/plugin-replace';

const sourcemap = false

export default {
    input: "./vendor/metro/index.js",
    watch: {
        include: 'source/**',
        clearScreen: false
    },
    plugins: [
        progress({
            clearLine: true,
        }),
        replace({
            preventAssignment: true,
        }),
        postcss({
            extract: false,
            minimize: true,
            use: ['less'],
            sourceMap: sourcemap,
            plugins: [
                autoprefixer(),
            ]
        }),
        nodeResolve({
            browser: true
        }),
        commonjs(),
    ],
    output: {
        file: './src/js/metro.js',
        format: 'iife',
        sourcemap,
        plugins: [
            terser()
        ]
    }
}