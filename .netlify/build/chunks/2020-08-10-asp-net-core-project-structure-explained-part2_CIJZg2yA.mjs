import { _ as __astro_tag_component__, F as Fragment, t as createVNode } from './astro_D2KdCmZW.mjs';
import { $ as $$Image } from './pages/404_BbxC-4jy.mjs';
import 'clsx';

const middlewareImage = new Proxy({"src":"/_astro/aspnetcore-middleware-pipeline.DOHqyL9F.png","width":600,"height":384,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "ASP.NET Core default project structure explained (part 2)",
  "tags": ["ASP-NET-CORE", "PROJECT-TEMPLATE"],
  "slug": "asp-net-core-project-structure-explained-part2",
  "date": "2020-08-10T00:00:00.000Z",
  "cover": {
    "src": "/images/computer-coffee-02.jpg"
  },
  "sort": 5,
  "description": "As we already mentioned in the first article, the Startup class is the entry point for all initialization codes in your application. Long story short, the Startup defines what your application will do and how exactly it will work",
  "relatedPosts": ["asp-net-core-default-project-structure-explained-part-1"],
  "time": "10 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "startup-class",
    "text": "Startup class"
  }, {
    "depth": 3,
    "slug": "startup-class-constructor",
    "text": "Startup class constructor"
  }, {
    "depth": 3,
    "slug": "configureservices-method",
    "text": "ConfigureServices method"
  }, {
    "depth": 4,
    "slug": "adddbcontext",
    "text": "AddDbContext"
  }, {
    "depth": 5,
    "slug": "a-few-words-about-the-builder-pattern",
    "text": "A few words about the \u201CBuilder\u201D pattern"
  }, {
    "depth": 4,
    "slug": "adddefaultidentity",
    "text": "AddDefaultIdentity"
  }, {
    "depth": 3,
    "slug": "addrazorpages",
    "text": "AddRazorPages"
  }, {
    "depth": 2,
    "slug": "configure-method",
    "text": "Configure method"
  }, {
    "depth": 4,
    "slug": "exception-handling-and-security-transport",
    "text": "Exception handling and security transport"
  }, {
    "depth": 4,
    "slug": "processing-static-files-usestaticfiles",
    "text": "Processing static files (UseStaticFiles)"
  }, {
    "depth": 4,
    "slug": "routing-userouting-and-useendpoints",
    "text": "Routing (UseRouting and UseEndpoints)"
  }, {
    "depth": 4,
    "slug": "authenticationauthorization-useauthentication-useauthorization",
    "text": "Authentication/Authorization (UseAuthentication, UseAuthorization)"
  }, {
    "depth": 2,
    "slug": "wrapping-up",
    "text": "Wrapping Up"
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
    h4: "h4",
    h5: "h5",
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
    children: [createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["This is the second part of the ", createVNode(_components.a, {
          href: "asp-net-core-default-project-structure-explained-part-1",
          children: "article"
        }), ", where we take apart the default ASP.NET Core solution template piece by piece and try to explain the purpose of each part and how exactly it works. You can consider it as a reference where you can check why a particular part was added to your project and find a link to the relevant documentation that explains it in detail."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "startup-class",
      children: "Startup class"
    }), "\n", createVNode(_components.p, {
      children: "As we already mentioned in the first article, the Startup class is the entry point for all initialization codes in your application. Long story short, the Startup defines what your application will do and how exactly it will work."
    }), "\n", createVNode(_components.p, {
      children: "By default, any Startup class in the ASP.NET Core application includes three main parts:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The constructor"
        }), " where you can define some internal variables, set up some configuration settings, or perform application-wide initializations. For example, we suggest our users set here their license keys for our EasyQuery library."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "ConfigureServices"
        }), " method. Here we register all necessary services in the DI (dependency injection) container and define the configuration settings for some of them. In case you are not aware of what Dependency Injection is, here is an article on our blog that explains this concept in simple words."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Configure"
        }), " method. This is the stage when you set up the middleware pipeline for your project."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Both ", createVNode(_components.code, {
        children: "ConfigureServices"
      }), " and ", createVNode(_components.code, {
        children: "Configure"
      }), " methods are called automatically while the application starts. You just need to define the services and the middlewares there correspondingly."]
    }), "\n", createVNode(_components.p, {
      children: "Now, let\u2019s take a look at each of these sections more in detail."
    }), "\n", createVNode(_components.h3, {
      id: "startup-class-constructor",
      children: "Startup class constructor"
    }), "\n", createVNode(_components.p, {
      children: "The default ASP.NET Core project template contains only the following one line of code in the constructor:"
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
                  "--0": "#50FA7B"
                },
                children: "Startup"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(IConfiguration configuration)"
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
                children: "    Configuration "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " configuration;"
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
            "data-code": "public Startup(IConfiguration configuration)\x7F{\x7F    Configuration = configuration;\x7F}",
            children: createVNode(_components.div, {})
          })
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["It just saves in the class property the ", createVNode(_components.a, {
        href: "https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-3.1",
        children: "configuration object"
      }), "\r\npassed here by the DI container, so we can use it in other methods.\r\nIn the ", createVNode(_components.a, {
        href: "asp-net-core-default-project-structure-explained-part-1",
        children: "first article"
      }), ",\r\nwe have already considered the configuration mechanism used in ASP.NET Core applications."]
    }), "\n", createVNode(_components.h3, {
      id: "configureservices-method",
      children: "ConfigureServices method"
    }), "\n", createVNode(_components.p, {
      children: ["As it was mentioned before, the ", createVNode(_components.code, {
        children: "ConfigureServices"
      }), " method contains the function calls that register different application services in the DI container.\r\nThese can be authentication/authorization services, MVC or Razor Pages engine, the classes for working with DB, or any other possible services."]
    }), "\n", createVNode(_components.p, {
      children: ["The only parameter of the ", createVNode(_components.code, {
        children: "ConfigureServices"
      }), " method has ", createVNode(_components.code, {
        children: "IServiceCollection"
      }), " type that represents a list of ", createVNode(_components.code, {
        children: "ServiceDescriptor"
      }), " items.\r\nEach of those items maps some type (usually an interface) to a particular implementation of this type."]
    }), "\n", createVNode(_components.p, {
      children: ["According to the interface, we can use only usual ", createVNode(_components.code, {
        children: "IList"
      }), " or ", createVNode(_components.code, {
        children: "ICollection"
      }), " functions like ", createVNode(_components.code, {
        children: "Add"
      }), ", ", createVNode(_components.code, {
        children: "AddRange"
      }), ", ", createVNode(_components.code, {
        children: "Remove"
      }), ", and other methods.\r\nHowever, as you have already noticed, ", createVNode(_components.code, {
        children: "ConfigureServices"
      }), " contains such calls as ", createVNode(_components.code, {
        children: "services.AddDbContext"
      }), ", ", createVNode(_components.code, {
        children: "services.AddRazorPages"
      }), ", and similar.\r\nYou may ask, \u201CHow is it possible?\u201D The answer is ", createVNode(_components.strong, {
        children: "extension methods"
      }), ". Each sub-system used in our project (like Entity Framework Core or MVC engine) defines an extension method (sometimes even a few) for the ", createVNode(_components.code, {
        children: "IServiceCollection"
      }), " interface to simplify the registration in the DI and configuration of the services available in that sub-system."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "NB"
      }), ": Please note that the order of the services you register in the ", createVNode(_components.code, {
        children: "ConfigureServices"
      }), " method is not important.\r\nThis method is executed only once upon your application start."]
    }), "\n", createVNode(_components.p, {
      children: "So, let\u2019s take a closer look at the default ConfigureServices\u2019 content."
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
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    services."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "AddDbContext"
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
                children: ">("
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
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        options."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "UseSqlServer"
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
                children: "            Configuration."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "GetConnectionString"
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
                children: "DefaultConnection"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#E9F284"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ")));"
              })]
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
                children: "IdentityUser"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: ">("
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
                children: " options.SignIn.RequireConfirmedAccount "
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
                  "--0": "#BD93F9"
                },
                children: "true"
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
                children: ">();"
              })]
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
                children: "AddRazorPages"
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
            "data-code": 'public void ConfigureServices(IServiceCollection services)\x7F{\x7F    services.AddDbContext<ApplicationDbContext>(options =>\x7F        options.UseSqlServer(\x7F            Configuration.GetConnectionString("DefaultConnection")));\x7F    services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)\x7F        .AddEntityFrameworkStores<ApplicationDbContext>();\x7F    services.AddRazorPages();\x7F}',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["So, there are only three calls there: ", createVNode(_components.code, {
        children: "AddDbContext"
      }), ", ", createVNode(_components.code, {
        children: "AddDefaultIdentity"
      }), ", and ", createVNode(_components.code, {
        children: "AddRazorPages"
      }), ". Let\u2019s inspect each of them separately."]
    }), "\n", createVNode(_components.h4, {
      id: "adddbcontext",
      children: "AddDbContext"
    }), "\n", createVNode(_components.p, {
      children: ["This method is provided by the ", createVNode(_components.a, {
        href: "https://docs.microsoft.com/en-us/ef/core/",
        children: "Entity Framework Core"
      }), " framework. It registers and configures our database context. The ", createVNode(_components.code, {
        children: "Action"
      }), "delegate passed in the parameter allows us to define the parameters of this DbContext. For example, with ", createVNode(_components.code, {
        children: "UseSqlServer"
      }), " call, we tell our DbContext to use a particular type of connection (", createVNode(_components.code, {
        children: "SqlConnection"
      }), ") with a particular connection string. The connection string itself is taken from the configuration so it can be easily changed in Development or Production environments. You can find the default connection string in the ", createVNode(_components.code, {
        children: "appsettings.json"
      }), " configuration file, which we already analyzed in the ", createVNode(_components.a, {
        href: "https://korzh.com/blog/asp-net-core-project-structure-explained-part1",
        children: "first article"
      }), "."]
    }), "\n", createVNode(_components.h5, {
      id: "a-few-words-about-the-builder-pattern",
      children: "A few words about the \u201CBuilder\u201D pattern"
    }), "\n", createVNode(_components.p, {
      children: "You may have noticed an interesting way of passing settings for DbContext.\r\nInstead of sending an object with options, we use a procedure (Action) with one-parameter options of the DbContextOptionsBuilder type."
    }), "\n", createVNode(_components.p, {
      children: ["That\u2019s because, to construct the DbContext settings properly, Entity Framework Core uses the ", createVNode(_components.strong, {
        children: "Builder Pattern"
      }), ".\r\nThis pattern is helpful when you need to perform several steps to construct some complex objects and simply defining a class or structure is not enough. For example, when you need to call some methods depending on the settings in the configuration.\r\nAs it happens in our case with ", createVNode(_components.code, {
        children: "UseSqlServer()"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "There is one more reason why we use a delegate (function) instead of a plain object.\r\nThere may be a situation when you don\u2019t need that service (DbContext) at all.\r\nFor example, your web app has some actions that do not require database access.\r\nThe DbContext object will never be created for such requests, and so, we will not need to set its options.\r\nThe good thing about a delegate is that it can be called exactly when you need to construct the necessary object."
    }), "\n", createVNode(_components.p, {
      children: "I paid so much attention to this pattern because it is used quite often,\r\nespecially in the process of registering services in DI (and we will use that for the next function call as well)."
    }), "\n", createVNode(_components.h4, {
      id: "adddefaultidentity",
      children: "AddDefaultIdentity"
    }), "\n", createVNode(_components.p, {
      children: ["The second function call in the ConfigureServices was added here because of the Authentication option we turned on when creating our project.\r\nIt registers a bunch of services for authentication and authorization tasks such as ", createVNode(_components.code, {
        children: "IUserStore"
      }), ", ", createVNode(_components.code, {
        children: "IRoleStore"
      }), ", ", createVNode(_components.code, {
        children: "IPasswordHasher"
      }), ", ", createVNode(_components.code, {
        children: "UserManager"
      }), ", ", createVNode(_components.code, {
        children: "SignInManager"
      }), ", and many others.\r\nThe are all part of the ASP.NET Core Identity sub-system."]
    }), "\n", createVNode(_components.p, {
      children: "This method also uses the Builder Pattern, but in a slightly different way. Instead of passing the builder in the delegate\u2019s parameter, this function returns an IdentityBuilder object, so you can call other functions with simple chaining."
    }), "\n", createVNode(_components.p, {
      children: ["The only function called there is ", createVNode(_components.code, {
        children: "AddEntityFrameworkStores"
      }), ".\r\nIt tells ASP.NET Identity where to store all the entities required for auth tasks (users, roles, claims, etc.).\r\nAs the name of the method suggests, we will use our Entity Framework services for these tasks.\r\nThe type of parameter in this method (between ", createVNode(_components.code, {
        children: "< .. >"
      }), ") defines the ", createVNode(_components.code, {
        children: "DbContext"
      }), " class used to store all auth objects."]
    }), "\n", createVNode(_components.h3, {
      id: "addrazorpages",
      children: "AddRazorPages"
    }), "\n", createVNode(_components.p, {
      children: ["The last function call in the ", createVNode(_components.code, {
        children: "ConfigureServices"
      }), " adds the services necessary for Razor Pages engine.\r\nIt appears here because of the template we chose at the beginning.\r\nIf we had selected a template with Model-View-Controller approach at that point, we would have had something like ", createVNode(_components.code, {
        children: "services.AddMvc()"
      }), " here."]
    }), "\n", createVNode(_components.h2, {
      id: "configure-method",
      children: "Configure method"
    }), "\n", createVNode(_components.p, {
      children: "The last method in the Startup class defines the middleware pipeline of our ASP.NET Core program.\r\nIf you don\u2019t know what a middleware pipeline is, you might want to learn more about it because it determines how your web application handles HTTP requests."
    }), "\n", createVNode($$Image, {
      src: middlewareImage,
      alt: "ASP.NET Core middleware pipeline"
    }), "\n", createVNode(_components.p, {
      children: ["Unlike the services registered in ", createVNode(_components.code, {
        children: "ConfigureServices"
      }), " (remember, their order is not important), the order of middlewares defined in ", createVNode(_components.code, {
        children: "Configure"
      }), " has crucial significance. As you can see from the picture above, the first defined middleware is called for each request while every next one in the pipeline processes only those requests that were not processed by the middlewares defined before it."]
    }), "\n", createVNode(_components.p, {
      children: "So at the beginning of the pipeline, we need to place the middlewares that are necessary for auxiliary tasks (like logging or authentication) and that don\u2019t consume a lot of memory and processing time."
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s take a look at the default implementation of this method for the chosen project template:"
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
                children: "Configure"
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
                children: "IApplicationBuilder"
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
                children: "app"
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
                children: "IWebHostEnvironment"
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
                children: "env"
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
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "if"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " (env."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "IsDevelopment"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "()) {"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        app."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "UseDeveloperExceptionPage"
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
                children: "        app."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "UseDatabaseErrorPage"
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
                children: "    }"
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
                children: "else"
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
                children: "        app."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "UseExceptionHandler"
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
                children: "/Error"
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
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "        app."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "UseHsts"
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
                children: "    app."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "UseHttpsRedirection"
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
                children: "    app."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "UseStaticFiles"
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
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    app."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "UseRouting"
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
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "    app."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "UseAuthentication"
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
                children: "    app."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "UseAuthorization"
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
            "data-code": 'public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\x7F{\x7F    if (env.IsDevelopment()) {\x7F        app.UseDeveloperExceptionPage();\x7F        app.UseDatabaseErrorPage();\x7F    }\x7F    else {\x7F        app.UseExceptionHandler("/Error");\x7F        app.UseHsts();\x7F    }\x7F\x7F    app.UseHttpsRedirection();\x7F    app.UseStaticFiles();\x7F\x7F    app.UseRouting();\x7F\x7F    app.UseAuthentication();\x7F    app.UseAuthorization();\x7F\x7F    app.UseEndpoints(endpoints => {\x7F        endpoints.MapRazorPages();\x7F    });\x7F}',
            children: createVNode(_components.div, {})
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "So, let\u2019s go through the middlewares defined here one by one."
    }), "\n", createVNode(_components.h4, {
      id: "exception-handling-and-security-transport",
      children: "Exception handling and security transport"
    }), "\n", createVNode(_components.p, {
      children: "The first lines define different middlewares for Development and Production modes.\r\nIf we are in the Development mode, we define the middlewares that catch all exceptions in the pipeline\r\nand show a special page with extra information about the error (exception message, stack trace, etc.)."
    }), "\n", createVNode(_components.p, {
      children: "It\u2019s possible to do because (as you can see from the image above) the processing of the request is returned to the first middleware\r\nin the pipeline before being sent back to the client."
    }), "\n", createVNode(_components.p, {
      children: "In the Production mode, we also catch all exceptions and then re-execute the request with the specified path (\u2018/Error\u2019 in our case)."
    }), "\n", createVNode(_components.p, {
      children: ["The second call executed only in Production is ", createVNode(_components.code, {
        children: "UseHsts"
      }), ". It adds a middleware that implements HTTP Strict Transport Security Protocol."]
    }), "\n", createVNode(_components.p, {
      children: ["The next in the pipeline is HTTPS redirection middleware (", createVNode(_components.code, {
        children: "app.UseHttpsRedirection"
      }), ").\r\nThe name is self-explanatory. It just redirects all HTTP requests to HTTPS ones.\r\nThese two middlewares (", createVNode(_components.code, {
        children: "app.UseHsts"
      }), " and ", createVNode(_components.code, {
        children: "app.UseHttpsRedirection"
      }), " calls) are added because of the ", createVNode(_components.strong, {
        children: "Configure for HTTPS"
      }), " option we turned on (actually, it was turned on by default) during the project creation."]
    }), "\n", createVNode(_components.h4, {
      id: "processing-static-files-usestaticfiles",
      children: "Processing static files (UseStaticFiles)"
    }), "\n", createVNode(_components.p, {
      children: ["The next middleware (added by the ", createVNode(_components.code, {
        children: "app.UseStaticFiles()"
      }), " call) takes care of all static files.\r\nSimply put, if the application gets a request for some .js, .css, or an image file (.png, .jpg, etc.),\r\nthis middleware looks for a file with the requested name inside ", createVNode(_components.code, {
        children: "wwwroot"
      }), " folder and returns it in response (if the file was found).\r\nIf not, it sends back a response with a 404 status code (\u201Cnot found\u201D)."]
    }), "\n", createVNode(_components.p, {
      children: ["There are overloads of ", createVNode(_components.code, {
        children: "UseStaticFiles"
      }), " that allow us to define another root folder for static files and set some other options."]
    }), "\n", createVNode(_components.h4, {
      id: "routing-userouting-and-useendpoints",
      children: "Routing (UseRouting and UseEndpoints)"
    }), "\n", createVNode(_components.p, {
      children: "The next pair of middlewares are, maybe, the most important ones in the pipeline, since they define the routing for all other endpoints in your web app."
    }), "\n", createVNode(_components.p, {
      children: "In simple words, they match a particular request to a particular endpoint, a piece of executable code that handles the request."
    }), "\n", createVNode(_components.p, {
      children: "So, how exactly does it work?"
    }), "\n", createVNode(_components.p, {
      children: ["In the ", createVNode(_components.code, {
        children: "Configure"
      }), " method, we call ", createVNode(_components.code, {
        children: "app.UseRouting()"
      }), " to add ", createVNode(_components.code, {
        children: "EndpointRoutingMiddleware"
      }), " to our pipeline."]
    }), "\n", createVNode(_components.p, {
      children: ["After that, we call ", createVNode(_components.code, {
        children: "app.UseEndpoints()"
      }), " to add ", createVNode(_components.code, {
        children: "EndpointMiddleware"
      }), " to the pipeline and define the endpoints. Each endpoint is an object that contains (as mentioned above) a delegate (so, a piece of code) that actually handles the request, plus some metadata (like an authorization policy)."]
    }), "\n", createVNode(_components.p, {
      children: ["We can use such extension methods as ", createVNode(_components.code, {
        children: "MapGet"
      }), ", ", createVNode(_components.code, {
        children: "MapPost"
      }), ", and others to add an endpoint that matches a particular request path or a path template. For example, the following pattern ", createVNode(_components.code, {
        children: "/something/{path*}"
      }), ", will be matched for all requests started with ", createVNode(_components.code, {
        children: "/something/"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Additionally, other services can define their own extension functions that are used to create necessary endpoints. For example, you can use the ", createVNode(_components.code, {
        children: "MapRazorPages"
      }), " function for Razor Pages or ", createVNode(_components.code, {
        children: "MapHub"
      }), " for SingleR. In our ", createVNode(_components.a, {
        href: "https://github.com/KorzhCom/EasyData",
        children: "EasyData library"
      }), " we defined ", createVNode(_components.code, {
        children: "MapEasyData"
      }), " function that adds an endpoint for the API that processes all CRUD operations."]
    }), "\n", createVNode(_components.p, {
      children: ["When our web app gets a new request (and it\u2019s not processed by any middleware defined before ", createVNode(_components.code, {
        children: "UseRouting"
      }), "), the ", createVNode(_components.code, {
        children: "EndpointRoutingMiddleware"
      }), " matches it to some endpoint. So, one endpoint among all defined at the application start is becoming selected at that moment."]
    }), "\n", createVNode(_components.p, {
      children: ["Then ", createVNode(_components.code, {
        children: "EndpointMiddleware"
      }), " actually calls the endpoint\u2019s delegate to handle the request.\r\nOther middlewares that are added after ", createVNode(_components.code, {
        children: "app.UseRouting()"
      }), " but before ", createVNode(_components.code, {
        children: "app.UseEnpoints()"
      }), " can see which endpoint is selected\r\nand can change something (e.g., to apply an authorization policy) before ", createVNode(_components.code, {
        children: "EndpointMiddleware"
      }), " dispatches to the selected endpoint."]
    }), "\n", createVNode(_components.h4, {
      id: "authenticationauthorization-useauthentication-useauthorization",
      children: "Authentication/Authorization (UseAuthentication, UseAuthorization)"
    }), "\n", createVNode(_components.p, {
      children: ["These two middlewares are added in the ", createVNode(_components.code, {
        children: "Configure"
      }), " because of the Authentication option we turned on when we created our project.\r\nAs already mentioned above, they already know which endpoint is selected and so can add some additional identity-related information to the request\u2019s context (like filling its ", createVNode(_components.code, {
        children: "User"
      }), " property) or redirect to the \u201Csign-in/sign up\u201D pages if the current request is anonymous but the selected endpoint requires authorization."]
    }), "\n", createVNode(_components.h2, {
      id: "wrapping-up",
      children: "Wrapping Up"
    }), "\n", createVNode(_components.p, {
      children: "So, in this article, I tried to cover all pieces of one of the most-used ASP.NET Core application templates and figure out why they are used and how they work (from a very general point of view)."
    }), "\n", createVNode(_components.p, {
      children: "I hope this information will help you better understand the internal mechanism of the ASP.NET Core framework and make your code more clear and efficient."
    }), "\n", createVNode(_components.p, {
      children: "Thanks for the reading, and take care!"
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
const url = "src/content/blog/2020-08-10-asp-net-core-project-structure-explained-part2.mdx";
const file = "D:/Projects/sites/korzh.com/src/content/blog/2020-08-10-asp-net-core-project-structure-explained-part2.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Projects/sites/korzh.com/src/content/blog/2020-08-10-asp-net-core-project-structure-explained-part2.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
