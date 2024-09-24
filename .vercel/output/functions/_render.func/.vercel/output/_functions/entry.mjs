import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BYujaS6H.mjs';
import { manifest } from './manifest_B-6g0sup.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/countries/search/_str_.astro.mjs');
const _page3 = () => import('./pages/countries/search.astro.mjs');
const _page4 = () => import('./pages/countries/_page_.astro.mjs');
const _page5 = () => import('./pages/countries.astro.mjs');
const _page6 = () => import('./pages/countries/_---name_.astro.mjs');
const _page7 = () => import('./pages/islands/island1.astro.mjs');
const _page8 = () => import('./pages/islands/island2.astro.mjs');
const _page9 = () => import('./pages/test.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.15.8_rollup@4.22.4_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/countries/search/[str].astro", _page2],
    ["src/pages/countries/search/index.astro", _page3],
    ["src/pages/countries/[page].astro", _page4],
    ["src/pages/countries/index.astro", _page5],
    ["src/pages/countries/[...name].astro", _page6],
    ["src/pages/islands/island1/index.astro", _page7],
    ["src/pages/islands/island2/index.astro", _page8],
    ["src/pages/test/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "4c6efbb7-317b-4213-ad19-bc07ba1c6a31",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
