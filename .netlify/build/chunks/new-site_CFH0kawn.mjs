import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D2KdCmZW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>We are pleased to present our new website and blog.\r\nNew site and blog built with <a href=\"https://metroui.org.ua\">Metro UI</a> and <a href=\"https://astro.build\">Astro</a>.</p>\n<p>Switching to Metro UI and Astro allowed us to create a fast, reliable and modern website.</p>\n<ul class=\"contains-task-list\">\n<li class=\"task-list-item\"><input type=\"checkbox\" checked disabled> Metro UI - create a fast, reliable and modern interface</li>\n<li class=\"task-list-item\"><input type=\"checkbox\" checked disabled> Astro - build fast static site</li>\n</ul>";

				const frontmatter = {"title":"New Site and Blog","date":"2023-12-17T00:00:00.000Z","description":"We are pleased to present our new website and blog","time":"1 min read"};
				const file = "D:/Projects/sites/korzh.com/src/content/news/new-site.md";
				const url = undefined;
				function rawContent() {
					return "We are pleased to present our new website and blog.\r\nNew site and blog built with [Metro UI](https://metroui.org.ua) and [Astro](https://astro.build).\r\n\r\nSwitching to Metro UI and Astro allowed us to create a fast, reliable and modern website.\r\n\r\n+ [x] Metro UI - create a fast, reliable and modern interface\r\n+ [x] Astro - build fast static site";
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
