import { _ as __astro_tag_component__, F as Fragment, t as createVNode } from './astro_D2KdCmZW.mjs';
import { $ as $$Image } from './pages/404_BbxC-4jy.mjs';
import 'clsx';

const demo1Image = new Proxy({"src":"/_astro/easydata-demo01.trlAlbo9.gif","width":800,"height":445,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const sshot1Image = new Proxy({"src":"/_astro/easydata-sshot01.B_qVxHF8.jpg","width":1141,"height":641,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const sshot2Image = new Proxy({"src":"/_astro/easydata-sshot02.DbTR3IZv.jpg","width":1071,"height":907,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const sshot3Image = new Proxy({"src":"/_astro/easydata-sshot03.L1Iiv_QG.jpg","width":1244,"height":911,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "CRUD operations in ASP.NET Core with EasyData library",
  "tags": ["ASP-NET-CORE", "ENTITY-FRAMEWORK", "JAVASCRIPT", "CRUD", "PAGING", "DATA-FILTERING"],
  "slug": "crud-asp-net-core-with-easydata",
  "date": "2021-03-31T00:00:00.000Z",
  "cover": {
    "src": "/images/db-objects-01.jpg"
  },
  "sort": 5,
  "description": "Implementing CRUD operations in your ASP.NET Core application can be a very tedious and time-consuming task. EasyData helps to add all necessary functionality (and even more) in a matter of minutes",
  "time": "7 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "problem",
    "text": "Problem"
  }, {
    "depth": 2,
    "slug": "solution-easydata-library",
    "text": "Solution: EasyData library"
  }, {
    "depth": 2,
    "slug": "quick-demo",
    "text": "Quick demo"
  }, {
    "depth": 2,
    "slug": "getting-started",
    "text": "Getting Started"
  }, {
    "depth": 3,
    "slug": "1-install-easydata-nuget-packages",
    "text": "1. Install EasyData NuGet packages"
  }, {
    "depth": 3,
    "slug": "2-add-easydata-middleware-in-startupconfigure",
    "text": "2. Add EasyData middleware in Startup.Configure"
  }, {
    "depth": 3,
    "slug": "3-set-up-a-catch-all-page-for-all-crud-operations",
    "text": "3. Set up a catch-all page for all CRUD operations"
  }, {
    "depth": 4,
    "slug": "list-view-screen-for-one-entity",
    "text": "List view screen for one entity:"
  }, {
    "depth": 4,
    "slug": "edit-record-dialog",
    "text": "\u201CEdit Record\u201D dialog:"
  }, {
    "depth": 4,
    "slug": "lookup-dialog-was-opened-from-edit-record",
    "text": "\u201CLookup\u201D dialog (was opened from \u201CEdit Record\u201D):"
  }, {
    "depth": 2,
    "slug": "how-it-works",
    "text": "How it works"
  }, {
    "depth": 3,
    "slug": "metadata",
    "text": "Metadata"
  }, {
    "depth": 3,
    "slug": "easydata-middleware",
    "text": "EasyData middleware"
  }, {
    "depth": 3,
    "slug": "easydata-ui-root-page",
    "text": "EasyData UI root page"
  }, {
    "depth": 2,
    "slug": "wrapping-up",
    "text": "Wrapping up"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    div: "div",
    figcaption: "figcaption",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    link: "link",
    ol: "ol",
    p: "p",
    pre: "pre",
    script: "script",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "problem",
      children: "Problem"
    }), "\n", createVNode(_components.p, {
      children: "One of the first tasks for most business applications is to implement CRUD (Create, Read, Update, Delete) operations for the main entities the app works with."
    }), "\n", createVNode(_components.p, {
      children: "Every developer faces the following problems as part of solving the task:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "The creation of CRUD pages and forms is very boring and time-consuming. Believe me, I\u2019ve been there a lot of times."
      }), "\n", createVNode(_components.li, {
        children: "If you do it manually, it can be very slow and error-prone (missed fields, forgotten validators, etc)."
      }), "\n", createVNode(_components.li, {
        children: "Of course, you can use the scaffolding tool provided by Visual Studio."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "However, it\u2019s also not a quick process either, because you need to run that tool for each model class.\r\nAs a result, you get many .cs and .cshtml files, which you\u2019ll have to edit manually if something in the default behavior or appearance doesn\u2019t suit your needs.\r\nIn the event of changes in the model classes, you\u2019ll need to update those generated controllers and pages manually\r\nor regenerate the code and forms from scratch for each affected model class."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Moreover, even the built-in scaffolding doesn\u2019t provide some important, often essential functions such as paging or search."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "solution-easydata-library",
      children: "Solution: EasyData library"
    }), "\n", createVNode(_components.p, {
      children: ["To solve most (if not all) of those problems we created the ", createVNode(_components.a, {
        href: "https://github.com/KorzhCom/EasyData",
        children: "EasyData library"
      }), ".\r\nThe main advantage of EasyData is that it employs a declarative approach."]
    }), "\n", createVNode(_components.p, {
      children: "The whole process can be split into two main steps:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "You \u201Cdescribe\u201D what data (entities and attributes) you want to work with and\r\nhow your application should work with that data (types, constraints, relations between entities, etc)."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Based on this information, the EasyData library establishes an API endpoint for CRUD operations and a vanilla JavaScript-based UI\r\nthat lets your users perform those operations via the API."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The most wonderful thing here is that when using Entity Framework Core,\r\nall you need for the first step (\u201Cdescribing\u201D the data) is your DbContext.\r\nSimply \u201Cfeed\u201D it to the library, and EasyData automatically extracts all the information needed to create the API endpoints and CRUD UI."
    }), "\n", createVNode(_components.h2, {
      id: "quick-demo",
      children: "Quick demo"
    }), "\n", createVNode(_components.p, {
      children: "Here\u2019s a small introduction video that shows how EasyData works:"
    }), "\n", createVNode("img", {
      src: demo1Image.src,
      alt: "EasyData quick demo"
    }), "\n", createVNode(_components.h2, {
      id: "getting-started",
      children: "Getting Started"
    }), "\n", createVNode(_components.p, {
      children: ["First of all, to test EasyData you can open and run one of the ", createVNode(_components.a, {
        href: "https://github.com/korzh/EasyData/tree/master/samples",
        children: "sample projects"
      }), " available in this repository."]
    }), "\n", createVNode(_components.p, {
      children: "Installing EasyData to your project takes the following three simple steps:"
    }), "\n", createVNode(_components.h3, {
      id: "1-install-easydata-nuget-packages",
      children: "1. Install EasyData NuGet packages"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "EasyData.AspNetCore"
      }), "\n", createVNode(_components.li, {
        children: "EasyData.EntityFrameworkCore.Relational"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-add-easydata-middleware-in-startupconfigure",
      children: ["2. Add EasyData middleware in ", createVNode(_components.code, {
        children: "Startup.Configure"
      })]
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
            children: [createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "using"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "EasyData"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "Services"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ";"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ".    .    .    .    ."
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: "\n"
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    app."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "UseEndpoints"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FFB86C",
                  "--0fs": "italic"
                },
                children: "endpoints"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "=>"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    {"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        endpoints."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "MapEasyData"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FFB86C",
                  "--0fs": "italic"
                },
                children: "options"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "=>"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " {"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "            options."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "UseDbContext"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "AppDbContext"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ">();"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        });"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: "\n"
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        endpoints."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "MapRazorPages"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "();"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    });"
              })
            })]
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "using EasyData.Services;\x7F.    .    .    .    .\x7F\x7F    app.UseEndpoints(endpoints =>\x7F    {\x7F        endpoints.MapEasyData(options => {\x7F            options.UseDbContext<AppDbContext>();\x7F        });\x7F\x7F        endpoints.MapRazorPages();\x7F    });",
            children: createVNode(_components.div, {})
          })
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "In the middleware options, we also specify the type of DbContext object that will be used as the source of the metadata."
    }), "\n", createVNode(_components.h3, {
      id: "3-set-up-a-catch-all-page-for-all-crud-operations",
      children: "3. Set up a catch-all page for all CRUD operations"
    }), "\n", createVNode(_components.p, {
      children: ["If you\u2019re using Razor Pages, add a new page (for example ", createVNode(_components.code, {
        children: "EasyData.chstml"
      }), "). If it\u2019s MVC, you\u2019ll need a controller and a view.\r\nThis page will \u201Ccatch\u201D all URLs that begin with a certain prefix (", createVNode(_components.code, {
        children: "/easydata"
      }), " by default but it\u2019s configurable). So, we use a special catch-all parameter in the route definition (", createVNode(_components.code, {
        children: '"/easydata/{**entity}"'
      }), ")."]
    }), "\n", createVNode(_components.p, {
      children: ["We also add EasyData styles and the script file (", createVNode(_components.code, {
        children: "easydata.min.js"
      }), "), which renders the data-management UI and handles all CRUD operations on the client-side."]
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
        class: "frame",
        children: [createVNode(_components.figcaption, {
          class: "header"
        }), createVNode(_components.pre, {
          tabindex: "0",
          children: createVNode(_components.code, {
            children: [createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "@page "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "/easydata/{**entity}"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "@{"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    ViewData["
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "Title"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "] "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "EasyData"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ";"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "}"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "link"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " rel"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "stylesheet"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " href"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "https://cdn.korzh.com/ed/1.2.2/easydata.min.css"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "/>"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: "\n"
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "div id"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "EasyDataContainer"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "></"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "div"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ">"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: "\n"
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "@section Scripts {"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "script src"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "https://cdn.korzh.com/ed/1.2.2/easydata.min.js"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " type"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "text/javascript"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "></"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "script"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ">"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "script"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ">"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        window."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "addEventListener"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "'load'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "function"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " () {"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "            "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "new"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "easydata"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "crud"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "EasyDataViewDispatcher"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "()."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "run"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "()"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        });"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "</"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "script"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ">"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "}"
              })
            })]
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": `@page "/easydata/{**entity}"\x7F@{\x7F    ViewData["Title"] = "EasyData";\x7F}\x7F<link rel="stylesheet" href="https://cdn.korzh.com/ed/1.2.2/easydata.min.css" />\x7F\x7F<div id="EasyDataContainer"></div>\x7F\x7F@section Scripts {\x7F    <script src="https://cdn.korzh.com/ed/1.2.2/easydata.min.js" type="text/javascript"><\/script>\x7F    <script>\x7F        window.addEventListener('load', function () {\x7F            new easydata.crud.EasyDataViewDispatcher().run()\x7F        });\x7F    <\/script>\x7F}`,
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["That\u2019s it. Now you can run your web app, open the ", createVNode(_components.code, {
        children: "/easydata"
      }), " URL and enjoy CRUD functionality."]
    }), "\n", createVNode(_components.p, {
      children: "The result will be something like this:"
    }), "\n", createVNode(_components.h4, {
      id: "list-view-screen-for-one-entity",
      children: "List view screen for one entity:"
    }), "\n", createVNode($$Image, {
      src: sshot1Image,
      alt: "List view screen for Orders entity"
    }), "\n", createVNode(_components.h4, {
      id: "edit-record-dialog",
      children: "\u201CEdit Record\u201D dialog:"
    }), "\n", createVNode($$Image, {
      src: sshot2Image,
      alt: "Edit Record dialog"
    }), "\n", createVNode(_components.h4, {
      id: "lookup-dialog-was-opened-from-edit-record",
      children: "\u201CLookup\u201D dialog (was opened from \u201CEdit Record\u201D):"
    }), "\n", createVNode($$Image, {
      src: sshot3Image,
      alt: "Lookup dialog"
    }), "\n", createVNode(_components.h2, {
      id: "how-it-works",
      children: "How it works"
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s briefly go over how all this magic works.\r\nAs we mentioned before EasyData takes care of three main things:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "It collects database metadata."
      }), "\n", createVNode(_components.li, {
        children: "It establishes an API for the main CRUD operations."
      }), "\n", createVNode(_components.li, {
        children: "It renders UI (again, based on the metadata) and processes all user interactions in that UI."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s explore all these parts in detail."
    }), "\n", createVNode(_components.h3, {
      id: "metadata",
      children: "Metadata"
    }), "\n", createVNode(_components.p, {
      children: "Metadata is the data about your data: what entities (tables) are stored in your database,\r\nhow they\u2019re connected, what attributes (fields) they have, what  the types of attributes are\r\nand what the constraints are with respect to the values we can store in those attributes."
    }), "\n", createVNode(_components.p, {
      children: ["EasyData collects metadata (in one way or another) and stores it in the instance of ", createVNode(_components.code, {
        children: "MetaData"
      }), " class.\r\nThis object contains the list of entities (tables), the attributes (fields) for each entity, the connections between entities,\r\nand some additional information used in API and during UI rendering and processing."]
    }), "\n", createVNode(_components.p, {
      children: "To fill the MetaData object, we specify a metadata loader. In the example above, we did it with the UseDbContext call.\r\nSo, the metadata is loaded from a DbConext object. Currently (in version 1.2) this is the only metadata loader available.\r\nIn future versions, it will be possible to load metadata directly from a DbConnection object or perhaps with some other method."
    }), "\n", createVNode(_components.h3, {
      id: "easydata-middleware",
      children: "EasyData middleware"
    }), "\n", createVNode(_components.p, {
      children: "EasyData middleware is responsible for establishing a REST API for all CRUD (and not only) operations initiated by the client side."
    }), "\n", createVNode(_components.p, {
      children: ["To add the middleware to your pipeline use ", createVNode(_components.code, {
        children: "MapEasyData"
      }), " extension function inside ", createVNode(_components.code, {
        children: "UseEndpoints"
      }), " configuration delegate:"]
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
        class: "frame",
        children: [createVNode(_components.figcaption, {
          class: "header"
        }), createVNode(_components.pre, {
          tabindex: "0",
          children: createVNode(_components.code, {
            children: [createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "   app."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "UseEndpoints"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FFB86C",
                  "--0fs": "italic"
                },
                children: "endpoints"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "=>"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    {"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "       endpoints."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "MapEasyData"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FFB86C",
                  "--0fs": "italic"
                },
                children: "options"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "=>"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " {"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "            options."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "UseDbContext"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "AppDbContext"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ">();"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        });"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    }"
              })
            })]
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "   app.UseEndpoints(endpoints =>\x7F    {\x7F       endpoints.MapEasyData(options => {\x7F            options.UseDbContext<AppDbContext>();\x7F        });\x7F    }",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This call should be made before ", createVNode(_components.code, {
        children: "MapMvc"
      }), " or ", createVNode(_components.code, {
        children: "MapRazorPages"
      }), ".\r\nBy default, EasyData middleware is assigned to ", createVNode(_components.code, {
        children: "/api/easydata endpoint"
      }), ", but you can change it via the configuration function (action) passed in the parameter."]
    }), "\n", createVNode(_components.p, {
      children: ["The only thing that\u2019s required in order to configure for ", createVNode(_components.code, {
        children: "MapEasyData"
      }), " is to tell it where to take the metadata.\r\nCurrently, there\u2019s just one option available: getting metadata from a DbContext.\r\nSo, that\u2019s why we add ", createVNode(_components.code, {
        children: "UseDbContext<AppDbContext>()"
      }), " call in the example above.\r\nBesides getting metadata, ", createVNode(_components.code, {
        children: "UseDbContext"
      }), " also provides our middleware with all the means for performing CRUD operations (via the DbContext object)."]
    }), "\n", createVNode(_components.h3, {
      id: "easydata-ui-root-page",
      children: "EasyData UI root page"
    }), "\n", createVNode(_components.p, {
      children: ["The third part of the EasyData setup process is the page where the CRUD user interface is rendered.\r\nIt must be a so-called \u201Ccatch-all\u201D Razor page or MVC view.\r\nBy default, this page must be opened for any path that starts with the ", createVNode(_components.code, {
        children: "/easydata/"
      }), " prefix.\r\n(So, all paths like ", createVNode(_components.code, {
        children: "/easydata/student"
      }), " or ", createVNode(_components.code, {
        children: "/easydata/invoice"
      }), " must be processed by this page.)"]
    }), "\n", createVNode(_components.p, {
      children: ["NB: ", createVNode(_components.code, {
        children: "/easydata"
      }), " is the default prefix.\r\nYou can use another name, but in this case, it will be necessary to specify it in the options of our ", createVNode(_components.code, {
        children: "RootDispatcherView"
      }), " object."]
    }), "\n", createVNode(_components.p, {
      children: "Our catch-all page can contain any HTML element of your choice.\r\nHowever, to ensure the visualization and normal operation of the CRUD UI, it must include the following 4 elements:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "<link>"
        }), " element with a reference to EasyData CSS file (", createVNode(_components.code, {
          children: "easydata.min.cs"
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: ["Container (empty ", createVNode(_components.code, {
          children: "div"
        }), " element), in which our interface will be displayed.\r\nBy default, it must have the ID ", createVNode(_components.code, {
          children: "EasyDataContainer"
        }), ", but this can also be configured with options."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "<script>"
        }), " element with a reference to ", createVNode(_components.code, {
          children: "easydata.min.js"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["And a small script that creates and launches the ", createVNode(_components.code, {
          children: "EasyDataViewDispatcher"
        }), " object on page load."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "An example of the simplest \u201Ccatch-all\u201D page you can see in the Getting Started section above."
    }), "\n", createVNode(_components.h2, {
      id: "wrapping-up",
      children: "Wrapping up"
    }), "\n", createVNode(_components.p, {
      children: ["Currently, EasyData can work with .NET Core 3.1 and .NET 5.\r\nObviously, all ASP.NET Core and Entity Framework Core versions that can work with the specified releases of .NET (Core) are supported.\r\nHowever, it won\u2019t be a problem to add support for previous versions of .NET Core or even .NET Framework 4.x.\r\nIf anyone needs it, please ", createVNode(_components.a, {
        href: "https://github.com/KorzhCom/EasyData/issues",
        children: "submit an issue"
      }), " in EasyData\u2019s GitHub repository."]
    }), "\n", createVNode(_components.p, {
      children: "EasyData can be a good tool with which to quickly prototype a new project or create a POC (proof of concept)\r\nwhen we already understand what data we\u2019ll need but don\u2019t want to spend a lot of time on the simplest operations with that data.\r\nHowever, we hope that in time it will be possible to fully use this solution in the production environment."
    }), "\n", createVNode(_components.p, {
      children: "So, we look forward to hearing from you with any comments or advice you may have. Of course, don\u2019t forget to ad a start for the EasyData repository on GitHub, especially if this library helped you and saved some time."
    }), "\n", createVNode(_components.p, {
      children: ["So, we look forward to hearing from you with any comments or advice you may have.\r\nOf course, don\u2019t forget to add a star for the ", createVNode(_components.a, {
        href: "https://github.com/KorzhCom/EasyData",
        children: "EasyData repository on GitHub"
      }), ",\r\nespecially if this library helped you and saved some time."]
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
const url = "src/content/blog/2021-03-31-crud-asp-net-core-with-easydata.mdx";
const file = "D:/Projects/sites/korzh.com/src/content/blog/2021-03-31-crud-asp-net-core-with-easydata.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Projects/sites/korzh.com/src/content/blog/2021-03-31-crud-asp-net-core-with-easydata.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
