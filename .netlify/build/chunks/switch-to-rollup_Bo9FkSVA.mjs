import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D2KdCmZW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>We change bundler from <a href=\"https://webpack.js.org\">Webpack</a> to <a href=\"https://rollupjs.org/\">Rollup</a>.</p>";

				const frontmatter = {"title":"Switch from Webpack to Rollup","date":"2023-12-17T00:00:00.000Z","description":"We change bundler from webpack to rollup","time":"1 min read"};
				const file = "D:/Projects/sites/korzh.com/src/content/news/switch-to-rollup.md";
				const url = undefined;
				function rawContent() {
					return "We change bundler from [Webpack](https://webpack.js.org) to [Rollup](https://rollupjs.org/).";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
