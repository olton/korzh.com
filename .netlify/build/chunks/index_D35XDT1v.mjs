import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderSlot, g as addAttribute, _ as __astro_tag_component__, F as Fragment, t as createVNode } from './astro_D2KdCmZW.mjs';
import { $ as $$Image } from './pages/404_BbxC-4jy.mjs';
import { a as $$PageTitle, b as $$CardGrid, c as $$Card } from './pages/index_DN_GkUJs.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro("https://korzh.com");
const $$Leader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Leader;
  return renderTemplate`${maybeRenderHead()}<div class="text-leader mt-4 mb-4"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "D:/Projects/sites/korzh.com/src/components/Leader.astro", undefined);

const $$Astro = createAstro("https://korzh.com");
const $$TextBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TextBlock;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${Astro2.props.className}`, "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "D:/Projects/sites/korzh.com/src/components/TextBlock.astro", undefined);

const frontmatter = {
  "title": "Tutorial",
  "description": "EasyQuery.JS Tutorial",
  "slug": "tutorial/index",
  "time": "1 min read"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$PageTitle, {
      title: frontmatter.title
    }), "\n", createVNode($$Leader, {
      children: "This section of the documentation provides examples of how to use some aspects of EasyQuery.JS"
    }), "\n", createVNode($$CardGrid, {
      className: "mt-10",
      children: [createVNode($$Card, {
        title: "Replacing default Calendar widget with KendoDatePicker",
        children: [createVNode("div", {
          slot: "body",
          children: createVNode(_components.p, {
            children: "EasyQuery.JS allows you to replace the default Calendar widget with any other component by your choice. Here we are going to describe how to change it with your Kendo DateTime picker. With the code above QueryPanel widget will use Kendo date/time picker widget instead of the EasyQuery\u2019s default one."
          })
        }), createVNode("div", {
          slot: "actions",
          children: createVNode("a", {
            className: "button info fg-white",
            href: "tutorial/replacing-datepicker-widget",
            children: "Read Tutorial\u2026"
          })
        })]
      }), createVNode($$Card, {
        title: "How to add a token to EasyQuery HTTP requests",
        children: [createVNode("div", {
          slot: "body",
          children: createVNode(_components.p, {
            children: "It\u2019s a very common situation when you need to add some extra headers (e.g. an authorization token) or extra query parameters to each HTTP request sent from EasyQuery.JS widgets to the backend. Here is the detailed instruction on how to do it."
          })
        }), createVNode("div", {
          slot: "actions",
          children: createVNode("a", {
            className: "button info fg-white",
            href: "tutorial/replacing-datepicker-widget",
            children: "Read Tutorial\u2026"
          })
        })]
      })]
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
const url = "src/content/js-docs/tutorial/index.mdx";
const file = "D:/Projects/sites/korzh.com/src/content/js-docs/tutorial/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Projects/sites/korzh.com/src/content/js-docs/tutorial/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
