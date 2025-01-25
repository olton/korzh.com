import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DaeWHgtS.mjs';

const _page0  = () => import('./chunks/styles_5eLyCxpf.mjs');
const _page1  = () => import('./chunks/scripts_BlvdovXS.mjs');
const _page2  = () => import('./chunks/generic_3ZbV0MS6.mjs');
const _page3  = () => import('./chunks/index_BCk_ustR.mjs');
const _page4  = () => import('./chunks/index_CPmMu_De.mjs');
const _page5  = () => import('./chunks/index_CkvUtuGL.mjs');
const _page6  = () => import('./chunks/index_37I1SCRc.mjs');
const _page7  = () => import('./chunks/index_B1CCmbko.mjs');
const _page8  = () => import('./chunks/sidebar_CJ8zYvVX.mjs');
const _page9  = () => import('./chunks/search_D2PpzgeZ.mjs');
const _page10  = () => import('./chunks/_.._Tc_1ce2y.mjs');
const _page11  = () => import('./chunks/index_D6ZjGxXA.mjs');
const _page12  = () => import('./chunks/index_iJZHXeme.mjs');
const _page13  = () => import('./chunks/blog_DefzQV1N.mjs');
const _page14  = () => import('./chunks/news_DEdjx57n.mjs');
const _page15  = () => import('./chunks/index_UcwnHdlT.mjs');
const _page16  = () => import('./chunks/index_DUMhL7D8.mjs');
const _page17  = () => import('./chunks/index_C9AktAsw.mjs');
const _page18  = () => import('./chunks/search_CQ1sl23n.mjs');
const _page19  = () => import('./chunks/_category__CMkMavmC.mjs');
const _page20  = () => import('./chunks/search_Cj-F3GE9.mjs');
const _page21  = () => import('./chunks/_tag__BxJv-AdY.mjs');
const _page22  = () => import('./chunks/_.._BIol1bHf.mjs');
const _page23  = () => import('./chunks/_.._a2UR0Eh5.mjs');
const _page24  = () => import('./chunks/_.._DnecJXG7.mjs');
const _page25  = () => import('./chunks/404_BHlT9a5B.mjs');const pageMap = new Map([["node_modules/astro-expressive-code/routes/styles.ts", _page0],["node_modules/astro-expressive-code/routes/scripts.ts", _page1],["node_modules/astro/dist/assets/endpoint/generic.js", _page2],["src/pages/index.astro", _page3],["src/pages/easy-report-starter-kit/index.astro", _page4],["src/pages/easyquery/index.astro", _page5],["src/pages/easyquery/javascript/index.astro", _page6],["src/pages/easyquery/javascript/docs/index.astro", _page7],["src/pages/easyquery/javascript/docs/sidebar.js", _page8],["src/pages/easyquery/javascript/docs/search.astro", _page9],["src/pages/easyquery/javascript/docs/[...slug].astro", _page10],["src/pages/localizer/index.astro", _page11],["src/pages/newspiper/index.astro", _page12],["src/pages/blog.xml.js", _page13],["src/pages/news.xml.js", _page14],["src/pages/clarity/index.astro", _page15],["src/pages/crammer/index.astro", _page16],["src/pages/metroui/index.astro", _page17],["src/pages/blog/search.json.js", _page18],["src/pages/blog/categories/[category].astro", _page19],["src/pages/blog/search.astro", _page20],["src/pages/blog/tags/[tag].astro", _page21],["src/pages/blog/[...slug].astro", _page22],["src/pages/blog/[...page].astro", _page23],["src/pages/news/[...page].astro", _page24],["src/pages/404.astro", _page25]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"02db5617-29d7-4831-b456-bba5e862c989"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
