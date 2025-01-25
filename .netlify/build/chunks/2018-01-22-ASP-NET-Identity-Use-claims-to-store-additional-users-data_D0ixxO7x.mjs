import { _ as __astro_tag_component__, F as Fragment, t as createVNode } from './astro_D2KdCmZW.mjs';
import { $ as $$Image } from './pages/404_BbxC-4jy.mjs';
import 'clsx';

const newAppImage = new Proxy({"src":"/_astro/anc-identity-newapp01.CfCoBOlp.png","width":784,"height":513,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const registrationImage = new Proxy({"src":"/_astro/anc-identity-registration.fPtN4icx.png","width":500,"height":487,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const contactImage = new Proxy({"src":"/_astro/anc-identity-contact-name.jkv4LmCj.png","width":1227,"height":593,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "ASP.NET Identity - Use claims to store additional user's data",
  "tags": ["ASP-NET-CORE", "ASP-NET-IDENTITY", "CLAIMS"],
  "slug": "aspnet-identity-store-user-data-in-claims",
  "date": "2018-01-22T00:00:00.000Z",
  "cover": {
    "src": "/images/auth-claims.png"
  },
  "sort": 2,
  "description": "With this post, we start a series of articles that describe the different aspects of using ASP.NET Identity in your ASP.NET (Core) applications",
  "relatedPosts": ["aspnet-identity-weakening-password-policies", "aspnet-identity-migrate-membership-passwords", "aspnet-identity-master-password", "add-extra-user-claims-aspnet-core-webapp"],
  "category": "Identity",
  "time": "5 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "problem",
    "text": "Problem"
  }, {
    "depth": 2,
    "slug": "solution",
    "text": "Solution"
  }, {
    "depth": 3,
    "slug": "0-preparations-contactname-property-in-applicationuser-and-updated-views",
    "text": "0. Preparations: ContactName property in ApplicationUser and updated views"
  }, {
    "depth": 3,
    "slug": "1-adding-a-users-name-to-the-claims",
    "text": "1. Adding a user\u2019s name to the claims"
  }, {
    "depth": 3,
    "slug": "2-accessing-new-claim-from-the-views",
    "text": "2. Accessing new claim from the views"
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
    figcaption: "figcaption",
    figure: "figure",
    h2: "h2",
    h3: "h3",
    li: "li",
    link: "link",
    ol: "ol",
    p: "p",
    pre: "pre",
    script: "script",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "NB"
        }), ": The solution presented in this article will work in version 2.0 of ASP.NET Core only!\r\nIf you use a newer version of ASP.NET Core (e.g. 2.2) - here is a ", createVNode(_components.a, {
          href: "add-extra-user-claims-aspnet-core-webapp",
          children: "new post on the same topic"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "With this post, we start a series of articles that describe the different aspects of using ASP.NET Identity in your ASP.NET (Core) applications.\r\nAll the code in the following articles was built for and tested with ASP.NET Core 2.0. However, in most cases, it will work well in earlier versions of .NET framework (4.x) and ASP.NET Identity library (2.x)"
    }), "\n", createVNode(_components.p, {
      children: ["One more note. We are NOT going to do an introduction to or describe the basic principles of ASP.NET Core in general or APS.NET Identity in particular. The following material is more for the developers who already have some experience with both of them. If you don\u2019t - please start by reading the tutorials on ", createVNode(_components.a, {
        href: "https://docs.microsoft.com/en-us/aspnet/core/",
        children: "ASP.NET Core documentation"
      }), " website and creating your first web app with it."]
    }), "\n", createVNode(_components.h2, {
      id: "problem",
      children: "Problem"
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s suppose we created a new ASP.NET Core project using one of the default templates and chose \u201CIndividual user account\u201D option for \u201CAuthentication\u201D."
    }), "\n", createVNode($$Image, {
      src: newAppImage,
      alt: "ASP.NET Core - new project with ASP.NET Identity"
    }), "\n", createVNode(_components.p, {
      children: ["Now when we start that newly created project and register new user we will see something like ", createVNode(_components.code, {
        children: "Hello YourEmailAddress@YourCompany.com"
      }), " in the top right part of the index web-page."]
    }), "\n", createVNode(_components.p, {
      children: ["Obviously, such kind of greeting is useless in a real-world application and you would like to see the name of the currently logged user there instead (e.g. ", createVNode(_components.code, {
        children: "Hello John Doe"
      }), ").\r\nLet\u2019s figure out how to do it."]
    }), "\n", createVNode(_components.h2, {
      id: "solution",
      children: "Solution"
    }), "\n", createVNode(_components.p, {
      children: ["Here we guess you are already familiar with the claims and ", createVNode(_components.a, {
        href: "https://docs.microsoft.com/en-us/aspnet/core/security/authorization/claims",
        children: "claims-based approach"
      }), " for authorization used in ASP.NET Core Identity. If not - please read ", createVNode(_components.a, {
        href: "https://docs.microsoft.com/en-us/aspnet/core/security/",
        children: "ASP.NET Core Security"
      }), " documentation first."]
    }), "\n", createVNode(_components.p, {
      children: "To achieve our goal we need to do 2 things:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Add necessary information to the list of claims stored with the user\u2019s identity."
      }), "\n", createVNode(_components.li, {
        children: "Have a simple way of getting that info when needed."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "But before implementing these two tasks we will need to add a new ContactName field to our model class and update our registration and user management pages accordingly."
    }), "\n", createVNode(_components.h3, {
      id: "0-preparations-contactname-property-in-applicationuser-and-updated-views",
      children: "0. Preparations: ContactName property in ApplicationUser and updated views"
    }), "\n", createVNode(_components.p, {
      children: ["Let\u2019s add a new ", createVNode(_components.code, {
        children: "ContactName"
      }), " property to the ApplicationUser model class (you can find it in ", createVNode(_components.code, {
        children: "Models"
      }), " folder of your project):"]
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
                children: "public"
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
                children: "ApplicationUser"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " : "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "IdentityUser"
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
                children: "public"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "string"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " ContactName { "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "get"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "; "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "set"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "; }"
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
            "data-code": "public class ApplicationUser : IdentityUser {\x7F    public string ContactName { get; set; }\x7F}",
            children: createVNode(_components.div, {})
          })
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Of course, you can add here some other properties you would like to store with your user\u2019s account, like ", createVNode(_components.code, {
        children: "FirstName"
      }), ", ", createVNode(_components.code, {
        children: "LastName"
      }), ", ", createVNode(_components.code, {
        children: "Country"
      }), ", ", createVNode(_components.code, {
        children: "Address"
      }), ", etc. but for simplicity, we will consider only one additional property."]
    }), "\n", createVNode(_components.p, {
      children: "The next step will be adding a new migration and updating your database.\r\nJust run the following commands from the terminal windows in your project\u2019s folder:"
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
                children: "ef"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "migrations"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "add"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "ContactNameField"
              })]
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "dotnet ef migrations add ContactNameField",
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
                children: "ef"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "database"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "update"
              })]
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "dotnet ef database update",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Finally, we will need to add the new field to the views:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "Models\\AccountViewModels\\RegisterViewModel.cs"
        })
      }), "\n"]
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
                children: "public"
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
                children: "RegisterViewModel"
              })]
            }), createVNode(_components.div, {
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
                children: "    ["
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "Required"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "]"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    ["
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "Display"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(Name "
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
                children: ")]"
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
                children: "public"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "string"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " ContactName { "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "get"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "; "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "set"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "; }"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "   .     .     .     .     .     ."
              })
            })]
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": 'public class RegisterViewModel\x7F{\x7F    [Required]\x7F    [Display(Name = "Name")]\x7F    public string ContactName { get; set; }\x7F   .     .     .     .     .     .',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Views/Account/Register.chstml"
        }), "\r\nAdd the following piece of markup before ", createVNode(_components.code, {
          children: "Email"
        }), " form group"]
      }), "\n"]
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
                children: "div"
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
                children: "class"
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
                children: "form-group"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
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
                children: "    <"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "label"
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
                children: "asp-for"
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
                children: "ContactName"
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
                children: "label"
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
                children: "    <"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "input"
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
                children: "asp-for"
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
                children: "ContactName"
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
                children: "class"
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
                children: "form-control"
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
                children: "    <"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "span"
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
                children: "asp-validation-for"
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
                children: "ContactName"
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
                children: "class"
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
                children: "text-danger"
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
                children: "span"
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
                children: "</"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "div"
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
            "data-code": '<div class="form-group">\x7F    <label asp-for="ContactName"></label>\x7F    <input asp-for="ContactName" class="form-control" />\x7F    <span asp-validation-for="ContactName" class="text-danger"></span>\x7F</div>',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Controllers/AccountController"
        }), "\r\nUpdate the following line in the Register method:"]
      }), "\n"]
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
                children: "var"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " user "
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
                children: "ApplicationUser"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " { ContactName"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "model.ContactName, UserName "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " model.Email, Email "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " model.Email };"
              })]
            })
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "var user = new ApplicationUser { ContactName=model.ContactName, UserName = model.Email, Email = model.Email };",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "After that, perform the similar steps in"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "View/Manage/Index.cshtml"
        }), ","]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Models/ManageViewModels/IndexViewModel.cs"
        }), "\r\nand in"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "Index"
        }), " method in ", createVNode(_components.code, {
          children: "ManageControler"
        }), " class."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Try to run your project and open the registration page. Now it should look this way:"
    }), "\n", createVNode($$Image, {
      src: registrationImage,
      alt: "Registration form with ContactName field"
    }), "\n", createVNode(_components.p, {
      children: "Now, when all the preparations are finished we can return back to our main tasks."
    }), "\n", createVNode(_components.h3, {
      id: "1-adding-a-users-name-to-the-claims",
      children: "1. Adding a user\u2019s name to the claims"
    }), "\n", createVNode(_components.p, {
      children: "It appears that the main task is much easier than all the preparations we made before. :)"
    }), "\n", createVNode(_components.p, {
      children: ["The quickest way to add some additional claims to the user\u2019s identity is to create your own implementation of ", createVNode(_components.code, {
        children: "IUserClaimsPrincipalFactory"
      }), " and register it in DI container."]
    }), "\n", createVNode(_components.p, {
      children: ["Here is the implementation of ", createVNode(_components.code, {
        children: "IUserClaimsPrincipalFactory"
      }), " which adds the value stored in ", createVNode(_components.code, {
        children: "ContactName"
      }), " property to the user\u2019s claims:"]
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
                children: "public"
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
                children: "MyUserClaimsPrincipalFactory"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " : "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "UserClaimsPrincipalFactory"
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
                children: "ApplicationUser"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "IdentityRole"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ">"
              })]
            }), createVNode(_components.div, {
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
                children: "    "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "public"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "MyUserClaimsPrincipalFactory"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "("
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
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "UserManager"
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
                children: "ApplicationUser"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "> "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FFB86C",
                  "--0fs": "italic"
                },
                children: "userManager"
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
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "RoleManager"
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
                children: "IdentityRole"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "> "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FFB86C",
                  "--0fs": "italic"
                },
                children: "roleManager"
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
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "IOptions"
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
                children: "IdentityOptions"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "> "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FFB86C",
                  "--0fs": "italic"
                },
                children: "optionsAccessor"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ")"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        : "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#BD93F9",
                  "--0fs": "italic"
                },
                children: "base"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(userManager, roleManager, optionsAccessor) {"
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
                children: "protected"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "override"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
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
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "Task"
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
                children: "ClaimsIdentity"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "> "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "GenerateClaimsAsync"
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
                children: "ApplicationUser"
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
                children: "user"
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
                children: "        "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "var"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " identity "
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
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#BD93F9",
                  "--0fs": "italic"
                },
                children: "base"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "GenerateClaimsAsync"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(user);"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        identity."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "AddClaim"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "("
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
                children: "Claim"
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
                children: "ContactName"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ", user.ContactName "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "??"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\"\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "));"
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
                children: "return"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " identity;"
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
            "data-code": 'public class MyUserClaimsPrincipalFactory : UserClaimsPrincipalFactory<ApplicationUser, IdentityRole>\x7F{\x7F    public MyUserClaimsPrincipalFactory(\x7F        UserManager<ApplicationUser> userManager,\x7F        RoleManager<IdentityRole> roleManager,\x7F        IOptions<IdentityOptions> optionsAccessor)\x7F        : base(userManager, roleManager, optionsAccessor) {\x7F    }\x7F\x7F    protected override async Task<ClaimsIdentity> GenerateClaimsAsync(ApplicationUser user) {\x7F        var identity = await base.GenerateClaimsAsync(user);\x7F        identity.AddClaim(new Claim("ContactName", user.ContactName ?? ""));\x7F        return identity;\x7F    }\x7F}',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["And then register it in DI container in ", createVNode(_components.code, {
        children: "ConfigureServices"
      }), " methods of your Startup class:"]
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
                children: "public"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "void"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "ConfigureServices"
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
                children: "IServiceCollection"
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
                children: "services"
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
                  "--0": "#F8F8F2"
                },
                children: "    .     .     .     .      ."
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    services."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "AddIdentity"
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
                children: "ApplicationUser"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "IdentityRole"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ">()"
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
                children: "AddEntityFrameworkStores"
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
                children: "ApplicationDbContext"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ">()"
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
                children: "AddDefaultTokenProviders"
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
                children: "    //add the following line of code"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    services."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "AddScoped"
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
                children: "IUserClaimsPrincipalFactory"
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
                children: "ApplicationUser"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ">, "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "MyUserClaimsPrincipalFactory"
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
                children: "    .     .     .     .      ."
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
            "data-code": "public void ConfigureServices(IServiceCollection services) {\x7F    .     .     .     .      .\x7F    services.AddIdentity<ApplicationUser, IdentityRole>()\x7F        .AddEntityFrameworkStores<ApplicationDbContext>()\x7F        .AddDefaultTokenProviders();\x7F\x7F    //add the following line of code\x7F    services.AddScoped<IUserClaimsPrincipalFactory<ApplicationUser>, MyUserClaimsPrincipalFactory>();\x7F    .     .     .     .      .\x7F}",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-accessing-new-claim-from-the-views",
      children: "2. Accessing new claim from the views"
    }), "\n", createVNode(_components.p, {
      children: ["Now we have a new claim associated with our user\u2019s identity. That\u2019s fine. But how we can get it and render on our view(s)?\r\nEasy. Any view in your application has access to ", createVNode(_components.code, {
        children: "User"
      }), " object which is an instance of ", createVNode(_components.code, {
        children: "ClaimsPrincipal"
      }), " class."]
    }), "\n", createVNode(_components.p, {
      children: ["This object actually holds the list of all claims associated with the current user and you can call its ", createVNode(_components.code, {
        children: "FindFirst"
      }), " method to get the necessary claim and then read the ", createVNode(_components.code, {
        children: "Value"
      }), " property of the found claim."]
    }), "\n", createVNode(_components.p, {
      children: ["So, we just need to open ", createVNode(_components.code, {
        children: "_LoginPartical.cshtml"
      }), " file in ", createVNode(_components.code, {
        children: "Views/Shared/"
      }), " folder and replace the following line:"]
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
                children: "a"
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
                children: "asp-area"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\"\""
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
                children: "asp-controller"
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
                children: "Manage"
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
                children: "asp-action"
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
                children: "Index"
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
                children: "title"
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
                children: "Manage"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ">Hello @UserManager.GetUserName(User)!</"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "a"
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
            "data-code": "<a asp-area=\"\" asp-controller=\"Manage\" asp-action=\"Index\" title=\"Manage\">Hello @UserManager.GetUserName(User)!</a>",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "with this one:"
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
                children: "a"
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
                children: "asp-area"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\"\""
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
                children: "asp-controller"
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
                children: "Manage"
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
                children: "asp-action"
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
                children: "Index"
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
                children: "title"
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
                children: "Manage"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: '>Hello @(User.FindFirst("ContactName").Value)!</'
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "a"
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
            "data-code": "<a asp-area=\"\" asp-controller=\"Manage\" asp-action=\"Index\" title=\"Manage\">Hello @(User.FindFirst(\"ContactName\").Value)!</a>",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Now you instead of something like ", createVNode(_components.code, {
        children: "Hello john.doe@yourcompany.com"
      }), " at the top of your web-page you should see something like this:"]
    }), "\n", createVNode($$Image, {
      src: contactImage,
      alt: "ASP.NET Core - renderring contact name instead of user's ID"
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
const url = "src/content/blog/2018-01-22-ASP-NET-Identity-Use-claims-to-store-additional-users-data.mdx";
const file = "D:/Projects/sites/korzh.com/src/content/blog/2018-01-22-ASP-NET-Identity-Use-claims-to-store-additional-users-data.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Projects/sites/korzh.com/src/content/blog/2018-01-22-ASP-NET-Identity-Use-claims-to-store-additional-users-data.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
