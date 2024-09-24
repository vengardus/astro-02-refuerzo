/* empty css                                  */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Cp53ijaV.mjs';
import { g as getAllFilterResponse } from '../chunks/getAllFilterResponse.action_DR0qS_8R.mjs';
import { $ as $$Title } from '../chunks/Title_B_m4qjsM.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_DnVXclY1.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Dg_AKXbt.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const countries = await getAllFilterResponse();
  console.log(countries);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Vengardus | Countries" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate`Lista de paises` })} ${maybeRenderHead()}<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 pt-3"> ${countries.slice(0, 10).map((country) => renderTemplate`<div class="flex flex-col gap-2 items-center justify-center"> <p>${country.name.common}</p> <div class="border border-1 h-40 w-48"> ${renderComponent($$result2, "Image", $$Image, { "src": country.flags.png, "alt": country.flags.alt ?? "", "width": "100", "height": "100", "format": "avif", "loading": "lazy", "class": "w-full h-full object-content" })} </div> </div>`)} </div> ` })}`;
}, "/home/vengardus/projects/astro/02-refuerzo/src/pages/countries/index.astro", void 0);

const $$file = "/home/vengardus/projects/astro/02-refuerzo/src/pages/countries/index.astro";
const $$url = "/countries";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
