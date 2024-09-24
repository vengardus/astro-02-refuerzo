import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderTransition, a as createAstro, b as renderSlot } from './astro/server_Cp53ijaV.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$CountryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CountryCard;
  const { country } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-2 items-center justify-center"> <p>${country.name.common}</p> <div class="border border-1 h-36 w-50"> <a${addAttribute(`/countries/${country.name.common}`, "href")}> <img${addAttribute(country.flags.png, "src")}${addAttribute(country.flags.alt ?? "", "alt")} width="100" height="100"${addAttribute("w-full h-full object-content", "class")}${addAttribute(`${country.name.common}-image`, "data-astro-transition-persist")}${addAttribute(renderTransition($$result, "ucligwa7", "", `${country.name.common}-image`), "data-astro-transition-scope")}> </a> </div> </div>`;
}, "/home/vengardus/projects/astro/02-refuerzo/src/components/countries/CountryCard.astro", "self");

const $$SectionCountriesGrid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 pt-3 text-center"> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/vengardus/projects/astro/02-refuerzo/src/components/countries/SectionCountriesGrid.astro", void 0);

export { $$SectionCountriesGrid as $, $$CountryCard as a };
