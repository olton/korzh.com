import { _ as __astro_tag_component__, F as Fragment, t as createVNode } from './astro_D2KdCmZW.mjs';
import { $ as $$Image } from './pages/404_BbxC-4jy.mjs';
import { a as $$PageTitle } from './pages/index_DN_GkUJs.mjs';
import 'clsx';

const frontmatter = {
  "title": "EasyQuery Web Service API",
  "description": "EasyQuery Web Service is a specification of the server-side API that handles requests from the client-side EasyQuery widgets",
  "slug": "web-service-api",
  "time": "3 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "about-easyquery-web-service",
    "text": "About EasyQuery Web Service"
  }, {
    "depth": 2,
    "slug": "endpoints",
    "text": "Endpoints"
  }, {
    "depth": 3,
    "slug": "getmodel",
    "text": "GetModel"
  }, {
    "depth": 3,
    "slug": "getquery",
    "text": "GetQuery"
  }, {
    "depth": 3,
    "slug": "savequery",
    "text": "SaveQuery"
  }, {
    "depth": 3,
    "slug": "newquery",
    "text": "NewQuery"
  }, {
    "depth": 3,
    "slug": "removequery",
    "text": "RemoveQuery"
  }, {
    "depth": 3,
    "slug": "getquerylist",
    "text": "GetQueryList"
  }, {
    "depth": 3,
    "slug": "syncquery",
    "text": "SyncQuery"
  }, {
    "depth": 3,
    "slug": "fetchdata",
    "text": "FetchData"
  }, {
    "depth": 3,
    "slug": "getvaluelist",
    "text": "GetValueList"
  }, {
    "depth": 3,
    "slug": "export",
    "text": "Export"
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
    children: [createVNode($$PageTitle, {
      title: frontmatter.title
    }), "\n", createVNode(_components.h2, {
      id: "about-easyquery-web-service",
      children: "About EasyQuery Web Service"
    }), "\n", createVNode(_components.p, {
      children: "EasyQuery Web Service is a specification of the server-side API that handles requests from the client-side EasyQuery widgets.\r\nThis API includes a few endpoints that allow you (as a developer) to implement some basic scenarios of advanced database search,\r\ndata filtering or ad-hoc reporting."
    }), "\n", createVNode(_components.p, {
      children: ["The only implementation of the API is available for now as a part ", createVNode(_components.a, {
        href: "https://korzh.com/easyquery",
        children: "EasyQuery for ASP.NET Core"
      }), " library."]
    }), "\n", createVNode(_components.h2, {
      id: "endpoints",
      children: "Endpoints"
    }), "\n", createVNode(_components.h3, {
      id: "getmodel",
      children: "GetModel"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "GET /models/{modelId}"
      })
    }), "\n", createVNode(_components.p, {
      children: "Returns the model by its ID"
    }), "\n", createVNode(_components.h3, {
      id: "getquery",
      children: "GetQuery"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "GET /models/{modelId}/queries/{queryId}"
      })
    }), "\n", createVNode(_components.p, {
      children: "Returns the query by model\u2019s ID and query ID"
    }), "\n", createVNode(_components.h3, {
      id: "savequery",
      children: "SaveQuery"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "PUT /models/{modelId}/queries/{queryId}"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Saves the query defined by ", createVNode(_components.code, {
        children: "modelId"
      }), " and ", createVNode(_components.code, {
        children: "queryId"
      }), " to the storage on the server.\r\nThe content of the request is a JSON object that contains the query definition:"]
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
                children: "query"
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
                children: "id"
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
                children: "MyQueryID"
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
            "data-code": '{\x7F  "query": {\x7F    "id": "MyQueryID",\x7F  }\x7F}',
            children: createVNode(_components.div, {})
          })
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "newquery",
      children: "NewQuery"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "POST /models/{modelId}/queries"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Creates a new query for the model defined in ", createVNode(_components.code, {
        children: "modelId"
      }), " and returns it to the client\r\nThe content of the request is a JSON object that might contain the query definition (including the preferable ID and name of the new query).\r\nIf there is no ", createVNode(_components.code, {
        children: "query"
      }), " property in the request content - a default query with some random ID will be created."]
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
                children: "query"
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
                children: "id"
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
                children: "MyQueryID"
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
            "data-code": '{\x7F  "query": {\x7F    "id": "MyQueryID",\x7F  }\x7F}',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "removequery",
      children: "RemoveQuery"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "DELETE /models/{modelId}/queries/{queryId}"
      })
    }), "\n", createVNode(_components.h3, {
      id: "getquerylist",
      children: "GetQueryList"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "GET /models/{modelId}/queries"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Returns the list of the queries for specified model (", createVNode(_components.code, {
        children: "modelId"
      }), ") available for the current user.\r\nThe response is a JSON object with the list of query definitions:"]
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
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "["
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  {"
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
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "id"
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
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "Query1ID"
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
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  },"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  {"
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
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "id"
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
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "Query2ID"
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
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  },"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "]"
              })
            })]
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": '[\x7F  {\x7F    "id":"Query1ID",\x7F  },\x7F  {\x7F    "id":"Query2ID",\x7F  },\x7F]',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "syncquery",
      children: "SyncQuery"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "POST /models/{modelId}/queries/{queryId}/sync"
      })
    }), "\n", createVNode(_components.p, {
      children: "Synchronizes the changes made in the query on the client-side with the server.\r\nThe content of the request is a JSON object which contains the query definition."
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
                children: "query"
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
                children: "id"
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
                children: "MyQueryID"
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
            "data-code": '{\x7F  "query": {\x7F    "id": "MyQueryID",\x7F  }\x7F}',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "fetchdata",
      children: "FetchData"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "POST /models/{modelId}/fetch"
      })
    }), "\n", createVNode(_components.p, {
      children: ["This request allows to execute the query passed in the request\u2019s body and get the result set in a format, compatible with ", createVNode(_components.a, {
        href: "https://developers.google.com/chart/interactive/docs/datatables_dataviews#javascriptliteral",
        children: "Googles DataTable"
      }), ".\r\nHere ", createVNode(_components.code, {
        children: "modelId"
      }), " defines the model this query belongs to and can be used on the server side to specify the database and connection to it (if it\u2019s a multi-database application)."]
    }), "\n", createVNode(_components.p, {
      children: "The content of the request, as usual, is a JSON object which contains the query definition and chunk (a piece of data) we would like to get.\r\nHere is an example:"
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
                children: "chunk"
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
                children: "      "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "offset"
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
                children: "0"
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
                children: "      "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "limit"
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
                children: "1000"
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
                children: "      "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "needTotal"
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
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#96A1C2"
                },
                children: "//defines if we need to get the total number of recrods as well"
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
                children: "query"
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
                children: "id"
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
                children: "MyQueryID"
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
                children: "options"
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
                children: "sqlOptions"
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
                children: "      "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "SelectDistinct"
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
            "data-code": '{\x7F  "chunk": {\x7F      "offset": 0,\x7F      "limit": 1000,\x7F      "needTotal": true //defines if we need to get the total number of recrods as well\x7F  },\x7F  "query": {\x7F    "id": "MyQueryID",\x7F  },\x7F  "options": {\x7F    "sqlOptions": {\x7F      "SelectDistinct": true\x7F    },\x7F  }\x7F}',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The response contains the result set itself (", createVNode(_components.code, {
        children: "resultSet"
      }), " property) and some meta information (", createVNode(_components.code, {
        children: "meta"
      }), ") field about the returned data. Here is an example:"]
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
                children: "resultSet"
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
                children: "cols"
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
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "id"
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
                children: "col-3g8xzmshiiok"
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
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "label"
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
                children: "Name"
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
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "type"
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
                children: "1"
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
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "originAttrId"
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
                children: "Product.ProductName"
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
                children: "      {"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "id"
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
                children: "col-5f8xzmshiqw3"
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
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "isAggr"
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
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "label"
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
                children: "Freight Sum"
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
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "type"
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
                children: "8"
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
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "originAttrId"
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
                children: "Order.Freight"
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
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "      }"
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
                children: "rows"
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
                children: " ["
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "      ["
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "Alice Mutton"
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
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#BD93F9"
                },
                children: "219.07"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "      ],"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "      ["
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "Aniseed Syrup"
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
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#BD93F9"
                },
                children: "8.53"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "      ],"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    ]"
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
                children: "meta"
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
                children: "totalRecords"
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
                children: "66"
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
                children: "offset"
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
                children: "0"
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
            "data-code": '{\x7F  "resultSet": {\x7F    "cols": [\x7F      {\x7F        "id": "col-3g8xzmshiiok",\x7F        "label": "Name",\x7F        "type": 1,\x7F        "originAttrId": "Product.ProductName",\x7F      },\x7F      {\x7F        "id": "col-5f8xzmshiqw3",\x7F        "isAggr": true,\x7F        "label": "Freight Sum",\x7F        "type": 8,\x7F        "originAttrId": "Order.Freight",\x7F      }\x7F    ],\x7F    "rows": [\x7F      [\x7F        "Alice Mutton",\x7F        219.07\x7F      ],\x7F      [\x7F        "Aniseed Syrup",\x7F        8.53\x7F      ],\x7F    ]\x7F  },\x7F  "meta": {\x7F    "totalRecords": 66,\x7F    "offset": 0\x7F  }\x7F}',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "getvaluelist",
      children: "GetValueList"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "GET /models/{modelId}/valuelists/{editorId}"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Get the list of values by the model specified via ", createVNode(_components.code, {
        children: "modelId"
      }), " parameter and the value editor specified via ", createVNode(_components.code, {
        children: "editorId"
      }), ".\r\nThe response is a JSON object that contains the list of object with ", createVNode(_components.code, {
        children: "id"
      }), " and ", createVNode(_components.code, {
        children: "text"
      }), " properties each. Example:"]
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
                children: "result"
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
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "ok"
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
                children: "values"
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
                children: "["
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    {"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "id"
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
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "SouthAmerica"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "text"
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
                children: "South America"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF7777",
                  "--0fs": "italic",
                  "--0td": "underline"
                },
                children: "items"
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
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "      {"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "id"
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
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "AR"
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
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "text"
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
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "Argentina"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "},"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    ]},"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    {"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "id"
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
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "Europe"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "text"
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
                children: "Europe"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF7777",
                  "--0fs": "italic",
                  "--0td": "underline"
                },
                children: "items"
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
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "      {"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "id"
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
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "AT"
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
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FE"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD"
                },
                children: "text"
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
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "Austria"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "},"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    ]},"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  ]"
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
            "data-code": '{\x7F  "result":"ok",\x7F  "values":[\x7F    {"id":"SouthAmerica", "text": "South America", items: [\x7F      {"id":"AR","text":"Argentina"},\x7F    ]},\x7F    {"id":"Europe", "text": "Europe", items: [\x7F      {"id":"AT","text":"Austria"},\x7F    ]},\x7F  ]\x7F}',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "As you can see the result list can be hirerachical (so, each item can include sub-items)."
    }), "\n", createVNode(_components.h3, {
      id: "export",
      children: "Export"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "POST /models/{modelId}/export/{format}"
      })
    }), "\n", createVNode(_components.p, {
      children: ["This operation exports the result of the query with indicated ", createVNode(_components.code, {
        children: "modelId"
      }), "  to the specified ", createVNode(_components.code, {
        children: "format"
      }), " (e.g. \u201Ccsv\u201D or \u201Cpdf\u201D)."]
    }), "\n", createVNode(_components.p, {
      children: "The content of the request is a JSON object that contains the query definition:"
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
                children: "query"
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
                children: "id"
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
                children: "MyQueryID"
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
            "data-code": '{\x7F  "query": {\x7F    "id": "MyQueryID",\x7F  }\x7F}',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The response is a stream of the data in a specified format or a JSON object with the error message."
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
const url = "src/content/js-docs/web-service-api.mdx";
const file = "D:/Projects/sites/korzh.com/src/content/js-docs/web-service-api.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Projects/sites/korzh.com/src/content/js-docs/web-service-api.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
