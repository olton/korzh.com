import { _ as __astro_tag_component__, F as Fragment, t as createVNode } from './astro_D2KdCmZW.mjs';
import { $ as $$Image } from './pages/404_BbxC-4jy.mjs';
import 'clsx';

const postmanImage = new Proxy({"src":"/_astro/postman-echo01.Bv1TXB3Z.png","width":734,"height":506,"format":"png"}, {
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
  "slug": "single-file-web-service-aspnetcore",
  "date": "2021-04-15T00:00:00.000Z",
  "cover": {
    "src": "/images/simple-webservice.jpg"
  },
  "sort": 5,
  "description": "There are many ways to create a web application today. We have a lot of different platforms, frameworks, and libraries: PHP, Python, Java, NodeJS, and a dozen of others",
  "time": "4 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "single-code-file-aspnet-core-web-service",
    "text": "Single code file ASP.NET Core web service"
  }, {
    "depth": 3,
    "slug": "top-level-statements",
    "text": "Top-level statements"
  }, {
    "depth": 3,
    "slug": "creating-a-host",
    "text": "Creating a host"
  }, {
    "depth": 3,
    "slug": "setting-up-the-web-application",
    "text": "Setting up the web application"
  }, {
    "depth": 2,
    "slug": "running-the-app",
    "text": "Running the app"
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
    link: "link",
    p: "p",
    pre: "pre",
    script: "script",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "There are many ways to create a web application today. We have a lot of different platforms, frameworks, and libraries: PHP, Python, Java, NodeJS, and a dozen of others."
    }), "\n", createVNode(_components.p, {
      children: "While ASP.NET (Core) was always a good choice for developing enterprise-level web applications (with many complex web pages, some Web API endpoints, static resources, etc.),\r\nit\u2019s never been the best choice for creating a small web service with just a few endpoints to handle REST API requests in JSON or plain text formats."
    }), "\n", createVNode(_components.p, {
      children: "Well, that was true until .NET 5 was released last year. With support for top-level statements and new features in C# language, .NET 5 allows us to create a solid web service in just a few minutes and with a single code file."
    }), "\n", createVNode(_components.h2, {
      id: "single-code-file-aspnet-core-web-service",
      children: "Single code file ASP.NET Core web service"
    }), "\n", createVNode(_components.p, {
      children: "Below you will find an example of a very basic \u201Cecho\u201D web service with only one endpoint that just takes the content of a POST request and returns it back in JSON format. Not quite a real-world task of course, but enough for demonstration purposes."
    }), "\n", createVNode(_components.p, {
      children: "So, to create our single-code-file web service just open your terminal, create an empty folder and type the following command:"
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: [createVNode(_components.link, {
        rel: "stylesheet",
        href: "/_astro/ec.34q1a.css"
      }), createVNode(_components.script, {
        type: "module",
        src: "/_astro/ec.sgewm.js"
      }), createVNode(_components.figure, {
        class: "frame is-terminal",
        children: [createVNode(_components.figcaption, {
          class: "header",
          children: [createVNode(_components.span, {
            class: "title"
          }), createVNode(_components.span, {
            class: "sr-only",
            children: "Terminal window"
          })]
        }), createVNode(_components.pre, {
          tabindex: "0",
          children: createVNode(_components.code, {
            children: createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "dotnet"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "new"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "web"
              })]
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "dotnet new web",
            children: createVNode(_components.div, {})
          })
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["This command will create a simple ASP.NET Core project with two code files: ", createVNode(_components.code, {
        children: "Program.cs"
      }), " and ", createVNode(_components.code, {
        children: "Startup.cs"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Since our purpose is to get only one file, we remove ", createVNode(_components.code, {
        children: "Startup.cs"
      }), ". Yeah, it\u2019s that simple."]
    }), "\n", createVNode(_components.p, {
      children: ["After that just copy/paste the following piece of code into ", createVNode(_components.code, {
        children: "Program.cs"
      }), " file:"]
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
                children: "System"
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
                children: "IO"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ";"
              })]
            }), createVNode(_components.div, {
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
                children: "System"
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
                children: "Net"
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
                children: "Mime"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ";"
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
                children: "Microsoft"
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
                children: "AspNetCore"
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
                children: "Builder"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ";"
              })]
            }), createVNode(_components.div, {
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
                children: "Microsoft"
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
                children: "AspNetCore"
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
                children: "Hosting"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ";"
              })]
            }), createVNode(_components.div, {
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
                children: "Microsoft"
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
                children: "AspNetCore"
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
                children: "Http"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ";"
              })]
            }), createVNode(_components.div, {
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
                children: "Microsoft"
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
                children: "Extensions"
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
                children: "Hosting"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ";"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: "\n"
            }), createVNode(_components.div, {
              class: "ec-line",
              children: "\n"
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "Host."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "CreateDefaultBuilder"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(args)"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    ."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "ConfigureWebHostDefaults"
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
                children: "webBuilder"
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
                children: " webBuilder"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        ."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "Configure"
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
                children: "app"
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
                children: " app."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "Run"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "async"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FFB86C",
                  "--0fs": "italic"
                },
                children: "context"
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
                children: "            "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "if"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " (context.Request.Path "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "=="
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
                children: "/api/echo"
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
                children: "&&"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " context.Request.Method "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "=="
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
                children: "POST"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ") {"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#96A1C2"
                },
                children: "                //getting the content of our POST request"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "                "
              }), createVNode(_components.span, {
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
                  "--0": "#FF79C6"
                },
                children: "var"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " reader "
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
                children: "StreamReader"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(context.Request.Body);"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "                "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "var"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " content "
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
                  "--0": "#FF79C6"
                },
                children: "await"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " reader."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "ReadToEndAsync"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "();"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: "\n"
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#96A1C2"
                },
                children: "                //sending it back in the response"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "                context.Response.ContentType "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " MediaTypeNames.Text.Plain;"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "                "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "await"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " context.Response."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "WriteAsync"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(content);"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "            }"
              })
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
                children: "else"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " {"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#96A1C2"
                },
                children: "                //Return 404 for any other endpoint"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "                context.Response.StatusCode "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " StatusCodes.Status404NotFound;"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "                "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "await"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " context.Response."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "WriteAsync"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "$\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "WRONG ENDPOINT: "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "{"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "context"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "Request"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "Path"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "ToString"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "()"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "}"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: ". Use POST request to /api/echo instead"
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
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "            }"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        })))"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    ."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "Build"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "()."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "Run"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "();"
              })]
            })]
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": 'using System.IO;\x7Fusing System.Net.Mime;\x7F\x7Fusing Microsoft.AspNetCore.Builder;\x7Fusing Microsoft.AspNetCore.Hosting;\x7Fusing Microsoft.AspNetCore.Http;\x7Fusing Microsoft.Extensions.Hosting;\x7F\x7F\x7FHost.CreateDefaultBuilder(args)\x7F    .ConfigureWebHostDefaults(webBuilder => webBuilder\x7F        .Configure(app => app.Run(async context => {\x7F            if (context.Request.Path == "/api/echo" && context.Request.Method == "POST") {\x7F                //getting the content of our POST request\x7F                using var reader = new StreamReader(context.Request.Body);\x7F                var content = await reader.ReadToEndAsync();\x7F\x7F                //sending it back in the response\x7F                context.Response.ContentType = MediaTypeNames.Text.Plain;\x7F                await context.Response.WriteAsync(content);\x7F            }\x7F            else {\x7F                //Return 404 for any other endpoint\x7F                context.Response.StatusCode = StatusCodes.Status404NotFound;\x7F                await context.Response.WriteAsync($"WRONG ENDPOINT: {context.Request.Path.ToString()}. Use POST request to /api/echo instead");\x7F            }\x7F        })))\x7F    .Build().Run();',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s take a closer look what happens here."
    }), "\n", createVNode(_components.h3, {
      id: "top-level-statements",
      children: "Top-level statements"
    }), "\n", createVNode(_components.p, {
      children: ["Fist we have a block of ", createVNode(_components.code, {
        children: "using"
      }), " statement. That\u2019s usual for any C# file. Nothing special."]
    }), "\n", createVNode(_components.p, {
      children: ["After that, we start straight with an instruction. We call ", createVNode(_components.code, {
        children: "CreateDefaultBuilder()"
      }), " method of ", createVNode(_components.code, {
        children: "Host"
      }), " class.\r\nIf you\u2019ve had experience with C# before, you may be a little bit confused by this approach. No namespaces, no class definitions.\r\nYou may even say that this piece of code has the wrong syntax and will not be compiled."]
    }), "\n", createVNode(_components.p, {
      children: ["But it will. It\u2019s possible to do now with C# 9 and it\u2019s called ", createVNode(_components.a, {
        href: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-9.0/top-level-statements",
        children: "top-level statements"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "creating-a-host",
      children: "Creating a host"
    }), "\n", createVNode(_components.p, {
      children: ["As we already mentioned above the only instruction we actually have in our little program is ", createVNode(_components.code, {
        children: "Host.CreateDefaultBuilder()"
      }), " call.\r\nIt creates a ", createVNode(_components.a, {
        href: "https://docs.microsoft.com/en-us/aspnet/core/fundamentals/host/generic-host",
        children: "generic host builder"
      }), " with default settings for logging, configuration, and Dependency Injection container."]
    }), "\n", createVNode(_components.h3, {
      id: "setting-up-the-web-application",
      children: "Setting up the web application"
    }), "\n", createVNode(_components.p, {
      children: ["After that, the ", createVNode(_components.code, {
        children: "ConfigureWebHostDefaults"
      }), " method loads the configuration, set Kestrel as the webserver, enables IIS integrations, and adds some default middlewares."]
    }), "\n", createVNode(_components.p, {
      children: ["Finally, we call ", createVNode(_components.code, {
        children: "Configure"
      }), " method to set up the ", createVNode(_components.a, {
        href: "https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware/",
        children: "middleware pipeline"
      }), ", or, to define the only middleware that will actually process all requests to our web service (with that ", createVNode(_components.code, {
        children: "app.Run(...)"
      }), " call)."]
    }), "\n", createVNode(_components.p, {
      children: ["The next piece of code is self-explanatory. If it\u2019s a POST request to ", createVNode(_components.code, {
        children: "/api/echo"
      }), " we read the content of the request\u2019s body and just write it back to the response stream. Otherwise, we return the 404 code with some error message."]
    }), "\n", createVNode(_components.p, {
      children: "As I mentioned above, this is a very basic example of a microweb service, but I intentionally made it simple to show how everything works in general without going into detail."
    }), "\n", createVNode(_components.h2, {
      id: "running-the-app",
      children: "Running the app"
    }), "\n", createVNode(_components.p, {
      children: "To run this simple web service just type in the terminal (while you are in the project\u2019s directory):"
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
        class: "frame is-terminal",
        children: [createVNode(_components.figcaption, {
          class: "header",
          children: [createVNode(_components.span, {
            class: "title"
          }), createVNode(_components.span, {
            class: "sr-only",
            children: "Terminal window"
          })]
        }), createVNode(_components.pre, {
          tabindex: "0",
          children: createVNode(_components.code, {
            children: createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "dotnet"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "run"
              })]
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "dotnet run",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Here is what you get in response by sending a POST request to /api/echo using ", createVNode(_components.a, {
        href: "https://www.postman.com/",
        children: "Postman utility"
      }), ":"]
    }), "\n", createVNode($$Image, {
      src: postmanImage,
      alt: "POST request to /api/echo via Postman"
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
const url = "src/content/blog/2021-04-15-single-file-web-service-aspnetcore.mdx";
const file = "D:/Projects/sites/korzh.com/src/content/blog/2021-04-15-single-file-web-service-aspnetcore.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Projects/sites/korzh.com/src/content/blog/2021-04-15-single-file-web-service-aspnetcore.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
