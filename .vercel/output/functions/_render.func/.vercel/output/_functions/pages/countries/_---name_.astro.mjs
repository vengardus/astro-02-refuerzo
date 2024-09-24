/* empty css                                     */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderTransition, a as createAstro, d as renderComponent } from '../../chunks/astro/server_Cp53ijaV.mjs';
import { g as getAllFilterResponse } from '../../chunks/getAllFilterResponse.action_DR0qS_8R.mjs';
/* empty css                                     */
import { $ as $$BackHistory } from '../../chunks/BackHistory_BDF1Ud0d.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DnVXclY1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$CountryInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CountryInfo;
  const { country } = Astro2.props;
  const infoCountry = [
    {
      label: "Nombre Oficial",
      value: country.name.official
    },
    {
      label: "Nombre Com\xFAn",
      value: country.name.common
    },
    {
      label: "Capital",
      value: country.capital
    },
    {
      label: "Region",
      value: country.region
    },
    {
      label: "Moneda",
      value: country.currencies[Object.keys(country.currencies)[0]].name
    },
    {
      label: "Moneda-s\xEDmbolo",
      value: country.currencies[Object.keys(country.currencies)[0]].symbol
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3"> <div class="flex flex-col items-center gap-3"> <h1 class="font-bold text-gray-100 text-2xl">${country.name.common}</h1> <div class="border border-1 h-90 w-96"> <img${addAttribute(country.flags.png, "src")}${addAttribute(country.flags.alt ?? "", "alt")} width="300" height="300"${addAttribute("w-full h-full object-content", "class")}${addAttribute(`${country.name.common}-image`, "data-astro-transition-persist")}${addAttribute(renderTransition($$result, "es7pdylc", "", `${country.name.common}-image`), "data-astro-transition-scope")}> </div> </div> <div class="flex flex-col items-center gap-3"> <h1 class="font-bold text-gray-100 text-xl">Información:</h1> <div class="grid grid-cols-2 gap-2"> ${infoCountry.map((info) => renderTemplate`<p>${info.label}:</p>
          <p>${info.value}</p>`)} </div> </div> </section>`;
}, "/home/vengardus/projects/astro/02-refuerzo/src/components/countries/CountryInfo.astro", "self");

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { name } = Astro2.params;
  const countries = await getAllFilterResponse();
  const country = countries.find((country2) => country2.name.common === name);
  if (!country) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Vengardus | Country" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BackHistory", $$BackHistory, {})} ${renderComponent($$result2, "CountryInfo", $$CountryInfo, { "country": country })} ` })}`;
}, "/home/vengardus/projects/astro/02-refuerzo/src/pages/countries/[...name].astro", void 0);

const $$file = "/home/vengardus/projects/astro/02-refuerzo/src/pages/countries/[...name].astro";
const $$url = "/countries/[...name]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
