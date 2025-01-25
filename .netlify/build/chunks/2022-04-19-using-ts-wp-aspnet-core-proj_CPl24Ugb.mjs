import { _ as __astro_tag_component__, F as Fragment, t as createVNode } from './astro_D2KdCmZW.mjs';
import { $ as $$Image } from './pages/404_BbxC-4jy.mjs';
import 'clsx';

const frontmatter = {
  "title": "Using TypeScript with WebPack in ASP.NET Core projects",
  "tags": ["ASP-NET-CORE", "JAVASCRIPT", "TYPESCRIPT"],
  "slug": "typescript-webpack-aspnetcore",
  "date": "2022-04-19T00:00:00.000Z",
  "cover": {
    "src": "/images/tswebpack-cover.jpg"
  },
  "sort": 5,
  "description": "Suppose you work on ASP.NET Core web application that solves some business-related tasks. You know, a few forms where users enter their data and get some reports. Although such a project may not require any complex logic on the client, you still probably need to write some JavaScript code to make user interaction with your application more convenient and enjoyable",
  "time": "9 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "motivation",
    "text": "Motivation"
  }, {
    "depth": 2,
    "slug": "solution",
    "text": "Solution"
  }, {
    "depth": 2,
    "slug": "getting-started",
    "text": "Getting started"
  }, {
    "depth": 3,
    "slug": "0-install-nodejs",
    "text": "0. Install Node.JS"
  }, {
    "depth": 3,
    "slug": "1-clientscript-sub-folder",
    "text": "1. ClientScript sub-folder"
  }, {
    "depth": 3,
    "slug": "2-add-configuration-files",
    "text": "2. Add configuration files"
  }, {
    "depth": 3,
    "slug": "3-add-typescript-files",
    "text": "3. Add TypeScript files"
  }, {
    "depth": 4,
    "slug": "hellots",
    "text": "hello.ts"
  }, {
    "depth": 4,
    "slug": "indexts",
    "text": "index.ts"
  }, {
    "depth": 3,
    "slug": "4-build-your-library",
    "text": "4. Build your library"
  }, {
    "depth": 3,
    "slug": "5-attach-the-final-script-to-your-app",
    "text": "5. Attach the final script to your app"
  }, {
    "depth": 2,
    "slug": "configuring-the-scope",
    "text": "Configuring the scope"
  }, {
    "depth": 3,
    "slug": "1-use-module-names-and-their-aliases",
    "text": "1. Use module names and their aliases"
  }, {
    "depth": 3,
    "slug": "2-using-namespace-clause",
    "text": "2. Using namespace clause"
  }, {
    "depth": 2,
    "slug": "using-third-party-libraries",
    "text": "Using third-party libraries"
  }, {
    "depth": 3,
    "slug": "1-add-lodash-library-to-your-packagejson",
    "text": "1. Add lodash library to your package.json"
  }, {
    "depth": 3,
    "slug": "2-import-lodash-functions-in-your-hellots-file",
    "text": "2. Import lodash functions in your hello.ts file"
  }, {
    "depth": 3,
    "slug": "3-modify-hello-function",
    "text": "3. Modify hello() function"
  }, {
    "depth": 2,
    "slug": "watch-mode",
    "text": "Watch mode"
  }, {
    "depth": 2,
    "slug": "conclusions",
    "text": "Conclusions"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
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
    p: "p",
    pre: "pre",
    script: "script",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "motivation",
      children: "Motivation"
    }), "\n", createVNode(_components.p, {
      children: "Suppose you work on ASP.NET Core web application that solves some business-related tasks. You know, a few forms where users enter their data and get some reports. Although such a project may not require any complex logic on the client, you still probably need to write some JavaScript code to make user interaction with your application more convenient and enjoyable. For example, you may need a simple prompt popup on item deletion since it\u2019s not quite right to use a separate page for that. Or, you want to do client-side validation. Or \u2026 it really can be any other client-side task, you name it."
    }), "\n", createVNode(_components.p, {
      children: "Of course, you can add a few lines of script on each page (with vanilla JavaScript or using the good old JQuery) but it is really hard to maintain all these small pieces when your project gets bigger. Moreover, some of these pieces do the same things, so you either need to replicate them in many places (bad decision) or you end up creating a small library that contains all client-side functions, structures, and classes used in your project."
    }), "\n", createVNode(_components.p, {
      children: "This article describes how to create such a JS library for your ASP.NET Core project with minimal effort and in a way that will provide better support for further changes."
    }), "\n", createVNode(_components.h2, {
      id: "solution",
      children: "Solution"
    }), "\n", createVNode(_components.p, {
      children: "Long story short, we are going to put all our client-side code to separate files (with classes, functions, data structures) and then bundle them with the help of WebPack 5. The resulting script can be included right into your _Layout.cshtml (so, it will be available on all pages of your web app) or you can include it only on the pages where it\u2019s necessary."
    }), "\n", createVNode(_components.p, {
      children: "Moreover, we will use TypeScript instead of pure JavaScript because, you know, static typing is good and it allows us to catch a lot of errors at compile time."
    }), "\n", createVNode(_components.p, {
      children: "In addition, you can consider this article as a quick introduction to client-side development. Especially if you are a .NET developer who still tends to stay backend-only and who is afraid of all that fancy client-side stuff (as I was some time ago)."
    }), "\n", createVNode(_components.h2, {
      id: "getting-started",
      children: "Getting started"
    }), "\n", createVNode(_components.p, {
      children: "Here we will describe the steps necessary to set up the configuration for bundling a small TypeScript library with your own code. For the sake of simplification, this library will contain just one function for now."
    }), "\n", createVNode(_components.h3, {
      id: "0-install-nodejs",
      children: "0. Install Node.JS"
    }), "\n", createVNode(_components.p, {
      children: "I\u2019m pretty much sure you already have it installed. In case you don\u2019t - please do it. We will need Node.JS version 10.13.0 (or newer) on your dev/build machine."
    }), "\n", createVNode(_components.h3, {
      id: "1-clientscript-sub-folder",
      children: "1. ClientScript sub-folder"
    }), "\n", createVNode(_components.p, {
      children: "We will put all our scripts and configuration files into a separate sub-folder ClientScript of your main project\u2019s folder. It\u2019s similar to ClientApp sub-folder used in most of the SPA (single page application) templates available for ASP.NET Core."
    }), "\n", createVNode(_components.h3, {
      id: "2-add-configuration-files",
      children: "2. Add configuration files"
    }), "\n", createVNode(_components.p, {
      children: "We will need 3 configuration files:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "package.json - to define our bundle and all dependencies,"
      }), "\n", createVNode(_components.li, {
        children: "webpack.config.js - for WebPack configuration"
      }), "\n", createVNode(_components.li, {
        children: "tsconfig.json - for TypeScript settings."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "For now, you can just copy these files as-is. We will describe each of them later."
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: [createVNode(_components.link, {
        rel: "stylesheet",
        href: "/_astro/ec.34q1a.css"
      }), createVNode(_components.script, {
        type: "module",
        src: "/_astro/ec.sgewm.js"
      }), createVNode(_components.figure, {
        class: "frame has-title",
        children: [createVNode(_components.figcaption, {
          class: "header",
          children: createVNode(_components.span, {
            class: "title",
            children: "package.json"
          })
        }), createVNode(_components.pre, {
          tabindex: "0",
          children: createVNode(_components.code, {
            children: [createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "{"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "name"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "myapp-client-bundle"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "version"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "1.0.0"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "description"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "This is client-side scripts bundle for MyApp"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "private"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#BD93F9"
                },
                children: "true"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "scripts"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "    "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "build"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "webpack --mode=development"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
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
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "build:prod"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "webpack --mode=production"
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
                children: "  },"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "devDependencies"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "    "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "ts-loader"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "^9.2.5"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
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
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "typescript"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "^4.4.3"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
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
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "webpack"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "^5.52.1"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
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
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "webpack-cli"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "^4.8.0"
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
                children: "  },"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "dependencies"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                  "--0": "#F8F8F2"
                },
                children: "  }"
              })
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
            "data-code": '{\x7F  "name": "myapp-client-bundle",\x7F  "version": "1.0.0",\x7F  "description": "This is client-side scripts bundle for MyApp",\x7F  "private": true,\x7F  "scripts": {\x7F    "build": "webpack --mode=development",\x7F    "build:prod": "webpack --mode=production"\x7F  },\x7F  "devDependencies": {\x7F    "ts-loader": "^9.2.5",\x7F    "typescript": "^4.4.3",\x7F    "webpack": "^5.52.1",\x7F    "webpack-cli": "^4.8.0"\x7F  },\x7F  "dependencies": {\x7F  }\x7F}',
            children: createVNode(_components.div, {})
          })
        })]
      })]
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
        class: "frame has-title",
        children: [createVNode(_components.figcaption, {
          class: "header",
          children: createVNode(_components.span, {
            class: "title",
            children: "webpack.config.js"
          })
        }), createVNode(_components.pre, {
          tabindex: "0",
          children: createVNode(_components.code, {
            children: [createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "const"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " path "
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
                  "--0": "#50FA7B"
                },
                children: "require"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "path"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ");"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: "\n"
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "module"
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
                children: "exports"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
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
                children: "  entry"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "./src/index.ts"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  module"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "    rules"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " ["
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "      {"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        test"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF7777"
                },
                children: "/"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "\\.tsx"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "?$"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF7777"
                },
                children: "/"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        use"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "ts-loader"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        exclude"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF7777"
                },
                children: "/"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "node_modules"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF7777"
                },
                children: "/"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "      },"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    ],"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  },"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  resolve"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "    extensions"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " ["
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: ".tsx"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: ".ts"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: ".js"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "],"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  },"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  output"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "    library"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "      name"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "MYAPP"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "      type"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "var"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    },"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    filename"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "app-client.js"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    path"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " path."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "resolve"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(__dirname, "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "../wwwroot/js"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "),"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  }"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "};"
              })
            })]
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "const path = require('path');\x7F\x7Fmodule.exports = {\x7F  entry: './src/index.ts',\x7F  module: {\x7F    rules: [\x7F      {\x7F        test: /\\.tsx?$/,\x7F        use: 'ts-loader',\x7F        exclude: /node_modules/,\x7F      },\x7F    ],\x7F  },\x7F  resolve: {\x7F    extensions: ['.tsx', '.ts', '.js'],\x7F  },\x7F  output: {\x7F    library: {\x7F      name: 'MYAPP',\x7F      type: 'var'\x7F    },\x7F    filename: 'app-client.js',\x7F    path: path.resolve(__dirname, '../wwwroot/js'),\x7F  }\x7F};",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
        class: "frame has-title",
        children: [createVNode(_components.figcaption, {
          class: "header",
          children: createVNode(_components.span, {
            class: "title",
            children: "tsconfig.json"
          })
        }), createVNode(_components.pre, {
          tabindex: "0",
          children: createVNode(_components.code, {
            children: [createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "{"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "compilerOptions"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "    "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "outDir"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "./dist/"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
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
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "noImplicitAny"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#BD93F9"
                },
                children: "true"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
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
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "module"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "es6"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
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
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "target"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "es5"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
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
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "allowJs"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#BD93F9"
                },
                children: "true"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ","
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
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "moduleResolution"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "node"
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
                children: "  }"
              })
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
            "data-code": '{\x7F  "compilerOptions": {\x7F    "outDir": "./dist/",\x7F    "noImplicitAny": true,\x7F    "module": "es6",\x7F    "target": "es5",\x7F    "allowJs": true,\x7F    "moduleResolution": "node"\x7F  }\x7F}',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "3-add-typescript-files",
      children: "3. Add TypeScript files"
    }), "\n", createVNode(_components.p, {
      children: "For the sake of simplicity, our library in this initial stage will contain only one function hello() that simply prints Hello world to the browser\u2019s console. Here are two files we need for that outstanding :) functionality:"
    }), "\n", createVNode(_components.h4, {
      id: "hellots",
      children: "hello.ts"
    }), "\n", createVNode(_components.p, {
      children: "This file contains our function packed into the funcs namespace, so we will be able to call it as MYAPP.funcs.hello()"
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
        class: "frame has-title",
        children: [createVNode(_components.figcaption, {
          class: "header",
          children: createVNode(_components.span, {
            class: "title",
            children: "hello.ts"
          })
        }), createVNode(_components.pre, {
          tabindex: "0",
          children: createVNode(_components.code, {
            children: [createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "export"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "namespace"
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
                children: "funcs"
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
                children: "    "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "export"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "function"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "hello"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "()"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "void"
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
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "const"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " message "
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
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "Hello world!"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
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
                  "--0": "#F8F8F2"
                },
                children: "        console."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "log"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(message);"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    }"
              })
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
            "data-code": "export namespace funcs {\x7F    export function hello(): void {\x7F        const message = 'Hello world!';\x7F        console.log(message);\x7F    }\x7F}",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "indexts",
      children: "index.ts"
    }), "\n", createVNode(_components.p, {
      children: "This is our entry point. This TypeScript file will not contain any functions or classes. It will just define which parts of our code (functions, interfaces, classes, etc) we are going to expose to the outside world. Since we have only one file with \u201Creal\u201D functionality our index.ts will as simple as:"
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
        class: "frame has-title",
        children: [createVNode(_components.figcaption, {
          class: "header",
          children: createVNode(_components.span, {
            class: "title",
            children: "index.ts"
          })
        }), createVNode(_components.pre, {
          tabindex: "0",
          children: createVNode(_components.code, {
            children: createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "export"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#BD93F9"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "from"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "./hello"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ";"
              })]
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "export * from './hello';",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["and it means that we would to \u201Creveal\u201D all public (exported) parts inside our ", createVNode(_components.code, {
        children: "hello.ts"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "4-build-your-library",
      children: "4. Build your library"
    }), "\n", createVNode(_components.p, {
      children: ["That\u2019s it. We are ready to build our bundle script. To do so, open your terminal program, move to ", createVNode(_components.code, {
        children: "ClientScript"
      }), " folder and run the following 2 commands:"]
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
                children: "npm"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "install"
              })]
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "npm install",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "and then"
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
                children: "npm"
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
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "build"
              })]
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "npm run build",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The first one will install all necessary NPM libraries (the ones which are listed in the ", createVNode(_components.code, {
        children: "dependencies"
      }), " and ", createVNode(_components.code, {
        children: "devDependencies"
      }), " sections of your ", createVNode(_components.code, {
        children: "package.json"
      }), "). You will need to run it before the first build and then only when you add a new dependency (another NPM package) to your ", createVNode(_components.code, {
        children: "package.json"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["The second command actually runs WebPack that compiles (or, to be more correct, \u201Ctranspiles\u201D) your TypeScript files to JavaScript, then bundles all JS code into one file ", createVNode(_components.code, {
        children: "app-client.js"
      }), " and puts that file into ", createVNode(_components.code, {
        children: "wwwroot/js"
      }), " folder of your web project as defined in ", createVNode(_components.code, {
        children: "webpack.config.js"
      }), " configuration file."]
    }), "\n", createVNode(_components.p, {
      children: ["According to the ", createVNode(_components.code, {
        children: "output/library"
      }), " section of that file, all functions or structures of your new bundle will be accessible via the ", createVNode(_components.code, {
        children: "MYAPP"
      }), " global variable."]
    }), "\n", createVNode(_components.h3, {
      id: "5-attach-the-final-script-to-your-app",
      children: "5. Attach the final script to your app"
    }), "\n", createVNode(_components.p, {
      children: "To use our script you just need to include it on your page as any other JS file:"
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
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
                  "--0": "#F8F8F2"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "script"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B",
                  "--0fs": "italic"
                },
                children: "src"
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
                children: "/js/app-client.min.js"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "></"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "script"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ">"
              })]
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "<script src=\"/js/app-client.min.js\"></script>",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["You can add that line either to the ", createVNode(_components.code, {
        children: "_Layout.cshtml"
      }), " (to make it available on all pages of your web application) or to the view or Razor page where it\u2019s necessary."]
    }), "\n", createVNode(_components.p, {
      children: "Now you can call the function(s) from our new JS library:"
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
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "script"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ">"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#BD93F9"
                },
                children: "MYAPP"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ".funcs."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "hello"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "();"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "</"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "script"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ">"
              })]
            })]
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "<script>\x7FMYAPP.funcs.hello();\x7F<\/script>",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "configuring-the-scope",
      children: "Configuring the scope"
    }), "\n", createVNode(_components.p, {
      children: ["One of the great features of using TypeScript and WebPack is organizing your code in modules and then combining those modules into namespaces using WebPack\u2019s configuration and TypeScript\u2019s ", createVNode(_components.code, {
        children: "namespace"
      }), " structure."]
    }), "\n", createVNode(_components.p, {
      children: "There are several possible options."
    }), "\n", createVNode(_components.h3, {
      id: "1-use-module-names-and-their-aliases",
      children: "1. Use module names and their aliases"
    }), "\n", createVNode(_components.p, {
      children: "You can put functions and classes in a module and export that module either \u201Cas-is\u201D or with an alias."
    }), "\n", createVNode(_components.p, {
      children: "For example, if we have the following module:"
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
        class: "frame has-title",
        children: [createVNode(_components.figcaption, {
          class: "header",
          children: createVNode(_components.span, {
            class: "title",
            children: "dialogs.ts"
          })
        }), createVNode(_components.pre, {
          tabindex: "0",
          children: createVNode(_components.code, {
            children: [createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "export"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "class"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "Dialog"
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
                children: "    "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "..."
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
              children: "\n"
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "export"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "function"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "showDialog"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "() {"
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
                children: "..."
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
            "data-code": "export class Dialog {\x7F    ...\x7F}\x7F\x7Fexport function showDialog() {\x7F    ...\x7F}",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["and we use this export declaration in our ", createVNode(_components.code, {
        children: "index.ts"
      }), ":"]
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
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
                children: "export"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#BD93F9"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "from"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "./dialogs"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ";"
              })]
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "export * from './dialogs';",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["then our ", createVNode(_components.code, {
        children: "Dialog"
      }), " class and ", createVNode(_components.code, {
        children: "showDialog()"
      }), " function will be available right under ", createVNode(_components.code, {
        children: "MYAPP"
      }), " namespace as ", createVNode(_components.code, {
        children: "MYAPP.Dialog"
      }), " and ", createVNode(_components.code, {
        children: "MYAPP.showDialog()"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["You can also specify an alias for that ", createVNode(_components.code, {
        children: "dialogs"
      }), " module:"]
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
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
                children: "export"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#BD93F9"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "as"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " dlg "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "from"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "./dialogs"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ";"
              })]
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "export * as dlg from './dialogs';",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Now our class and the function will be accessible as ", createVNode(_components.code, {
        children: "MYAPP.dlg.Dialog"
      }), " and ", createVNode(_components.code, {
        children: "MYAPP.dlg.showDialog()"
      }), " correspondingly."]
    }), "\n", createVNode(_components.h3, {
      id: "2-using-namespace-clause",
      children: "2. Using namespace clause"
    }), "\n", createVNode(_components.p, {
      children: "You can also use the namespace clause and then re-export the imported modules, so all functions, variables, and types that belong to the same namespace even in different modules will be merged together."
    }), "\n", createVNode(_components.p, {
      children: "For example, we have the following two modules:"
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
        class: "frame has-title",
        children: [createVNode(_components.figcaption, {
          class: "header",
          children: createVNode(_components.span, {
            class: "title",
            children: "dialogs.ts"
          })
        }), createVNode(_components.pre, {
          tabindex: "0",
          children: createVNode(_components.code, {
            children: [createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "export"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "namespace"
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
                children: "ui"
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
                children: "    "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "export"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "class"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "Dialog1"
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
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "..."
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    }"
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
                children: "    "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "export"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "function"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "showDialog1"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "() {"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "..."
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    }"
              })
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
            "data-code": "export namespace ui {\x7F    export class Dialog1 {\x7F        ...\x7F    }\x7F\x7F    export function showDialog1() {\x7F        ...\x7F    }\x7F}",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "and"
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
        class: "frame has-title",
        children: [createVNode(_components.figcaption, {
          class: "header",
          children: createVNode(_components.span, {
            class: "title",
            children: "widgets.ts"
          })
        }), createVNode(_components.pre, {
          tabindex: "0",
          children: createVNode(_components.code, {
            children: [createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "export"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "namespace"
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
                children: "ui"
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
                children: "  "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "export"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "class"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "Widget1"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " { "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "..."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " }"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: "\n"
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "export"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "function"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "renderWidget1"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "() { "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "..."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " }"
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
            "data-code": "export namespace ui {\x7F  export class Widget1 { ... }\x7F\x7F  export function renderWidget1() { ... }\x7F}",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["w, if we place the following two lines in our ", createVNode(_components.code, {
        children: "index.ts"
      }), " module:"]
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
                children: "export"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#BD93F9"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "from"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "./dialogs"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
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
                children: "export"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#BD93F9"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "from"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "./widgets"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ";"
              })]
            })]
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "export * from './dialogs';\x7Fexport * from './widgets';",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["we will be able to access all those exported functions and classes under the ", createVNode(_components.code, {
        children: "MYAPP.ui"
      }), " namespace. For example: ", createVNode(_components.code, {
        children: "MYAPP.ui.renderWidget1()"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "using-third-party-libraries",
      children: "Using third-party libraries"
    }), "\n", createVNode(_components.p, {
      children: "Maybe the most significant advantage of this setup (that may seem a little complicated for just a \u201Chello world\u201D function) is the possibility to use any third-party JS library from hundred of thousands available on NPM repository."
    }), "\n", createVNode(_components.p, {
      children: ["As an example, we slightly modify our ", createVNode(_components.code, {
        children: "hello()"
      }), " function so that it will take a parameter ", createVNode(_components.code, {
        children: "name"
      }), " and will print the phrase ", createVNode(_components.code, {
        children: "Hello, {name}"
      }), " to the console. Before printing, the string stored in the name variable will be capitalized with the help of ", createVNode(_components.code, {
        children: "capitalize()"
      }), " function from the well-known ", createVNode(_components.code, {
        children: "lodash"
      }), " library."]
    }), "\n", createVNode(_components.p, {
      children: "Here are the steps we should take to achieve this goal:"
    }), "\n", createVNode(_components.h3, {
      id: "1-add-lodash-library-to-your-packagejson",
      children: "1. Add lodash library to your package.json"
    }), "\n", createVNode(_components.p, {
      children: "Just open a terminal inside your ClientScript folder and type:"
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
                children: "npm"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "install"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "lodash"
              })]
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "npm install lodash",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "As the result of this operation, you will see something like the following in the dependencies section of your package.json file:"
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
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "dependencies"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ": {"
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
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "lodash"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "^4.17.21"
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
                children: "}"
              })
            })]
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": '"dependencies": {\x7F    "lodash": "^4.17.21"\x7F}',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "(the actual version number can be different)."
    }), "\n", createVNode(_components.h3, {
      id: "2-import-lodash-functions-in-your-hellots-file",
      children: "2. Import lodash functions in your hello.ts file"
    }), "\n", createVNode(_components.p, {
      children: "Add the following line at the beginning of hello.ts:"
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
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
                children: "import"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#BD93F9"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "as"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " _ "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "from"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "lodash"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ";"
              })]
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "import * as _ from 'lodash';",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "3-modify-hello-function",
      children: "3. Modify hello() function"
    }), "\n", createVNode(_components.p, {
      children: "Now we can use all lodash library functions using _ global variable (this is the default way of using lodash functions since the times it was not an NPM library). So, our hello function will look the following:"
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
                children: "export"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "function"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "hello"
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
                children: "name"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "string"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ")"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
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
                children: "void"
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
                children: "  "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "const"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " message "
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
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "Hello, "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "+"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " _."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "capitalize"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(name);"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  console."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "log"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(message);"
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
            "data-code": "export function hello(name : string): void {\x7F  const message = 'Hello, ' + _.capitalize(name);\x7F  console.log(message);\x7F}",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Additionally, we will modify the function call on our page:"
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
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "script"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ">"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#BD93F9"
                },
                children: "MYAPP"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ".funcs."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "hello"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "sergiy"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ");"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "</"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "script"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ">"
              })]
            })]
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "<script>\x7FMYAPP.funcs.hello('sergiy');\x7F<\/script>",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "When we rebuild our script (npm run build), run the app, and open the main page, we will see the following string in the console panel of our browser:"
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
        class: "frame",
        children: [createVNode(_components.figcaption, {
          class: "header"
        }), createVNode(_components.pre, {
          tabindex: "0",
          children: createVNode(_components.code, {
            children: createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#f8f8f2"
                },
                children: "Hello, Sergiy"
              })
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "Hello, Sergiy",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "watch-mode",
      children: "Watch mode"
    }), "\n", createVNode(_components.p, {
      children: "It\u2019s unnecessary to run the build command each time you change something in your script or add a new package to your project. Instead, you can use the watch mode once, and WebPack will re-build your project every time something was changed:"
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
                children: "npm"
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
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "watch"
              })]
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "npm run watch",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "As we can see, using TypeScript with WebPack to build vanilla JS client-side scripts for your ASP.NET Core projects has a lot of benefits:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Strong-typed TypeScript code with all advantages of the latest JavaScript features: classes, arrow functions, modules, scopes, and promises."
      }), "\n", createVNode(_components.li, {
        children: "Better support by code editors (like Visual Studio Code) with syntax highlighting, IntelliSense, etc."
      }), "\n", createVNode(_components.li, {
        children: "A possibility to use 3-party libraries with typing definitions."
      }), "\n", createVNode(_components.li, {
        children: "More compact and optimized JS 5 code generated by WebPack."
      }), "\n", createVNode(_components.li, {
        children: "Hot reload of the changes you make in the code editor."
      }), "\n", createVNode(_components.li, {
        children: "Better debugging experience (I\u2019m going to write a separate article about it). It\u2019s possible to debug your original TypeScript code instead of minimized JS code available for your web app."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "There is one more note. We used WebPack in this article since it\u2019s the most popular module bundler for now. However, I believe that we can quickly get the same results with any other bundler like Browserify, Parcel, or Rollup."
    }), "\n", createVNode(_components.p, {
      children: "Please let me know (via my Twitter account @korzhs or here in the comments) if this article was valuable and informative for you."
    }), "\n", createVNode(_components.p, {
      children: "Happy coding!"
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
const url = "src/content/blog/2022-04-19-using-ts-wp-aspnet-core-proj.mdx";
const file = "D:/Projects/sites/korzh.com/src/content/blog/2022-04-19-using-ts-wp-aspnet-core-proj.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Projects/sites/korzh.com/src/content/blog/2022-04-19-using-ts-wp-aspnet-core-proj.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
