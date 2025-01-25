import { _ as __astro_tag_component__, F as Fragment, t as createVNode } from './astro_D2KdCmZW.mjs';
import { $ as $$Image } from './pages/404_BbxC-4jy.mjs';
import 'clsx';

const menuImage = new Proxy({"src":"/_astro/di-interfaces-as-menu.D-KWi8QR.png","width":1200,"height":675,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const schemaImage = new Proxy({"src":"/_astro/dependency-injection-schema.DsEZJCa-.png","width":821,"height":391,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Dependency Injection Put Simply",
  "tags": ["PROGRAMMING", "DEPENDENCY-INJECTION"],
  "slug": "dependency-injection-explanation-in-simple-words",
  "date": "2020-01-08T00:00:00.000Z",
  "cover": {
    "src": "/images/food-app.png"
  },
  "sort": 5,
  "description": "The concept of Dependency Injection can look over complicated especially for beginners. Here, I have tried to explain it by using a very simple example from the real world: a food delivery app on your mobile phone",
  "time": "5 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "menu-interfaces",
    "text": "Menu (interfaces)"
  }, {
    "depth": 2,
    "slug": "actual-snacks-implementations",
    "text": "Actual snacks (implementations)"
  }, {
    "depth": 2,
    "slug": "delivery-injection",
    "text": "Delivery (injection)"
  }, {
    "depth": 2,
    "slug": "providers",
    "text": "Providers"
  }, {
    "depth": 2,
    "slug": "wrapping-up",
    "text": "Wrapping up"
  }, {
    "depth": 2,
    "slug": "conclusions",
    "text": "Conclusions"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "The concept of Dependency Injection can look over complicated especially for beginners. Here, I have tried to explain it by using a very simple example from the real world: a food delivery app on your mobile phone."
    }), "\n", createVNode(_components.p, {
      children: "So, imagine you open such an app on your smartphone. Let\u2019s see what we have here:"
    }), "\n", createVNode(_components.h2, {
      id: "menu-interfaces",
      children: "Menu (interfaces)"
    }), "\n", createVNode($$Image, {
      src: menuImage,
      alt: "DI concepts: intefaces are like items in a cafe menu"
    }), "\n", createVNode(_components.p, {
      children: ["Photo by ", createVNode("a", {
        href: "https://unsplash.com/@elizagalevi23?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        children: "Levi Elizaga"
      }), " on ", createVNode("a", {
        href: "https://unsplash.com/s/photos/menu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        children: "Unsplash"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Obviously, this app has a menu with a description of each item available there. To make it more similar to the Dependency Injection (DI) container let\u2019s suppose all items on the menu are more or less generic. So, you have such options as a burger, chips, green salad, a soda drink, coffee, etc. However, you don\u2019t know what meat is used for that burger, how exactly those chips are cooked, and what is the exact soda drink you will get.\r\nThese menu items are your ", createVNode(_components.strong, {
        children: "interfaces"
      }), ". They describe the main characteristics of each snack but don\u2019t bother you with the exact implementation."]
    }), "\n", createVNode(_components.h2, {
      id: "actual-snacks-implementations",
      children: "Actual snacks (implementations)"
    }), "\n", createVNode(_components.p, {
      children: ["Then, you have the actual snacks which are delivered to you when you place an order. These are the ", createVNode(_components.strong, {
        children: "implementations"
      }), " of your interfaces.\r\nObviously, the implementations can differ depending on which particular restaurant they are delivered from."]
    }), "\n", createVNode(_components.h2, {
      id: "delivery-injection",
      children: "Delivery (injection)"
    }), "\n", createVNode(_components.p, {
      children: ["Now, let\u2019s suppose that your app, in some magical way, has a zero-time delivery function (OK, almost zero-time).\r\nSo, at whatever place you are now (whatever part of your project), you select the items you need, press the \u201COrder\u201D button, and the chosen snacks instantly appear in your hands.\r\nWe can say that they are ", createVNode(_components.strong, {
        children: "injected"
      }), " to the place where you are now :)\r\nMoreover, if a snack (like breakfast or combo-meal) depends on other snacks, those dependant snacks are created automatically and also \u201Cinjected\u201D into your combo-meal.\r\nFor example, a Big Mac Combo Meal includes a BigMac burger, some fries, and a drink. You don\u2019t need to order them separately. They will all be created and delivered to you automatically."]
    }), "\n", createVNode(_components.h2, {
      id: "providers",
      children: "Providers"
    }), "\n", createVNode(_components.p, {
      children: "Now let\u2019s suppose you can choose which restaurant will deliver your snacks.\r\nYou can choose either it will be a McDonald\u2019s or Burger King or your favorite cafe nearby."
    }), "\n", createVNode(_components.p, {
      children: "Moreover, you can also choose the type of food (with meat, fish only, vegetarian, kosher, etc).\r\nSo, now you can still order a burger but if you selected \u201Cvegetarian\u201D,\r\nour magical app will deliver to you a burger with soy meat or a burger made from that cultured meat popular nowadays."
    }), "\n", createVNode(_components.p, {
      children: "The main point here is this: with this app, you can easily change the actual provider (so, the implementation)\r\nof your snacks without changing the simplicity and convenience of the whole process."
    }), "\n", createVNode(_components.h2, {
      id: "wrapping-up",
      children: "Wrapping up"
    }), "\n", createVNode($$Image, {
      src: schemaImage,
      alt: "Dependency Injection Schema"
    }), "\n", createVNode(_components.p, {
      children: ["Your food delivery app here is a ", createVNode(_components.strong, {
        children: "Dependency Injection (DI) Container"
      }), ". The menu items are ", createVNode(_components.strong, {
        children: "interfaces"
      }), " of the services you might need somewhere in your project.\r\nThe actual snacks are the ", createVNode(_components.strong, {
        children: "implementations"
      }), " (actual classes that implement those services).\r\nWhen you need your some snacks (", createVNode(_components.strong, {
        children: "services"
      }), ") you tell your app (", createVNode(_components.strong, {
        children: "DI container"
      }), ") what you need and they are delivered (", createVNode(_components.strong, {
        children: "injected"
      }), " in the place you are now) to you immediately."]
    }), "\n", createVNode(_components.p, {
      children: "You may ask, why DI does matter? What is so special about this concept that has made it so popular?"
    }), "\n", createVNode(_components.p, {
      children: "As you can see from this real-word example, dependency injection has a lot of benefits.\r\nLet\u2019s list the most important ones (again, with a real-world example for each of them):"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Simplicity"
          }), "\r\nWith DI, you don\u2019t need to write a lot of code just to create an object of a particular class.\r\nEspecially when this object requires several other objects for its work (like a combo-meal in our example).\r\nYou just \u201Ctell\u201D your DI container (your food delivery app) what you need and it\u2019s delivered to you right away."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Maintainability"
          }), "\r\nn terms of code, your classes become loosely coupled (each of the classes is less dependent on the concrete implementations of other classes),\r\nso your code will be easier to maintain.\r\nIn terms of our food delivery app, it\u2019s easier to maintain one app and order (inject) necessary snacks,\r\ninstead of thinking where to buy all the ingredients for each of them and then cook everything yourself."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Flexibility"
          }), "\r\nWith DI, your code becomes loosely coupled and so, more flexible, since you depend on interfaces and it\u2019s very easy to replace the implementation.\r\nFor example, you have a repository interface for storing data about users.\r\nThe initial implementation of this repository will save the data to files. After that, you can decide to use the database.\r\nThe implementation of the repository is changed but all the code that uses it remains the same.\r\nIt\u2019s similar to how you switch the provider of the snacks (or the preferred type of food) in your app. The process of order and delivery remains the same, you just start getting other snacks."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", createVNode(_components.p, {
      children: "As you can see, Dependency Injection is a very useful and convenient technique,\r\nthe main principles of which can be applied not only in coding but in some real-world situations.\r\nIn terms of programming, you get more maintainable, more readable, more flexible, and more extensible code.\r\nThese are good enough reasons to get better acquainted with this technology and start using it in your projects."
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
const url = "src/content/blog/2020-01-08-dependency-injection-explanation-in-simple-words.mdx";
const file = "D:/Projects/sites/korzh.com/src/content/blog/2020-01-08-dependency-injection-explanation-in-simple-words.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Projects/sites/korzh.com/src/content/blog/2020-01-08-dependency-injection-explanation-in-simple-words.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
