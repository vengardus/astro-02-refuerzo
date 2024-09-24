import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro } from './astro/server_C2gm_5bW.mjs';

const $$Astro = createAstro();
const $$BackHistory = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BackHistory;
  const { label = "Regresar" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="underline underline-offset-4 hover:text-blue-500 cursor-pointer" onclick="history.back()"> ${label} </button>`;
}, "/home/vengardus/projects/astro/02-refuerzo/src/components/shared/BackHistory.astro", void 0);

export { $$BackHistory as $ };
