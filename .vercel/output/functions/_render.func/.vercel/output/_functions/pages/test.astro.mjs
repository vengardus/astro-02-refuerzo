/* empty css                                  */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Cp53ijaV.mjs';
import { $ as $$Title } from '../chunks/Title_B_m4qjsM.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_C51i-4E9.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const date01 = (/* @__PURE__ */ new Date()).toTimeString();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Vengardus | Test" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate`Test` })} ${maybeRenderHead()}<dir class="mt-7 flex flex-col gap-3"> <div class="flex gap-3"> <label for="data">Ingrese algo: </label> <input type="text" name="data" id="data" class="text-gray-900" autofocus> </div> <p class="text-gray-100" id="output">Presione enter cuando termine de ingresa dato</p> <p id="initTime">Hora inicial: ${date01}</p> <p id="currentTime">Hora actual: </p> </dir>   ` })}`;
}, "/home/vengardus/projects/astro/02-refuerzo/src/pages/test/index.astro", void 0);

const $$file = "/home/vengardus/projects/astro/02-refuerzo/src/pages/test/index.astro";
const $$url = "/test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
