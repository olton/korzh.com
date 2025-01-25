const id = "2018-05-30-embedded-resources-testing-projects.mdx";
						const collection = "blog";
						const slug = "embedded-resources-testing-projects";
						const body = "import {Image} from \"astro:assets\";\r\nimport protectImage from \"../../images/blog/vs-project-embres.png\"\r\n\r\nQuite often when you are writing tests it's necessary to store some data together with the testing project to make them available in the test functions.\r\n\r\nThe solution is quite simple:\r\n\r\n1. You put necessary files to some folder of your testing project (e.g. `Resources`)\r\n\r\n2. Mark them as \"Embedded Resource\"\r\n\r\n3. After that, you can access any of these resources in any place of your testing module.\r\n\r\nHere is an example of a resource file included in your testing project:\r\n<Image src={protectImage} alt=\"\" />\r\n\r\n\r\nHere is a static class with extension functions which may help you on step #3:\r\n\r\n```csharp\r\npublic static class ResourceUtils\r\n{\r\n\tpublic static Stream GetResourceStream(this Assembly assembly, string resourceFolder, string resourceFileName)\r\n\t{\r\n\r\n\t\tstring[] nameParts = assembly.FullName.Split(',');\r\n\r\n\t\tstring resourceName = nameParts[0] + \".\" +  resourceFolder + \".\" + resourceFileName;\r\n\r\n\t\tvar resources = new List<string>(assembly.GetManifestResourceNames());\r\n\t\tif (resources.Contains(resourceName))\r\n\t\t\treturn assembly.GetManifestResourceStream(resourceName);\r\n\t\telse\r\n\t\t\treturn null;\r\n\t}\r\n\r\n\tpublic static string GetResourceAsString(this Assembly assembly, string folder, string fileName)\r\n\t{\r\n\t\tstring fileContent;\r\n\t\tusing (StreamReader sr = new StreamReader(GetResourceStream(assembly, folder, fileName))) {\r\n\t\t\tfileContent = sr.ReadToEnd();\r\n\t\t}\r\n\t\treturn fileContent;\r\n\t}\r\n\r\n\tpublic static Stream GetResourceStream(this Type type, string resourceFolder, string resourceFileName)\r\n\t{\r\n\t\tvar assembly = type.GetTypeInfo().Assembly;\r\n\t\treturn assembly.GetResourceStream(resourceFolder, resourceFileName);\r\n\t}\r\n\r\n\tpublic static string GetResourceAsString(this Type type, string folder, string fileName)\r\n\t{\r\n\t\tvar assembly = type.GetTypeInfo().Assembly;\r\n\t\treturn assembly.GetResourceAsString(folder, fileName);\r\n\t}\r\n}\r\n\r\npublic class ResourceUtilsException : Exception {\r\n\tpublic ResourceUtilsException(string message) : base(message) { }\r\n}\r\n```\r\n\r\nTo make it even simpler - we put these and some other functions to a [Nuget package](https://www.nuget.org/packages/Korzh.Utils/) you can reference in your project.\r\n\r\nFinally, here is how your testing function will access the resource file defined on the first step:\r\n\r\n```csharp\r\n[TestMethod]\r\npublic void TestMethod1() {\r\n\tstring xml = typeof(UnitTest1).GetResourceAsString(\"Resources\", \"XMLFile1.xml\");\r\n\t.    .    .    .    .    .\r\n}\r\n```\r\n(here, for the `typeof` function parameter you use any class from the same assembly where your resources are placed)\r\n\r\nEnjoy!\r\n";
						const data = {title:"Using embedded resources in testing projects",date:new Date(1527638400000),cover:{src:"/images/cubes.png",alt:"Alt text"},description:"Quite often when you are writing tests it's necessary to store some data together with the testing project to make them available in the test functions",draft:false,category:"general",tags:["UNIT-TESTING","INTEGRATION-TESTS","RESOURCES"],sort:5};
						const _internal = {
							type: 'content',
							filePath: "D:/Projects/sites/korzh.com/src/content/blog/2018-05-30-embedded-resources-testing-projects.mdx",
							rawData: "\r\ntitle: Using embedded resources in testing projects\r\ntags: [\"UNIT-TESTING\", \"INTEGRATION-TESTS\", \"RESOURCES\"]\r\nslug: embedded-resources-testing-projects\r\ndate: 2018-05-30\r\ncover: {\r\nsrc: '/images/cubes.png'\r\n}\r\nsort: 5\r\ndescription: Quite often when you are writing tests it's necessary to store some data together with the testing project to make them available in the test functions\r",
						};

export { _internal, body, collection, data, id, slug };
