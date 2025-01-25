import { _ as __astro_tag_component__, F as Fragment, t as createVNode } from './astro_D2KdCmZW.mjs';
import { $ as $$Image } from './pages/404_BbxC-4jy.mjs';
import 'clsx';

const newProjectImage = new Proxy({"src":"/_astro/create-new-project-dlg.CNeiqPL9.png","width":1277,"height":841,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const configureProjectImage = new Proxy({"src":"/_astro/configure-project-dlg.DgTZUipH.png","width":1236,"height":809,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const structureProjectImage = new Proxy({"src":"/_astro/default-asp-net-project-structure.CtzMhyZZ.png","width":305,"height":301,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const infoProjectImage = new Proxy({"src":"/_astro/project-additional-info.BBC9sChc.png","width":1022,"height":677,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Single-file web API services with .NET 5 and ASP.NET Core",
  "tags": ["ASP-NET-CORE", "WEB-SERVICE", "TOP-LEVEL-STATEMENTS"],
  "slug": "asp-net-core-default-project-structure-explained-part-1",
  "date": "2020-05-23T00:00:00.000Z",
  "cover": {
    "src": "/images/computer-coffee.jpg"
  },
  "sort": 5,
  "description": "When you start learning a programming language, one of your first exercises will probably be to write a \u201CHello World\u201D application to figure out the basic concepts",
  "relatedPosts": ["asp-net-core-project-structure-explained-part2"],
  "time": "9 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "creating-a-new-web-project",
    "text": "Creating a New Web Project"
  }, {
    "depth": 2,
    "slug": "project-structure",
    "text": "Project Structure"
  }, {
    "depth": 3,
    "slug": "1-connected-services",
    "text": "1. Connected Services"
  }, {
    "depth": 3,
    "slug": "2-dependencies",
    "text": "2. Dependencies"
  }, {
    "depth": 3,
    "slug": "3-properties",
    "text": "3. Properties"
  }, {
    "depth": 3,
    "slug": "4-wwwroot",
    "text": "4. wwwroot"
  }, {
    "depth": 3,
    "slug": "5-areas",
    "text": "5. Areas"
  }, {
    "depth": 3,
    "slug": "6-data",
    "text": "6. Data"
  }, {
    "depth": 3,
    "slug": "7-pages",
    "text": "7. Pages"
  }, {
    "depth": 3,
    "slug": "8-root-folder-files",
    "text": "8. Root Folder Files"
  }, {
    "depth": 4,
    "slug": "programcs",
    "text": "Program.cs"
  }, {
    "depth": 4,
    "slug": "applicationsettings",
    "text": "application.settings"
  }, {
    "depth": 4,
    "slug": "startupcs",
    "text": "Startup.cs"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    button: "button",
    code: "code",
    div: "div",
    em: "em",
    figcaption: "figcaption",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    link: "link",
    p: "p",
    pre: "pre",
    script: "script",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "When you start learning a programming language, one of your first exercises will probably be to write a \u201CHello World\u201D application to figure out the basic concepts.\r\nThis exercise works well if you\u2019re writing a simple console program that will only print out the greetings on the screen."
    }), "\n", createVNode(_components.p, {
      children: "However, once you move onto learning to write web apps using a new framework, such as ASP.NET Core, such a simple code is not enough \u2014 partially because web apps are more complex.\r\nAnd also because, right off the bat, the tools and frameworks used for writing web apps try to introduce advanced techniques and approaches for building and maintaining them once they scale."
    }), "\n", createVNode(_components.p, {
      children: "It all can seem like too much for a beginner.\r\nHere we will take apart the default ASP.NET Core solution template piece by piece, then figure out the purpose of each piece and how exactly it works."
    }), "\n", createVNode(_components.p, {
      children: "Please note that this isn\u2019t a full-scale tutorial on all the aspects of creating web apps in ASP.NET Core.\r\nRather, it is a short guide where you can check why a particular part is added to your project or find a piece of code and a link to the relevant documentation that explains it in detail."
    }), "\n", createVNode(_components.p, {
      children: "As an example, I used a new solution that targets .NET 5.\r\nHowever, most of this article\u2019s information will also be relevant for the ASP.NET Core projects that target .NET Core 3.1 or the upcoming .NET 6."
    }), "\n", createVNode(_components.h2, {
      id: "creating-a-new-web-project",
      children: "Creating a New Web Project"
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s start with creating a new empty web app with the \u201CCreate a new project\u201D wizard in Visual Studio."
    }), "\n", createVNode(_components.p, {
      children: "Here is how this step should look:"
    }), "\n", createVNode($$Image, {
      src: newProjectImage,
      alt: "Create new project dialog in Visual Studio"
    }), "\n", createVNode(_components.p, {
      children: "When you press Next, the wizard will ask you to choose the names of the new solution and project and the folder to place the solution files in:"
    }), "\n", createVNode($$Image, {
      src: configureProjectImage,
      alt: "Configure new project dialog in Visual Studio"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Tip #1"
        }), ": Place the project and the solution into separate folders. Choosing the same location for both is convenient only for very small applications. Once you start adding other layers to your solution (domain classes, data layers, API, etc.), having them in separate projects will be more practical."]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Tip #2"
        }), ": Use the general name of your application for the name of the solution (like \u201CMyCoolApp\u201D) and add the \u201C.Web\u201D suffix for the project name (e.g., \u201CMyCoolApp.Web\u201D)."]
      }), "\n"]
    }), "\n", createVNode("div", {
      id: "projectCreationFinalStep",
      children: [createVNode(_components.p, {
        children: "Finally, you will need to choose some additional project options."
      }), createVNode($$Image, {
        src: infoProjectImage,
        alt: "Additional information for the new project"
      }), createVNode(_components.p, {
        children: "The most important options here are:"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Target Framework"
          }), ". I suggest selecting the latest one (for the moment), .NET 5, but all the information in this article is relevant for .NET Core 3.1 or .NET 6 (it\u2019s in the pre-release state now) projects as well."]
        }), "\n", createVNode(_components.li, {
          children: [createVNode(_components.strong, {
            children: "Authentication Type"
          }), ". In this article, we suppose this option is set to ", createVNode(_components.em, {
            children: "Individual Accounts"
          }), ". This value means that our new web project will contain some means for managing user accounts and provide UI for the basic authentication operations: Login, Registration, Reset Password, etc."]
        }), "\n"]
      }), createVNode(_components.p, {
        children: "Let\u2019s click on \u201CCreate\u201D when everything is set and get our new solution."
      })]
    }), "\n", createVNode(_components.h2, {
      id: "project-structure",
      children: "Project Structure"
    }), "\n", createVNode(_components.p, {
      children: "After finishing the steps described above, you will get a new solution with one project inside it."
    }), "\n", createVNode(_components.p, {
      children: "The structure of that project will look similar (or even the same) to the following one:"
    }), "\n", createVNode($$Image, {
      src: structureProjectImage,
      alt: "Default ASP.NET Core project structure"
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s take a closer look at each part of your new project."
    }), "\n", createVNode(_components.h3, {
      id: "1-connected-services",
      children: "1. Connected Services"
    }), "\n", createVNode(_components.p, {
      children: "This is the first node in your project\u2019s structure and possibly the less-used one.\r\nIt is intended to automate the multiple steps necessary to connect a project to an external service (like Azure Storage or Application Insights).\r\nYou can right-click on this node and select \u201CAdd connected service\u2026\u201D to run a wizard that will lead you through the process.\r\nUsually, it just adds necessary packages and gives you basic instructions on how to start using your app\u2019s service.\r\nAs I\u2019ve already mentioned, there is a good chance you will not use this node during your project\u2019s lifetime."
    }), "\n", createVNode(_components.h3, {
      id: "2-dependencies",
      children: "2. Dependencies"
    }), "\n", createVNode(_components.p, {
      children: "This element of your project structure contains all packets or other projects on which your project depends."
    }), "\n", createVNode(_components.p, {
      children: "There are four main folders inside this node:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Analyzers"
        }), "\r\nThey help you make your code better: cleaner, error-free. Each analyzer checks that your code satisfies a list of rules incorporated in it. If any part of your code does not apply to one of the rules, you will see either a Warning or an Error while you build your project."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Please note that analyzers work only at compile time and do not affect your resulting application."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Frameworks"
        }), "\r\nThis folder contains a list of frameworks your project depends on. This information is important if you ", createVNode(_components.a, {
          href: "https://docs.microsoft.com/en-us/dotnet/core/deploying/",
          children: "publish your web app as a runtime-dependent"
        }), " (as opposed to a self-contained one). In this case, all the frameworks listed here must be installed on the server where you will run your app."]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["NB: You can use ", createVNode(_components.code, {
          children: "dotnet --info"
        }), " console command to check the list of installed frameworks.*"]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Packages"
        }), " This is the main item in this node. It lists all NuGet packages you added (installed) to your project. If any of those packages depend on other packages, they will be installed automatically and listed as sub-nodes of the root-level packages. You can remove each installed package here (right-click / Remove)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Projects"
        }), " This is the list of other projects in this solution your current project depends on.\r\nYou can reference other projects using the \u201CAdd reference\u201D command from the right-click menu.\r\nObviously, this node is empty now since we have only one project in the solution."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "3-properties",
      children: "3. Properties"
    }), "\n", createVNode(_components.p, {
      children: "This part contains different properties of your project that you can modify by double-clicking on this node in the Solution Explorer. Most of the properties there affect the compile- and debug-time behavior of your project."
    }), "\n", createVNode(_components.p, {
      children: "The only item inside this node is a \u201ClaunchSettings.json\u201D file containing the launch profiles. Each profile defines how to run your project when you click on the \u201CRun\u201D button in Visual Studio."
    }), "\n", createVNode(_components.h3, {
      id: "4-wwwroot",
      children: "4. wwwroot"
    }), "\n", createVNode(_components.p, {
      children: "This folder contains all the static files of your web application: CSS files, JavaScript files, images, and icons.\r\nAs you might figure out from its name, this will be the root folder of your web app.\r\nSo if you put an \u201Cimage1.png\u201D file into the \u201Cwwwroot/images/dir1\u201D folder, it will be accessible in the browser by the \u201C/images/dir/image1.png\u201D address."
    }), "\n", createVNode(_components.h3, {
      id: "5-areas",
      children: "5. Areas"
    }), "\n", createVNode(_components.p, {
      children: "This folder is added because we selected the \u201CIndividual Accounts\u201D value for the \u201CAuthentication Type\u201D option when created the project."
    }), "\n", createVNode(_components.p, {
      children: ["In addition to the core authentication/authorization packages (which is called ASP.NET Core Identity), the default template also adds the \u201CMicrosoft.AspNetCore.Identity.UI\u201D package. This is a Razor-class library that contains all forms and partial views for authentication and user management: Login, Registration, Reset Password, User Profile, and many others.\r\nAll these forms will use your layout (defined in ", createVNode(_components.em, {
        children: "Pages/Shared/_Layout.cshtml"
      }), ") and so will match your website\u2019s design."]
    }), "\n", createVNode(_components.p, {
      children: ["However, you still might want to change some of those forms (or even all of them).\r\nIn this case, you can use the Scaffold command and add the necessary files to your project. The scaffolded files will be added to the ", createVNode(_components.em, {
        children: "Areas/Identity"
      }), " folder."]
    }), "\n", createVNode(_components.h3, {
      id: "6-data",
      children: "6. Data"
    }), "\n", createVNode(_components.p, {
      children: "As in the previous case, this folder appears in our new project because of the \u201CAuthentication Type\u201D option that was turned on at the beginning."
    }), "\n", createVNode(_components.p, {
      children: ["By default, all user-related information (users, their roles, claims, etc.) is stored in a database accessed with ", createVNode(_components.a, {
        href: "https://docs.microsoft.com/en-us/ef/core/",
        children: "Entity Framework Core"
      }), " ORM (object-relational mapping) framework. If you are not familiar with EF Core, you can find a lot of tutorials on ", createVNode(_components.a, {
        href: "https://docs.microsoft.com/en-us/ef/core/get-started/",
        children: "Microsoft Docs"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "The \u201CData\u201D folder contains your DB context class named \u201CApplicationDbContext.\u201D This class is derived from the \u201CIdentityDbContext\u201D class defined in the \u201CMicrosoft.AspNetCore.Identity.EntityFrameworkCore\u201D assembly, and it includes all DB sets (tables) necessary to store user-related information."
    }), "\n", createVNode(_components.p, {
      children: "You can use this class or create another DbContext class to add your models."
    }), "\n", createVNode(_components.p, {
      children: "Additionally, the \u201CData\u201D folder also includes \u201CMigrations\u201D sub-folder with all your Entity Framework Core migrations."
    }), "\n", createVNode(_components.h3, {
      id: "7-pages",
      children: "7. Pages"
    }), "\n", createVNode(_components.p, {
      children: ["This folder contains all pages (forms) of your web applications. ASP.NET Core has two default approaches for content rendering: MVC (Model View Controller) and ", createVNode(_components.a, {
        href: "https://docs.microsoft.com/en-us/aspnet/core/razor-pages",
        children: "Razor Pages"
      }), " (which is, actually, a kind of MVC, where each controller and the corresponding view are stored together). Both approaches use ", createVNode(_components.a, {
        href: "https://docs.microsoft.com/en-us/aspnet/core/mvc/views/razor",
        children: "Razor syntax"
      }), " that you can think of as HTML + C#."]
    }), "\n", createVNode(_components.p, {
      children: "Each Razor page is represented by a \u201C.cshtml\u201D file. The code related to it is stored in a so-called \u201Ccode-behind\u201D file with the same name and a \u201C.cshtml.cs\u201D extension."
    }), "\n", createVNode(_components.p, {
      children: "From the start, the \u201CPages\u201D folder contains a few default pages, such as Index (the home page of your web app), Privacy, and Error. Additionally, you can find the main layout file (_Layout.cshtml) and some partial views in the \u201CPages/Shared\u201D folder."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "NB"
      }), ": It\u2019s a common practice to prefix the names of the layouts and partial views with ", createVNode(_components.code, {
        children: "_"
      }), " symbol."]
    }), "\n", createVNode(_components.h3, {
      id: "8-root-folder-files",
      children: "8. Root Folder Files"
    }), "\n", createVNode(_components.p, {
      children: "Now, when we\u2019ve looked over all the main folders created with the default ASP.NET Core application template, let\u2019s take a closer look at the files stored in the project\u2019s root folder. They are the most important part of the project."
    }), "\n", createVNode(_components.h4, {
      id: "programcs",
      children: "Program.cs"
    }), "\n", createVNode(_components.p, {
      children: "This file defines the \u201CProgram\u201D class with one static method, \u201CMain,\u201D which is the entry point of your web application."
    }), "\n", createVNode(_components.p, {
      children: ["The only purpose of this method is to define the ", createVNode(_components.a, {
        href: "https://docs.microsoft.com/en-us/aspnet/core/fundamentals/?view=aspnetcore-3.1#host",
        children: "host"
      }), " and then pass the control to the Startup class. For more information about the default host builder, look at an article about ", createVNode(_components.a, {
        href: "https://docs.microsoft.com/en-us/aspnet/core/fundamentals/host/generic-host",
        children: "Generic Host"
      }), " on Microsoft\u2019s Docs."]
    }), "\n", createVNode(_components.h4, {
      id: "applicationsettings",
      children: "application.settings"
    }), "\n", createVNode(_components.p, {
      children: "This is a JSON file that stores the application\u2019s settings. The settings have a hierarchical structure and can be accessed with the Configuration object defined in the Startup class or in any other place of your program where you injected IConfiguration service. For example:"
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: [createVNode(_components.link, {
        rel: "stylesheet",
        href: "/_astro/ec.34q1a.css"
      }), createVNode(_components.script, {
        type: "module",
        src: "/_astro/ec.sgewm.js"
      }), createVNode(_components.figure, {
        class: "frame",
        children: [createVNode(_components.figcaption, {
          class: "header"
        }), createVNode(_components.pre, {
          tabindex: "0",
          children: createVNode(_components.code, {
            children: createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "var"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " defaultLogLevel "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " Configuration."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "GetValue"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "string"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ">("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "Logging:LogLevel:Default"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ");"
              })]
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "var defaultLogLevel = Configuration.GetValue<string>(\"Logging:LogLevel:Default\");",
            children: createVNode(_components.div, {})
          })
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["The different levels of hierarchy are separated by the colon (", createVNode(_components.code, {
        children: ":"
      }), ") symbol."]
    }), "\n", createVNode(_components.p, {
      children: ["By default, in addition to \u201Capplication.settings\u201D, the ASP.NET Core template also includes an \u201Capplication.Development.settings\u201D file.\r\nThe settings defined in this file are loaded only into the Development environment and are not available in production.\r\nTo learn more about the \u201C.settings\u201D files and configuration in ASP.NET Core projects in general, please read ", createVNode(_components.a, {
        href: "https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/",
        children: "this article"
      }), " on Microsoft\u2019s Docs."]
    }), "\n", createVNode(_components.h4, {
      id: "startupcs",
      children: "Startup.cs"
    }), "\n", createVNode(_components.p, {
      children: "This is the final part of the ASP.NET Core project\u2019s structure. The \u201CStartup\u201D class serves three main purposes:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "It performs all initialization tasks (setting application-wide constants, DB seeding, migrations, etc.)."
      }), "\n", createVNode(_components.li, {
        children: ["It registers all services used in this project in the ", createVNode(_components.a, {
          href: "https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection",
          children: "DI (dependency injection) container"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["It defines the ", createVNode(_components.a, {
          href: "https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection",
          children: "middleware pipeline"
        }), " of your web-application."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This class contains a lot of code (as for a project that has just been created) from the beginning and will become even bigger when you start adding new features to your application."
    }), "\n", createVNode(_components.p, {
      children: ["We will take a look at it in more detail in the ", createVNode(_components.a, {
        href: "asp-net-core-project-structure-explained-part2",
        children: "next article"
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/2020-05-23-asp-net-core-project-structure-explained-part1.mdx";
const file = "D:/Projects/sites/korzh.com/src/content/blog/2020-05-23-asp-net-core-project-structure-explained-part1.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Projects/sites/korzh.com/src/content/blog/2020-05-23-asp-net-core-project-structure-explained-part1.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
