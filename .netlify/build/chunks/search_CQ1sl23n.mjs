export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/search_DrcNT5Nm.mjs').then(n => n.c);

export { page };
