import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderSlot } from './astro/server_Cp53ijaV.mjs';

const $$Title = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="text-2xl sm:text-5xl font-bold capitalize"> ${renderSlot($$result, $$slots["default"])} </h1> <div class="border-b-2 border-blue-500 my-3"></div>`;
}, "/home/vengardus/projects/astro/02-refuerzo/src/components/shared/Title.astro", void 0);

export { $$Title as $ };
