/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as renderComponent, a as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Cp53ijaV.mjs';
import { g as getAllFilterResponse } from '../../chunks/getAllFilterResponse.action_DR0qS_8R.mjs';
import { $ as $$SectionCountriesGrid, a as $$CountryCard } from '../../chunks/SectionCountriesGrid_5qzV9Ky_.mjs';
import { $ as $$BackHistory } from '../../chunks/BackHistory_BDF1Ud0d.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DnVXclY1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const query = Astro2.url.searchParams.get("query");
  if (!query) {
    Astro2.redirect("/404");
    return;
  }
  const countries = (await getAllFilterResponse()).filter(
    (country) => country.name.common.toLowerCase().includes(query.toLowerCase())
  );
  const numResults = countries.length;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Vengardus | Search" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BackHistory", $$BackHistory, {})} ${maybeRenderHead()}<section class="mt-3"> ${countries.length < 1 ? renderTemplate`<p>No se encontraron resultados para la busqueda "${query}"</p>` : renderTemplate`<p>
Se ${numResults === 1 ? "encontr" : "encontraron"} ${numResults} ${numResults === 1 ? "resultado" : "resultados"} para la busqueda "${query}"
</p>
          ${renderComponent($$result2, "SectionCountriesGrid", $$SectionCountriesGrid, {}, { "default": ($$result3) => renderTemplate`${countries.map((country) => renderTemplate`${renderComponent($$result3, "CountryCard", $$CountryCard, { "country": country })}`)}` })}`} </section>` })}`;
}, "/home/vengardus/projects/astro/02-refuerzo/src/pages/countries/search/index.astro", void 0);

const $$file = "/home/vengardus/projects/astro/02-refuerzo/src/pages/countries/search/index.astro";
const $$url = "/countries/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
