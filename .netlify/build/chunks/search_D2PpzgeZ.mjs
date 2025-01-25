export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/search_CSXl30ri.mjs').then(n => n.s);

export { page };
