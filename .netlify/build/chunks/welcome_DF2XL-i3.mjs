import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D2KdCmZW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>This is our news channel.</p>";

				const frontmatter = {"title":"Welcome to our News chanel","date":"2018-01-01T00:00:00.000Z","description":"This is our news channel.","time":"1 min read"};
				const file = "D:/Projects/sites/korzh.com/src/content/news/welcome.md";
				const url = undefined;
				function rawContent() {
					return "This is our news channel.";
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
