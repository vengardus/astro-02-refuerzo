/* empty css                                  */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Cp53ijaV.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_C51i-4E9.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Page | Not Found", "isNavbar": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Page Not Found</h1> <p>The page you are looking for does not exist.</p> <a href="/">Go Home</a> ` })}`;
}, "/home/vengardus/projects/astro/02-refuerzo/src/pages/404.astro", void 0);

const $$file = "/home/vengardus/projects/astro/02-refuerzo/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
