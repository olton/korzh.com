import { _ as __astro_tag_component__, F as Fragment, t as createVNode } from './astro_D2KdCmZW.mjs';
import { $ as $$Image } from './pages/404_BbxC-4jy.mjs';
import 'clsx';

const frontmatter = {
  "title": "ASP.NET Identity - Migrating users' passwords from ASP.NET Membership",
  "tags": ["ASP-NET-CORE", "ASP-NET-IDENTITY", "ASP-NET_MEMBERSHIP"],
  "slug": "aspnet-identity-migrate-membership-passwords",
  "date": "2018-02-22T00:00:00.000Z",
  "cover": {
    "src": "/images/user-data-migrate.png"
  },
  "sort": 4,
  "description": "This task usually appears when you need to transfer your old MVC web application to ASP.NET Core. If you use MVC version 3 or 4 and your application provides a user authentication service, then most likely this part is done with the old ASP.NET Membership library",
  "relatedPosts": ["aspnet-identity-store-user-data-in-claims", "aspnet-identity-weakening-password-policies", "aspnet-identity-master-password"],
  "category": "Identity",
  "time": "2 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "problem",
    "text": "Problem"
  }, {
    "depth": 2,
    "slug": "solution",
    "text": "Solution"
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
    link: "link",
    p: "p",
    pre: "pre",
    script: "script",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["This is a third part of the series of articles about some not-so-well-known features and tricks in ASP.NET Identity.\r\nHere are you can find the ", createVNode(_components.a, {
        href: "add-extra-user-claims-aspnet-core-webapp",
        children: "first"
      }), " and the ", createVNode(_components.a, {
        href: "aspnet-identity-weakening-password-policies",
        children: "second"
      }), " parts."]
    }), "\n", createVNode(_components.h2, {
      id: "problem",
      children: "Problem"
    }), "\n", createVNode(_components.p, {
      children: "This task usually appears when you need to transfer your old MVC web application to ASP.NET Core. If you use MVC version 3 or 4 and your application provides a user authentication service, then most likely this part is done with the old ASP.NET Membership library."
    }), "\n", createVNode(_components.p, {
      children: "So, imagine you have a bunch of users, each of them has some password and the hash of that password stored in some database. Now you need to transfer all your current users to the new system built with ASP.NET Core.\r\nOf course, it\u2019s not a big problem to transfer their names, addresses, and other information. The problem is in those password hashes. ASP.NET Core Identity uses another hashing algorithm so all current users will not be able to access the system with their old passwords - the hashes will not match."
    }), "\n", createVNode(_components.h2, {
      id: "solution",
      children: "Solution"
    }), "\n", createVNode(_components.p, {
      children: "The solution is rather simple: we need to rewrite the default hashing service in ASP.NET Core Identity and make it \u201Cunderstand\u201D both the old and new hashes."
    }), "\n", createVNode(_components.p, {
      children: ["Here is our class which implements ", createVNode(_components.code, {
        children: "IPassowrdHasher"
      }), " interface:"]
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
                children: "PasswordHasherWithOldMembershipSupport"
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
                children: "IPasswordHasher"
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
              children: createVNode(_components.span, {
                style: {
                  "--0": "#96A1C2"
                },
                children: "  //an instance of the default password hasher"
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
                  "--0": "#8BE9FD",
                  "--0fs": "italic"
                },
                children: "IPasswordHasher"
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
                children: "> _identityPasswordHasher "
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
                children: "PasswordHasher"
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
                children: ">();"
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
                children: "  //Hashes the password using old algorithm from the days of ASP.NET Membership"
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
                  "--0": "#FF79C6"
                },
                children: "internal"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "static"
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
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "HashPasswordInOldFormat"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "string"
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
                children: "password"
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
                  "--0": "#FF79C6"
                },
                children: "var"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " sha1 "
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
                children: "SHA1CryptoServiceProvider"
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
                children: "var"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " data "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " Encoding.ASCII."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "GetBytes"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(password);"
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
                children: "var"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " sha1data "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " sha1."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "ComputeHash"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(data);"
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
                children: "return"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " Convert."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "ToBase64String"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(sha1data);"
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
              children: createVNode(_components.span, {
                style: {
                  "--0": "#96A1C2"
                },
                children: "  //the passwords of the new users will be hashed with new algorithm"
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
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "HashPassword"
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
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FFB86C",
                  "--0fs": "italic"
                },
                children: "password"
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
                children: "    "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "return"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " _identityPasswordHasher."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "HashPassword"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(user, password);"
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
                children: "public"
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
                children: "PasswordVerificationResult"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "VerifyHashedPassword"
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
                  "--0": "#FF79C6"
                },
                children: "string"
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
                children: "hashedPassword"
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
                children: " "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FFB86C",
                  "--0fs": "italic"
                },
                children: "providedPassword"
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
                  "--0": "#FF79C6"
                },
                children: "string"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " pwdHash2 "
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
                children: "HashPasswordInOldFormat"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(providedPassword);"
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
                children: " (hashedPassword "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "=="
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " pwdHash2) {"
              })]
            }), createVNode(_components.div, {
              class: "ec-line",
              children: createVNode(_components.span, {
                style: {
                  "--0": "#96A1C2"
                },
                children: "      //first we check the hashed password with \"old\" hash"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "      "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "return"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " PasswordVerificationResult.Success;"
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
              children: createVNode(_components.span, {
                style: {
                  "--0": "#96A1C2"
                },
                children: "      //if old hash doesn't work - use the default approach"
              })
            }), createVNode(_components.div, {
              class: "ec-line",
              children: [createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "      "
              }), createVNode(_components.span, {
                style: {
                  "--0": "#FF79C6"
                },
                children: "return"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: " _identityPasswordHasher."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "VerifyHashedPassword"
              }), createVNode(_components.span, {
                style: {
                  "--0": "#F8F8F2"
                },
                children: "(user, hashedPassword, providedPassword);"
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
            "data-code": `public class PasswordHasherWithOldMembershipSupport : IPasswordHasher<ApplicationUser>\x7F{\x7F  //an instance of the default password hasher\x7F  IPasswordHasher<ApplicationUser> _identityPasswordHasher = new PasswordHasher<ApplicationUser>();\x7F\x7F  //Hashes the password using old algorithm from the days of ASP.NET Membership\x7F  internal static string HashPasswordInOldFormat(string password)\x7F  {\x7F    var sha1 = new SHA1CryptoServiceProvider();\x7F    var data = Encoding.ASCII.GetBytes(password);\x7F    var sha1data = sha1.ComputeHash(data);\x7F    return Convert.ToBase64String(sha1data);\x7F  }\x7F\x7F  //the passwords of the new users will be hashed with new algorithm\x7F  public string HashPassword(ApplicationUser user, string password) {\x7F    return _identityPasswordHasher.HashPassword(user, password);\x7F  }\x7F\x7F  public PasswordVerificationResult VerifyHashedPassword(ApplicationUser user,\x7F        string hashedPassword, string providedPassword)\x7F  {\x7F    string pwdHash2 = HashPasswordInOldFormat(providedPassword);\x7F\x7F\x7F    if (hashedPassword == pwdHash2) {\x7F      //first we check the hashed password with "old" hash\x7F      return PasswordVerificationResult.Success;\x7F    }\x7F    else {\x7F      //if old hash doesn't work - use the default approach\x7F      return _identityPasswordHasher.VerifyHashedPassword(user, hashedPassword, providedPassword);\x7F    }\x7F  }\x7F}`,
            children: createVNode(_components.div, {})
          })
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["After that we just need to register our new ", createVNode(_components.code, {
        children: "IPasswordHasher"
      }), " implementation in the DI container:"]
    }), "\n", createVNode(_components.div, {
      class: "expressive-code",
      children: createVNode(_components.figure, {
        class: "frame has-title",
        children: [createVNode(_components.figcaption, {
          class: "header",
          children: createVNode(_components.span, {
            class: "title",
            children: "Startup.cs"
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
                children: ".   .   .   .   .   ."
              })
            }), createVNode(_components.div, {
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
                children: "    services."
              }), createVNode(_components.span, {
                style: {
                  "--0": "#50FA7B"
                },
                children: "AddSingleton"
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
                children: "IPasswordHasher"
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
                children: "PasswordHasherWithOldMembershipSupport"
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
                children: "}"
              })
            })]
          })
        }), createVNode(_components.div, {
          class: "copy",
          children: createVNode(_components.button, {
            title: "Copy to clipboard",
            "data-copied": "Copied!",
            "data-code": ".   .   .   .   .   .\x7Fpublic void ConfigureServices(IServiceCollection services)\x7F{\x7F    .   .   .   .   .   .\x7F\x7F    services.AddSingleton<IPasswordHasher<ApplicationUser>, PasswordHasherWithOldMembershipSupport>();\x7F}",
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
const url = "src/content/blog/2018-02-22-aspnet-identity-migrate-membership-passwords.mdx";
const file = "D:/Projects/sites/korzh.com/src/content/blog/2018-02-22-aspnet-identity-migrate-membership-passwords.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Projects/sites/korzh.com/src/content/blog/2018-02-22-aspnet-identity-migrate-membership-passwords.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
