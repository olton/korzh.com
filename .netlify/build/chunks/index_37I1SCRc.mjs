export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/index_DN_GkUJs.mjs').then(n => n.f);

export { page };
