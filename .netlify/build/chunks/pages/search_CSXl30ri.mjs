import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent } from '../astro_D2KdCmZW.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$PageLayout } from './404_BbxC-4jy.mjs';
/* empty css                           */

const $$Astro$2 = createAstro("https://korzh.com");
const $$Search$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Search$1;
  return renderTemplate``;
}, "D:/Projects/sites/korzh.com/src/pages/easyquery/javascript/docs/search.astro", undefined);

const $$file$1 = "D:/Projects/sites/korzh.com/src/pages/easyquery/javascript/docs/search.astro";
const $$url$1 = "/easyquery/javascript/docs/search";

const search$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Search$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://korzh.com");
const $$BlogSearch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogSearch;
  return renderTemplate`${maybeRenderHead()}<aside> <form id="search-form" class="form mt-4" action="javascript:"> <input type="search" name="search" id="search" placeholder="Search..." data-role="input" data-search-button="true"> </form> </aside> `;
}, "D:/Projects/sites/korzh.com/src/components/BlogSearch.astro", undefined);

const $$Astro = createAstro("https://korzh.com");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Search the Blog", "data-astro-cid-cjx6pcvh": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container-fluid border-top bd-default pt-4" data-astro-cid-cjx6pcvh> <div class="container" data-astro-cid-cjx6pcvh> <div class="row" data-astro-cid-cjx6pcvh> <div class="cell-md-9 border-right bd-default" data-astro-cid-cjx6pcvh> <div class="pr-10" data-astro-cid-cjx6pcvh> <iframe name="blog-preview" id="blog-preview" data-astro-cid-cjx6pcvh></iframe> <div id="post-preview" data-astro-cid-cjx6pcvh></div> </div> </div> <div class="cell-md-3" data-astro-cid-cjx6pcvh> <div class="sidebar pl-4 pr-4" data-astro-cid-cjx6pcvh> <h1 class="d-flex flex-row flex-nowrap flex-align-center" data-astro-cid-cjx6pcvh> <span data-astro-cid-cjx6pcvh>Blog</span> <span class="posts-counter ml-auto" id="result-count" data-astro-cid-cjx6pcvh>0</span> </h1> <div class="blog-sidebar-group" data-astro-cid-cjx6pcvh> ${renderComponent($$result2, "BlogSearch", $$BlogSearch, { "data-astro-cid-cjx6pcvh": true })} </div> <div class="blog-sidebar-group" data-astro-cid-cjx6pcvh> <div class="text-bold enlarge-2 border-bottom bd-default" data-astro-cid-cjx6pcvh>Blog Search Results</div> </div> <div class="blog-sidebar-group" data-astro-cid-cjx6pcvh> <ul id="searchResults" class="post-links" data-astro-cid-cjx6pcvh></ul> </div> </div> </div> </div> </div> </section> ` })}  `;
}, "D:/Projects/sites/korzh.com/src/pages/blog/search.astro", undefined);

const $$file = "D:/Projects/sites/korzh.com/src/pages/blog/search.astro";
const $$url = "/blog/search";

const search = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Search,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogSearch as $, search as a, search$1 as s };
