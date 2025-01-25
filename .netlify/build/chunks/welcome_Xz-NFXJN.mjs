import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D2KdCmZW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"welcome-to-our-blog\">Welcome to our blog!</h2>\n<p>We are so exuberant to have you here! Our team is working hard to share inspiring stories, professional insights, and significant updates from our industry.</p>\n<p>Our journey is led by incessant curiosity and an enthusiasm to share knowledge and ideas. We truly believe that everyone has something to learn and something to teach.</p>\n<p>In this blog, we promise to bring you engaging content that stimulates curiosity and encourages you to explore. We will cover a range of topics, present unique perspectives, and open dialect on the latest trends in the software development.</p>\n<p>We believe that the power of community is profound, so we encourage your comments, questions, and ideas on our posts. Let’s share, grow, and learn, together.</p>\n<p>Stay tuned and happy reading!\r\nWith regards Korzh.com team!</p>";

				const frontmatter = {"title":"Welcome to our Blog!","date":"2018-01-01T00:00:00.000Z","cover":{"src":"/images/computer-coffee.jpg"},"tags":["welcome"],"sort":1,"slug":"welcome","draft":false,"description":"Welcome to our blog! We are so exuberant to have you here! Our team is working hard to share inspiring stories, professional insights, and significant updates from our industry","time":"1 min read"};
				const file = "D:/Projects/sites/korzh.com/src/content/blog/welcome.md";
				const url = undefined;
				function rawContent() {
					return "## Welcome to our blog! \r\n\r\nWe are so exuberant to have you here! Our team is working hard to share inspiring stories, professional insights, and significant updates from our industry.\r\n\r\nOur journey is led by incessant curiosity and an enthusiasm to share knowledge and ideas. We truly believe that everyone has something to learn and something to teach.\r\n\r\nIn this blog, we promise to bring you engaging content that stimulates curiosity and encourages you to explore. We will cover a range of topics, present unique perspectives, and open dialect on the latest trends in the software development.\r\n\r\nWe believe that the power of community is profound, so we encourage your comments, questions, and ideas on our posts. Let’s share, grow, and learn, together.\r\n\r\nStay tuned and happy reading! \r\nWith regards Korzh.com team!";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"welcome-to-our-blog","text":"Welcome to our blog!"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
