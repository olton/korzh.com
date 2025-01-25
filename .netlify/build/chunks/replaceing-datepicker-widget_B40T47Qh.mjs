import { _ as __astro_tag_component__, F as Fragment, t as createVNode } from './astro_D2KdCmZW.mjs';
import { $ as $$Image } from './pages/404_BbxC-4jy.mjs';
import { a as $$PageTitle } from './pages/index_DN_GkUJs.mjs';
import 'clsx';

const frontmatter = {
  "title": "Replacing default Calendar widget with KendoDatePicker",
  "description": "EasyQuery.JS allows you to replace the default Calendar widget with any other component by your choice. Here we are going to describe how to change it with your Kendo DateTime picker.",
  "slug": "tutorial/replacing-datepicker-widget",
  "time": "1 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "step-1-add-kendo-styles-and-scripts",
    "text": "Step 1: Add Kendo styles and scripts"
  }, {
    "depth": 2,
    "slug": "step-2-add-a-descendant-of-easyquerys-datetimepicker-class",
    "text": "Step 2: Add a \u201Cdescendant\u201D of EasyQuery\u2019s DateTimePicker class"
  }, {
    "depth": 2,
    "slug": "step-3-add-a-resolver-function-that-returns-new-datetime-picker-widget",
    "text": "Step 3: add a resolver function that returns new date/time picker widget"
  }, {
    "depth": 2,
    "slug": "all-set",
    "text": "All set!"
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
      children: "EasyQuery.JS allows you to replace the default Calendar widget with any other component by your choice. Here we are going to describe how to change it with your Kendo DateTime picker."
    }), "\n", createVNode(_components.h2, {
      id: "step-1-add-kendo-styles-and-scripts",
      children: "Step 1: Add Kendo styles and scripts"
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
                  "--0": "#F8F8F2"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "link"
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
                children: "rel"
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
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B",
                  "--0fs": "italic"
                },
                children: "href"
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
                children: "https://kendo.cdn.telerik.com/2020.3.915/styles/kendo.common.min.css"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " />"
              })]
            }), createVNode(_components.div, {
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
                children: "link"
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
                children: "rel"
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
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B",
                  "--0fs": "italic"
                },
                children: "href"
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
                children: "https://kendo.cdn.telerik.com/2020.3.915/styles/kendo.default.min.css"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " />"
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
                children: "https://kendo.cdn.telerik.com/2020.3.915/js/jquery.min.js"
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
            }), createVNode(_components.div, {
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
                children: "https://kendo.cdn.telerik.com/2020.3.915/js/kendo.all.min.js"
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
            })]
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": '<link rel="stylesheet" href="https://kendo.cdn.telerik.com/2020.3.915/styles/kendo.common.min.css" />\x7F<link rel="stylesheet" href="https://kendo.cdn.telerik.com/2020.3.915/styles/kendo.default.min.css" />\x7F\x7F<script src="https://kendo.cdn.telerik.com/2020.3.915/js/jquery.min.js"><\/script>\x7F<script src="https://kendo.cdn.telerik.com/2020.3.915/js/kendo.all.min.js"><\/script>',
            children: createVNode(_components.div, {})
          })
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "step-2-add-a-descendant-of-easyquerys-datetimepicker-class",
      children: "Step 2: Add a \u201Cdescendant\u201D of EasyQuery\u2019s DateTimePicker class"
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
                  "--0": "#F8F8F2"
                },
                children: "    function KendoDateTimePicker(options) "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "{"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        Object."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "getPrototypeOf"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "KendoDateTimePicker"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ".prototype).constructor."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "call"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#BD93F9",
                  "--0fs": "italic"
                },
                children: "this"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ", options);"
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
                children: "}"
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
                children: "    KendoDateTimePicker.prototype = Object.create(easyquery.ui.DateTimePicker.prototype);"
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
                children: "    KendoDateTimePicker.prototype.show = function (anchor) "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "{"
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
                children: "        var self "
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
                  "--0": "#BD93F9",
                  "--0fs": "italic"
                },
                children: "this"
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
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "if"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " (self.options.beforeShow) {"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "            self.options.beforeShow();"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        }"
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
                children: "        var kendoOptions "
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
                children: "            componentType"
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
                children: "modern"
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
                children: "            value"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " self.currentDateTime,"
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
                  "--0": "#50FA7B"
                },
                children: "change"
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
                  "--0": "#FF79C6"
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
                children: " dateTime "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " self.kendoPicker."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "value"
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
                children: "                self.currentDateTime "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " dateTime;"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "                self."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "dateTimeChanged"
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
                children: "            },"
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
                  "--0": "#50FA7B"
                },
                children: "close"
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
                  "--0": "#FF79C6"
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
                children: " dateTime "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " self.kendoPicker."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "value"
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
                children: "                self."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "apply"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(dateTime);"
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
                children: "        };"
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
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "if"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " (self.options.showCalendar) {"
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
                  "--0": "#50FA7B"
                },
                children: "if"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " (self.options.showTimePicker) {"
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
                  "--0": "#50FA7B"
                },
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(anchor)."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "kendoDateTimePicker"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(kendoOptions);"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "                self.kendoPicker "
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(anchor)."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "data"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "kendoDateTimePicker"
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
                children: "            else {"
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
                  "--0": "#50FA7B"
                },
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(anchor)."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "kendoDatePicker"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(kendoOptions);"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "                self.kendoPicker "
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(anchor)."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "data"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "kendoDatePicker"
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
                children: "        }"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        else {"
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
                  "--0": "#50FA7B"
                },
                children: "$"
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
                children: "anchor"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ")."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "kendoTimePicker"
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
                children: "kendoOptions"
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
                children: "            self.kendoPicker "
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
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(anchor)."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "data"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "kendoTimePicker"
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
                children: "        }"
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
                children: "        self.kendoPicker."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "open"
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
                children: "    "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "}"
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
                children: "    KendoDateTimePicker.prototype.destroy = function () "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "{"
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
                  "--0": "#BD93F9",
                  "--0fs": "italic"
                },
                children: "this"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ".kendoPicker."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "destroy"
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
                children: "    "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "}"
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
            "data-code": '<script>\x7F    function KendoDateTimePicker(options) {\x7F        Object.getPrototypeOf(KendoDateTimePicker.prototype).constructor.call(this, options);\x7F    }\x7F\x7F    KendoDateTimePicker.prototype = Object.create(easyquery.ui.DateTimePicker.prototype);\x7F\x7F    KendoDateTimePicker.prototype.show = function (anchor) {\x7F\x7F        var self = this;\x7F        if (self.options.beforeShow) {\x7F            self.options.beforeShow();\x7F        }\x7F\x7F        var kendoOptions = {\x7F            componentType: "modern",\x7F            value: self.currentDateTime,\x7F            change: function () {\x7F                var dateTime = self.kendoPicker.value();\x7F                self.currentDateTime = dateTime;\x7F                self.dateTimeChanged();\x7F            },\x7F            close: function () {\x7F                var dateTime = self.kendoPicker.value();\x7F                self.apply(dateTime);\x7F            }\x7F        };\x7F\x7F        if (self.options.showCalendar) {\x7F            if (self.options.showTimePicker) {\x7F                $(anchor).kendoDateTimePicker(kendoOptions);\x7F                self.kendoPicker = $(anchor).data("kendoDateTimePicker");\x7F            }\x7F            else {\x7F                $(anchor).kendoDatePicker(kendoOptions);\x7F                self.kendoPicker = $(anchor).data("kendoDatePicker");\x7F            }\x7F        }\x7F        else {\x7F            $(anchor).kendoTimePicker(kendoOptions);\x7F            self.kendoPicker = $(anchor).data("kendoTimePicker");\x7F        }\x7F\x7F        self.kendoPicker.open();\x7F    }\x7F\x7F    KendoDateTimePicker.prototype.destroy = function () {\x7F        this.kendoPicker.destroy();\x7F    }\x7F\x7F<\/script>',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-3-add-a-resolver-function-that-returns-new-datetime-picker-widget",
      children: "Step 3: add a resolver function that returns new date/time picker widget"
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
                children: "var"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " viewOptions "
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
                children: "    queryPanel"
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
                children: "       "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "dateTimePickerResolver"
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
                  "--0": "#FF79C6"
                },
                children: "function"
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
                children: "options"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ") {"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "           "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "return"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6",
                  "--0fw": "bold"
                },
                children: "new"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "KendoDateTimePicker"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(options)"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "       }"
              })
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
            "data-code": "var viewOptions = {\x7F    queryPanel: {\x7F       dateTimePickerResolver: function (options) {\x7F           return new KendoDateTimePicker(options)\x7F       }\x7F    }\x7F}",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "all-set",
      children: "All set!"
    }), "\n", createVNode(_components.p, {
      children: "With the code above, QueryPanel widget will use Kendo date/time picker widget instead of the EasyQuery\u2019s default one."
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
const url = "src/content/js-docs/tutorial/replaceing-datepicker-widget.mdx";
const file = "D:/Projects/sites/korzh.com/src/content/js-docs/tutorial/replaceing-datepicker-widget.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Projects/sites/korzh.com/src/content/js-docs/tutorial/replaceing-datepicker-widget.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
