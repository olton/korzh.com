const id = "tutorial/how-to-add-token-to-easyquery-http-requests.mdx";
						const collection = "js-docs";
						const slug = "tutorial/how-to-add-token-to-easyquery-http-requests";
						const body = "import PageTitle from \"../../../components/PageTitle.astro\"\r\n\r\n<PageTitle title={frontmatter.title} />\r\n\r\nThere are two ways to modify HTTP requests initiated by EasyQuery.JS widgets and add some extra headers/parameters to them.\r\n\r\nFor each of those scenarios, you need to get the HttpClient service first:\r\n\r\n```js\r\nvar httpClient = view.getContext().getServices().getHttpClient();\r\n```\r\n\r\nHere `view` is a \"view\" object you work with on the current page (e.g. `AdvancedSearchView` or `ReportView`).\r\n\r\nAfter that may use the `defaultHeaders` property to set any headers you need for all EasyQuery requests:\r\n\r\n```js\r\nhttpClient.defaultHeaders['Authorization'] = 'Bearer YourTokenGoesHere';\r\n```\r\n\r\nIf the value of the request header should be calculated right at the moment of request, you can use `onRequest` event handler instead:\r\n\r\n```js\r\nhttpClient.onRequest = (request) => {\r\n    request.setHeader('my_token', 'some token');\r\n\r\n    //additionally, you can add some extra query parameters to the request\r\n    request.setQueryParam('param1', 'value1');\r\n}\r\n```\r\n\r\n## Using HttpClient to handle the response\r\n\r\nYou can also use the `HttpClient` service to catch and handle any response from the EasyQuery server-side API. Use  `onResponse` event handler for that:\r\n\r\n```js\r\nhttpClient.onResponse = (xhr) => {\r\n    console.log('EasyQuery API response', xhr);\r\n\tlet headers = xhr.getAllResponseHeaders();\r\n    console.log('EasyQuery API response headers', headers);\r\n}\r\n```";
						const data = {title:"How to add a token to EasyQuery HTTP requests",description:"There are two ways to modify HTTP requests initiated by EasyQuery.JS widgets and add some extra headers/parameters to them."};
						const _internal = {
							type: 'content',
							filePath: "D:/Projects/sites/korzh.com/src/content/js-docs/tutorial/how-to-add-token-to-easyquery-http-requests.mdx",
							rawData: "\r\ntitle: How to add a token to EasyQuery HTTP requests\r\ndescription: There are two ways to modify HTTP requests initiated by EasyQuery.JS widgets and add some extra headers/parameters to them.\r\nslug: tutorial/how-to-add-token-to-easyquery-http-requests\r",
						};

export { _internal, body, collection, data, id, slug };
