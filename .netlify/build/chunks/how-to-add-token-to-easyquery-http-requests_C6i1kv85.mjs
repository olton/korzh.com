import { _ as __astro_tag_component__, F as Fragment, t as createVNode } from './astro_D2KdCmZW.mjs';
import { $ as $$Image } from './pages/404_BbxC-4jy.mjs';
import { a as $$PageTitle } from './pages/index_DN_GkUJs.mjs';
import 'clsx';

const frontmatter = {
  "title": "How to add a token to EasyQuery HTTP requests",
  "description": "There are two ways to modify HTTP requests initiated by EasyQuery.JS widgets and add some extra headers/parameters to them.",
  "slug": "tutorial/how-to-add-token-to-easyquery-http-requests",
  "time": "1 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "using-httpclient-to-handle-the-response",
    "text": "Using HttpClient to handle the response"
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
    link: "link",
    p: "p",
    pre: "pre",
    script: "script",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$PageTitle, {
      title: frontmatter.title
    }), "\n", createVNode(_components.p, {
      children: "There are two ways to modify HTTP requests initiated by EasyQuery.JS widgets and add some extra headers/parameters to them."
    }), "\n", createVNode(_components.p, {
      children: "For each of those scenarios, you need to get the HttpClient service first:"
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
                children: " httpClient "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " view."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "getContext"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "()."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "getServices"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "()."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "getHttpClient"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "();"
              })]
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "var httpClient = view.getContext().getServices().getHttpClient();",
            children: createVNode(_components.div, {})
          })
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Here ", createVNode(_components.code, {
        children: "view"
      }), " is a \u201Cview\u201D object you work with on the current page (e.g. ", createVNode(_components.code, {
        children: "AdvancedSearchView"
      }), " or ", createVNode(_components.code, {
        children: "ReportView"
      }), ")."]
    }), "\n", createVNode(_components.p, {
      children: ["After that may use the ", createVNode(_components.code, {
        children: "defaultHeaders"
      }), " property to set any headers you need for all EasyQuery requests:"]
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
                children: "httpClient.defaultHeaders["
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "Authorization"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
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
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "Bearer YourTokenGoesHere"
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
            "data-code": "httpClient.defaultHeaders['Authorization'] = 'Bearer YourTokenGoesHere';",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["If the value of the request header should be calculated right at the moment of request, you can use ", createVNode(_components.code, {
        children: "onRequest"
      }), " event handler instead:"]
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
                children: "httpClient."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "onRequest"
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
                children: " ("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FFB86C",
                  "--0fs": "italic"
                },
                children: "request"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ") "
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
                children: "    request."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "setHeader"
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
                children: "my_token"
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
                children: "some token"
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
                  "--0": "#F8F8F2"
                },
                children: "    "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#96A1C2"
                },
                children: "//additionally, you can add some extra query parameters to the request"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    request."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "setQueryParam"
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
                children: "param1"
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
                children: "value1"
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
            "data-code": "httpClient.onRequest = (request) => {\x7F    request.setHeader('my_token', 'some token');\x7F\x7F    //additionally, you can add some extra query parameters to the request\x7F    request.setQueryParam('param1', 'value1');\x7F}",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "using-httpclient-to-handle-the-response",
      children: "Using HttpClient to handle the response"
    }), "\n", createVNode(_components.p, {
      children: ["You can also use the ", createVNode(_components.code, {
        children: "HttpClient"
      }), " service to catch and handle any response from the EasyQuery server-side API. Use  ", createVNode(_components.code, {
        children: "onResponse"
      }), " event handler for that:"]
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
                children: "httpClient."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "onResponse"
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
                children: " ("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FFB86C",
                  "--0fs": "italic"
                },
                children: "xhr"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ") "
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
                children: "    console."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "log"
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
                children: "EasyQuery API response"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ", xhr);"
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
                children: "let"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " headers "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " xhr."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "getAllResponseHeaders"
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
                children: "    console."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "log"
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
                children: "EasyQuery API response headers"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "'"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ", headers);"
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
            "data-code": "httpClient.onResponse = (xhr) => {\x7F    console.log('EasyQuery API response', xhr);\x7F  let headers = xhr.getAllResponseHeaders();\x7F    console.log('EasyQuery API response headers', headers);\x7F}",
            children: createVNode(_components.div, {})
          })
        })]
      })
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
const url = "src/content/js-docs/tutorial/how-to-add-token-to-easyquery-http-requests.mdx";
const file = "D:/Projects/sites/korzh.com/src/content/js-docs/tutorial/how-to-add-token-to-easyquery-http-requests.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Projects/sites/korzh.com/src/content/js-docs/tutorial/how-to-add-token-to-easyquery-http-requests.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
