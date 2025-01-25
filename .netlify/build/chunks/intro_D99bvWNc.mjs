import { _ as __astro_tag_component__, F as Fragment, t as createVNode } from './astro_D2KdCmZW.mjs';
import { $ as $$Image } from './pages/404_BbxC-4jy.mjs';
import { a as $$PageTitle } from './pages/index_DN_GkUJs.mjs';
import 'clsx';

const eqImage = new Proxy({"src":"/_astro/eq-aspcore-razor.D1VNjrKu.png","width":1201,"height":905,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Introduction",
  "description": "Introduction to EasyQuery.JS documentation",
  "slug": "intro",
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
    }), "\n", createVNode(_components.p, {
      children: "EasyQuery.JS is a platform-independent solution that allows you to embed an ad hoc reporting or advanced search functionality to your web application."
    }), "\n", createVNode(_components.p, {
      children: "It gives you a simple to use but powerful user interface to build a query or a filter to your data. Your end-users will get the power of SQL, even if they can\u2019t pronounce it properly. All the complexity is hidden from the end-user - just simple to use and easy to learn UI."
    }), "\n", createVNode($$Image, {
      src: eqImage,
      alt: "EasyQuery.js",
      class: "mt-4 mb-4"
    }), "\n", createVNode(_components.p, {
      children: "It doesn\u2019t matter what server-side platform/language you use - either Java, PHP, NodeJS or something else. EasyQuery.JS covers them all, requiring a minimum additional code to get things worked."
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
const url = "src/content/js-docs/intro.mdx";
const file = "D:/Projects/sites/korzh.com/src/content/js-docs/intro.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Projects/sites/korzh.com/src/content/js-docs/intro.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
