/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Cp53ijaV.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_C51i-4E9.mjs';
import { I as IslandReact } from '../../chunks/IslandReact_Bak2XgIJ.mjs';
import { $ as $$Title } from '../../chunks/Title_B_m4qjsM.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Vengardus | Island 1" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate`Island 1` })} ${maybeRenderHead()}<div class="flex flex-col gap-7"> ${renderComponent($$result2, "IslandReact", IslandReact, { "client:load": true, "data-astro-transition-persist": "counter", "data-astro-transition-persist-props": true, "client:component-hydration": "load", "client:component-path": "@/components/islands/react/IslandReact", "client:component-export": "IslandReact" })} <video controls="" autoplay="" data-astro-transition-persist="video-online" width="300" height="300"> <source src="https://ia804502.us.archive.org/33/items/GoldenGa1939_3/GoldenGa1939_3_512kb.mp4" type="video/mp4"> </video> </div> ` })}`;
}, "/home/vengardus/projects/astro/02-refuerzo/src/pages/islands/island1/index.astro", "self");

const $$file = "/home/vengardus/projects/astro/02-refuerzo/src/pages/islands/island1/index.astro";
const $$url = "/islands/island1";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
