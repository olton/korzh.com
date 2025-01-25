const id = "tutorial/index.mdx";
						const collection = "js-docs";
						const slug = "tutorial/index";
						const body = "import CardGrid from \"../../../components/CardGrid.astro\"\r\nimport Card from \"../../../components/Card.astro\"\r\nimport PageTitle from \"../../../components/PageTitle.astro\"\r\nimport Leader from \"../../../components/Leader.astro\"\r\nimport TextBlock from \"../../../components/TextBlock.astro\"\r\n\r\n<PageTitle title={frontmatter.title} />\r\n\r\n<Leader>This section of the documentation provides examples of how to use some aspects of EasyQuery.JS</Leader>\r\n\r\n<CardGrid className=\"mt-10\">\r\n    <Card title=\"Replacing default Calendar widget with KendoDatePicker\">\r\n        <div slot=\"body\">\r\n            EasyQuery.JS allows you to replace the default Calendar widget with any other component by your choice. Here we are going to describe how to change it with your Kendo DateTime picker. With the code above QueryPanel widget will use Kendo date/time picker widget instead of the EasyQuery's default one.\r\n        </div>\r\n        <div slot=\"actions\">\r\n            <a className=\"button info fg-white\" href=\"tutorial/replacing-datepicker-widget\">Read Tutorial...</a>\r\n        </div>\r\n    </Card>\r\n    <Card title=\"How to add a token to EasyQuery HTTP requests\">\r\n        <div slot=\"body\">\r\n            It's a very common situation when you need to add some extra headers (e.g. an authorization token) or extra query parameters to each HTTP request sent from EasyQuery.JS widgets to the backend. Here is the detailed instruction on how to do it.\r\n        </div>\r\n        <div slot=\"actions\">\r\n            <a className=\"button info fg-white\" href=\"tutorial/replacing-datepicker-widget\">Read Tutorial...</a>\r\n        </div>\r\n    </Card>\r\n</CardGrid>\r\n";
						const data = {title:"Tutorial",description:"EasyQuery.JS Tutorial"};
						const _internal = {
							type: 'content',
							filePath: "D:/Projects/sites/korzh.com/src/content/js-docs/tutorial/index.mdx",
							rawData: "\r\ntitle: Tutorial\r\ndescription: EasyQuery.JS Tutorial\r\nslug: tutorial/index\r",
						};

export { _internal, body, collection, data, id, slug };
