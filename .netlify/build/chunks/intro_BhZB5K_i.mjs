const id = "intro.mdx";
						const collection = "js-docs";
						const slug = "intro";
						const body = "import {Image} from \"astro:assets\";\r\nimport eqImage from \"../../images/docs/easyquery.js/eq-aspcore-razor.png\"\r\nimport PageTitle from \"../../components/PageTitle.astro\"\r\n\r\n<PageTitle title={frontmatter.title}/>\r\n\r\nEasyQuery.JS is a platform-independent solution that allows you to embed an ad hoc reporting or advanced search functionality to your web application.\r\n\r\nIt gives you a simple to use but powerful user interface to build a query or a filter to your data. Your end-users will get the power of SQL, even if they can't pronounce it properly. All the complexity is hidden from the end-user - just simple to use and easy to learn UI.\r\n\r\n<Image src={eqImage} alt=\"EasyQuery.js\" class=\"mt-4 mb-4\"/>\r\n\r\nIt doesn't matter what server-side platform/language you use - either Java, PHP, NodeJS or something else. EasyQuery.JS covers them all, requiring a minimum additional code to get things worked.\r\n";
						const data = {title:"Introduction",description:"Introduction to EasyQuery.JS documentation"};
						const _internal = {
							type: 'content',
							filePath: "D:/Projects/sites/korzh.com/src/content/js-docs/intro.mdx",
							rawData: "\r\ntitle: Introduction\r\ndescription: Introduction to EasyQuery.JS documentation\r\nslug: intro\r",
						};

export { _internal, body, collection, data, id, slug };
