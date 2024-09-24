/* empty css                                  */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Cp53ijaV.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_C51i-4E9.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Vengardus" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl text-blue-500">Dashboard</h1> ` })}`;
}, "/home/vengardus/projects/astro/02-refuerzo/src/pages/index.astro", void 0);

const $$file = "/home/vengardus/projects/astro/02-refuerzo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
