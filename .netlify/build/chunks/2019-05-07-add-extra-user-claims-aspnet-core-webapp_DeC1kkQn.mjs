import { _ as __astro_tag_component__, F as Fragment, t as createVNode } from './astro_D2KdCmZW.mjs';
import { $ as $$Image } from './pages/404_BbxC-4jy.mjs';
import 'clsx';

const claim01Image = new Proxy({"src":"/_astro/anc22-add-extra-claim01.4pEeQv9y.png","width":800,"height":519,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const claim02Image = new Proxy({"src":"/_astro/anc22-add-extra-claim02.DkQjSWHp.png","width":796,"height":615,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const claim03Image = new Proxy({"src":"/_astro/anc22-add-extra-claim03.Dcts5XOR.png","width":772,"height":280,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Add extra user claims in ASP.NET Core webapp",
  "tags": ["ASP-NET-CORE", "ASP-NET-IDENTITY", "CLAIMS"],
  "slug": "add-extra-user-claims-aspnet-core-webapp",
  "date": "2019-05-07T00:00:00.000Z",
  "cover": {
    "src": "/images/sec-key.png"
  },
  "sort": 5,
  "description": "So, the code in the following articles was built for and tested with ASP.NET Core 2.2. The main concept, however, is still the same and were not changed since ASP.NET Identity 2.0 (I guess)",
  "relatedPosts": ["aspnet-identity-store-user-data-in-claims"],
  "time": "6 min read"
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
    "depth": 2,
    "slug": "step-0-preparations",
    "text": "Step 0: Preparations"
  }, {
    "depth": 3,
    "slug": "01-new-applicationuser-class",
    "text": "0.1 New ApplicationUser class"
  }, {
    "depth": 3,
    "slug": "02-replace-identityuser-with-applicationuser",
    "text": "0.2 Replace IdentityUser with ApplicationUser"
  }, {
    "depth": 3,
    "slug": "03-update-your-database",
    "text": "0.3. Update your database."
  }, {
    "depth": 3,
    "slug": "04-update-user-profile-page",
    "text": "0.4. Update \u201CUser Profile\u201D page"
  }, {
    "depth": 2,
    "slug": "step-1-adding-the-contact-name-to-the-claims",
    "text": "Step 1: Adding the contact name to the claims"
  }, {
    "depth": 3,
    "slug": "create-your-own-claims-principal-factory",
    "text": "Create your own \u201Cclaims principal\u201D factory"
  }, {
    "depth": 3,
    "slug": "register-new-class-in-di-container",
    "text": "Register new class in DI container"
  }, {
    "depth": 2,
    "slug": "step-2-accessing-new-claim-from-the-views",
    "text": "Step 2: Accessing new claim from the views"
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
    li: "li",
    link: "link",
    ol: "ol",
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
      children: ["This is a second edition of the ", createVNode(_components.a, {
        href: "aspnet-identity-store-user-data-in-claims",
        children: "previous post on the same topic"
      }), ". The reason why I wrote this one is because of some drastic changes made in ASP.NET Core Authentication system from version 2.0 to version 2.2 - so most of the code presented in the first article doesn\u2019t work with the new version."]
    }), "\n", createVNode(_components.p, {
      children: "So, the code in the following articles was built for and tested with ASP.NET Core 2.2. The main concept, however, is still the same and were not changed since ASP.NET Identity 2.0 (I guess)."
    }), "\n", createVNode(_components.p, {
      children: "As in the previous case, we will start with a description of the problem."
    }), "\n", createVNode(_components.h2, {
      id: "problem",
      children: "Problem"
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s suppose we created a new ASP.NET Core project using one of the default templates and chose \u201CIndividual user account\u201D option for \u201CAuthentication\u201D."
    }), "\n", createVNode($$Image, {
      src: claim01Image,
      alt: "ASP.NET Core - new webapp project with an authentication"
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
      }), " article first."]
    }), "\n", createVNode(_components.p, {
      children: "To achieve our goal we need to do 2 things:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Add necessary information to the list of the claims attached to the user\u2019s identity."
      }), "\n", createVNode(_components.li, {
        children: "Have a simple way of getting that info when needed."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "But before implementing these two tasks we will need to add a new ContactName field to our model class and update our registration and user management pages accordingly."
    }), "\n", createVNode(_components.h2, {
      id: "step-0-preparations",
      children: "Step 0: Preparations"
    }), "\n", createVNode(_components.p, {
      children: ["Before we can add a new claim to a user object (the one you can access via ", createVNode(_components.code, {
        children: "HttpContext.User"
      }), ") we need a place to store that additional info somewhere.\r\nHere I am going to describe how to get this done for a new ASP.NET Core project built by a default template."]
    }), "\n", createVNode(_components.p, {
      children: "If already you work with your real-world application - you most probably already did similar changes before.\r\nIn this case, you can skip this section and move right to the step #1."
    }), "\n", createVNode(_components.h3, {
      id: "01-new-applicationuser-class",
      children: "0.1 New ApplicationUser class"
    }), "\n", createVNode(_components.p, {
      children: ["Add a new  ", createVNode(_components.code, {
        children: "ApplicationUser"
      }), " class with `ContactName\u2019 property:"]
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
            "data-code": "public class ApplicationUser : IdentityUser\x7F{\x7F    public string ContactName { get; set; }\x7F}",
            children: createVNode(_components.div, {})
          })
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Of course, you can add more properties to store some additional information with the user account.\r\nFor example: ", createVNode(_components.code, {
        children: "FirstName"
      }), ", ", createVNode(_components.code, {
        children: "LastName"
      }), ", ", createVNode(_components.code, {
        children: "Country"
      }), ", ", createVNode(_components.code, {
        children: "Address"
      }), ", etc. All of them can be placed to claims the same way as ", createVNode(_components.code, {
        children: "ContactName"
      }), " we discuss here."]
    }), "\n", createVNode(_components.h3, {
      id: "02-replace-identityuser-with-applicationuser",
      children: ["0.2 Replace ", createVNode(_components.code, {
        children: "IdentityUser"
      }), " with ", createVNode(_components.code, {
        children: "ApplicationUser"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Now you need to replace ", createVNode(_components.code, {
        children: "IdentityUser"
      }), " with ", createVNode(_components.code, {
        children: "ApplicationUser"
      }), " everywhere in your project."]
    }), "\n", createVNode(_components.p, {
      children: ["The default ASP.NET Core template uses predefined ", createVNode(_components.code, {
        children: "IdentityUser"
      }), " type everywhere.\r\nSince we what to use ", createVNode(_components.code, {
        children: "ApplicationUser"
      }), " instead of it - we need to search for all inclusions of ", createVNode(_components.code, {
        children: "IdentityUser"
      }), " in your project and replace with ", createVNode(_components.code, {
        children: "ApplicationUser"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["It will include your DbContext class, one line in ", createVNode(_components.code, {
        children: "Startup"
      }), " class (in ", createVNode(_components.code, {
        children: "ConfigureServices"
      }), " method) and two lines with ", createVNode(_components.code, {
        children: "@inject"
      }), " directives in ", createVNode(_components.code, {
        children: "_LoginPartial.cshtml"
      }), " view."]
    }), "\n", createVNode(_components.p, {
      children: ["Here is how your new ", createVNode(_components.code, {
        children: "ApplicationDbContext"
      }), " class will look like after that:"]
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
                children: "ApplicationDbContext"
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
                children: "IdentityDbContext"
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
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "string"
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
                children: "ApplicationDbContext"
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
                children: "DbContextOptions"
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
                children: "> "
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
                children: "(options)"
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
            "data-code": "public class ApplicationDbContext : IdentityDbContext<ApplicationUser, IdentityRole, string>\x7F{\x7F    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)\x7F        : base(options)\x7F    {\x7F    }\x7F}",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "03-update-your-database",
      children: "0.3. Update your database."
    }), "\n", createVNode(_components.p, {
      children: "Now you need to add a new migration and then update your DB.\r\nJust run the following 2 commands from your project\u2019s folder:"
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
            children: [createVNode(_components.div, {
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
                children: "AddUserContactName"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: "\n"
            }), createVNode(_components.div, {
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
            })]
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": "dotnet ef migrations add AddUserContactName\x7F\x7Fdotnet ef database update",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "04-update-user-profile-page",
      children: "0.4. Update \u201CUser Profile\u201D page"
    }), "\n", createVNode(_components.p, {
      children: "Finally, we will need to add our new field to the \u201CUser Profile\u201D page to make it possible for users to modify it."
    }), "\n", createVNode(_components.p, {
      children: ["The default ASP.NET Core template uses all identity-related pages directly from a special Razor UI library (", createVNode(_components.code, {
        children: "Microsoft.AspNetCore.Identity.UI"
      }), ").\r\nThe good news is: we can override any of those pages if we want. Here are the steps we need to do:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Right-click on your project in VS and select Add | New Scaffolding item."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["In the \u201CAdd Scaffold\u201D dialog select ", createVNode(_components.code, {
            children: "Identity"
          }), " on the left side tree and then ", createVNode(_components.code, {
            children: "Identity"
          }), " in the main list and click \u201CAdd\u201D."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["In the dialog that appears select only ", createVNode(_components.code, {
            children: "Account\\Manage\\Index"
          }), " page and then click on \u201CAdd\u201D as well.\r\nWhen the process is finished you will find a new page \u2018Index.cshtml\u2019 in ", createVNode(_components.code, {
            children: "Areas/Identity/Pages"
          }), " folder."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["After that make the following changes to that ", createVNode(_components.code, {
            children: "Index"
          }), " page:"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["In the Index.cshtml itself add the following piece of markup right before ", createVNode(_components.code, {
        children: "update-profile-button"
      }), " button."]
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
                children: "Input.ContactName"
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
                children: "Input.ContactName"
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
                children: "Input.ContactName"
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
            "data-code": '<div class="form-group">\x7F    <label asp-for="Input.ContactName"></label>\x7F    <input asp-for="Input.ContactName" class="form-control" />\x7F    <span asp-validation-for="Input.ContactName" class="text-danger"></span>\x7F</div>',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Then, in the code-behind file ", createVNode(_components.code, {
        children: "Index.cshtml.cs"
      }), " we need to modify the view model:"]
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
                children: "InputModel"
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
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    .   .   .   .   .   ."
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
            "data-code": "public class InputModel\x7F{\x7F    .   .   .   .   .   .\x7F\x7F    public string ContactName { get; set; }\x7F}",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["then the ", createVNode(_components.code, {
        children: "OnGetAsync"
      }), " method:"]
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
                children: "IActionResult"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "> "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "OnGetAsync"
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
                children: "{"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    .   .   .   .   .   ."
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
                children: "    Input "
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
                children: "InputModel"
              })]
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
                children: "    Email "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " email,"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    PhoneNumber "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " phoneNumber,"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    ContactName "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " user.ContactName "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#96A1C2"
                },
                children: "//add this line"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  };"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: "\n"
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    .   .   .   .   .   ."
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: "\n"
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
            "data-code": "public async Task<IActionResult> OnGetAsync()\x7F{\x7F    .   .   .   .   .   .\x7F\x7F    Input = new InputModel\x7F  {\x7F    Email = email,\x7F    PhoneNumber = phoneNumber,\x7F    ContactName = user.ContactName //add this line\x7F  };\x7F\x7F    .   .   .   .   .   .\x7F\x7F}",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["and the ", createVNode(_components.code, {
        children: "OnPutAsync"
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
                children: "IActionResult"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "> "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "OnPostAsync"
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
                children: "{"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    .    .    .    .    .    .    ."
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
                children: "  "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "if"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " (Input.ContactName "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "!="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " user.ContactName) {"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    user.ContactName "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " Input.ContactName;"
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
                children: "await"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " _userManager."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "UpdateAsync"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(user);"
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
                children: "await"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " _signInManager."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "RefreshSignInAsync"
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
                children: "  StatusMessage "
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
                children: "Your profile has been updated"
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
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "  "
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
                  "--0": "#50FA7B"
                },
                children: "RedirectToPage"
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
                children: "}"
              })
            })]
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": 'public async Task<IActionResult> OnPostAsync()\x7F{\x7F    .    .    .    .    .    .    .\x7F\x7F  if (Input.ContactName != user.ContactName) {\x7F    user.ContactName = Input.ContactName;\x7F    await _userManager.UpdateAsync(user);\x7F  }\x7F\x7F  await _signInManager.RefreshSignInAsync(user);\x7F  StatusMessage = "Your profile has been updated";\x7F  return RedirectToPage();\x7F}',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "So, after all the changes described above your User Profile page after that registration will look like this:"
    }), "\n", createVNode($$Image, {
      src: claim02Image,
      alt: "User Profile form with ContactName field"
    }), "\n", createVNode(_components.p, {
      children: "Now, all the preparations are finished we can return back to our main task."
    }), "\n", createVNode(_components.h2, {
      id: "step-1-adding-the-contact-name-to-the-claims",
      children: "Step 1: Adding the contact name to the claims"
    }), "\n", createVNode(_components.p, {
      children: "A funny thing: the main task is much easier than all the preparations we made before. :)"
    }), "\n", createVNode(_components.p, {
      children: "There are only two simple steps:"
    }), "\n", createVNode(_components.h3, {
      id: "create-your-own-claims-principal-factory",
      children: "Create your own \u201Cclaims principal\u201D factory"
    }), "\n", createVNode(_components.p, {
      children: ["We need an implementation ", createVNode(_components.code, {
        children: "IUserClaimsPrincipalFactory"
      }), " which will add necessary information (", createVNode(_components.code, {
        children: "ContactName"
      }), " in our case) to the user claims.\r\nThe simplest way to do it - is to derive our new class from the default implementation of ", createVNode(_components.code, {
        children: "IUserClaimsPrincipalFactory"
      }), " and override one method: ", createVNode(_components.code, {
        children: "GenerateClaimsAsync"
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
                children: "(userManager, optionsAccessor)"
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
                children: ")"
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
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F1FA8C"
                },
                children: "[Click to edit profile]"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
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
            "data-code": 'public class MyUserClaimsPrincipalFactory : UserClaimsPrincipalFactory<ApplicationUser>\x7F{\x7F    public MyUserClaimsPrincipalFactory(\x7F        UserManager<ApplicationUser> userManager,\x7F        IOptions<IdentityOptions> optionsAccessor)\x7F        : base(userManager, optionsAccessor)\x7F    {\x7F    }\x7F\x7F    protected override async Task<ClaimsIdentity> GenerateClaimsAsync(ApplicationUser user)\x7F    {\x7F        var identity = await base.GenerateClaimsAsync(user);\x7F        identity.AddClaim(new Claim("ContactName", user.ContactName ?? "[Click to edit profile]"));\x7F        return identity;\x7F    }\x7F}',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "register-new-class-in-di-container",
      children: "Register new class in DI container"
    }), "\n", createVNode(_components.p, {
      children: ["Then we need to register our new class in the dependency injection container.\r\nThe best way for that - to use ", createVNode(_components.code, {
        children: "AddClaimsPrincipalFactory"
      }), " extension method:"]
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
                children: ")"
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
                children: "AddDefaultIdentity"
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
                children: "AddDefaultUI"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(UIFramework.Bootstrap4)"
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
                children: "AddClaimsPrincipalFactory"
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
                children: "MyUserClaimsPrincipalFactory"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ">();  "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#96A1C2"
                },
                children: "//<---- add this line"
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
            "data-code": "public void ConfigureServices(IServiceCollection services)\x7F{\x7F    .     .     .     .      .\x7F    services.AddDefaultIdentity<ApplicationUser>()\x7F        .AddDefaultUI(UIFramework.Bootstrap4)\x7F        .AddEntityFrameworkStores<ApplicationDbContext>()\x7F        .AddClaimsPrincipalFactory<MyUserClaimsPrincipalFactory>();  //<---- add this line\x7F}",
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "step-2-accessing-new-claim-from-the-views",
      children: "Step 2: Accessing new claim from the views"
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
      }), " property of that claim."]
    }), "\n", createVNode(_components.p, {
      children: ["So, we just need to open ", createVNode(_components.code, {
        children: "_LoginPartical.cshtml"
      }), " file in ", createVNode(_components.code, {
        children: "Pages/Shared/"
      }), " (or ", createVNode(_components.code, {
        children: "Views/Shared/"
      }), ") folder and replace the following line:"]
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
                children: ">Hello @User.Identity.Name!</"
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
            "data-code": "<a asp-area=\"\" asp-controller=\"Manage\" asp-action=\"Index\" title=\"Manage\">Hello @User.Identity.Name!</a>",
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
      children: ["Now, instead of something like ", createVNode(_components.code, {
        children: "Hello john.doe@yourcompany.com"
      }), " at the top of your web-page you should see something like this:"]
    }), "\n", createVNode($$Image, {
      src: claim03Image,
      alt: "ASP.NET Core - showing user's contact name instead of email"
    }), "\n", createVNode(_components.p, {
      children: "That\u2019s all for now. Enjoy!"
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
const url = "src/content/blog/2019-05-07-add-extra-user-claims-aspnet-core-webapp.mdx";
const file = "D:/Projects/sites/korzh.com/src/content/blog/2019-05-07-add-extra-user-claims-aspnet-core-webapp.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Projects/sites/korzh.com/src/content/blog/2019-05-07-add-extra-user-claims-aspnet-core-webapp.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
