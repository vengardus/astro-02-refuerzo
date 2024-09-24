import { c as createComponent, r as renderTemplate, e as addAttribute, a as createAstro, m as maybeRenderHead, f as renderTransition, d as renderComponent, g as renderHead, b as renderSlot } from './astro/server_Cp53ijaV.mjs';
/* empty css                          */
/* empty css                          */

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/vengardus/projects/astro/02-refuerzo/node_modules/.pnpm/astro@4.15.8_rollup@4.22.4_typescript@5.6.2/node_modules/astro/components/ViewTransitions.astro", void 0);

const SITE_INFO = {
  title: "My Site",
  description: "This is my site"
};
const NAVBAR_OPTIONS = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Test",
    path: "/test"
  },
  {
    name: "Islas",
    path: "",
    options: [
      {
        name: "Isla 1",
        path: "/islands/island1"
      },
      {
        name: "Isla 2",
        path: "/islands/island2"
      }
    ]
  },
  {
    name: "Paises",
    path: "/countries/1"
  },
  {
    name: "Blog",
    path: "/blog"
  },
  {
    name: "About",
    path: "/about"
  }
];
const COUNTRY = {
  urlBaseApiCountries: "https://restcountries.com/v3.1"
};

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const links = NAVBAR_OPTIONS;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`<!-- component --><!-- <nav class="bg-white shadow dark:bg-gray-800"> -->${maybeRenderHead()}<nav class="bg-slate-800 shadow"> <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 dark:text-gray-300 flex-wrap"> ${links.map((link) => renderTemplate`<div> <a${addAttribute(link.path, "href")} class="hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6" ,> ${link.name} </a> ${link.path == currentPath ? renderTemplate`<div class="border-b-2 border-blue-500 mx-4"${addAttribute(renderTransition($$result, "hvfj4u4k", "", "{link.name}-nav"), "data-astro-transition-scope")}></div>` : renderTemplate`<div class="border-b-2 border-transparent "></div>`} </div>`)} </div> </nav>`;
}, "/home/vengardus/projects/astro/02-refuerzo/src/components/shared/Navbar.astro", "self");

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title = SITE_INFO.title,
    descritpion = SITE_INFO.description,
    isNavbar = true
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- SEO --><meta name="description"${addAttribute(descritpion, "content")}><meta name="author" content="Vengardus"><!-- Open Graph / Facebook --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(descritpion, "content")}><title>${title ?? "Vengardus Page"}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-slate-800 text-slate-100"> ${isNavbar && renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {})}`} <main class="mt-2 m-auto w-full max-w-4xl flex-grow px-4 mb-6"> ${renderSlot($$result, $$slots["default"])} </main> <footer></footer> </body></html>`;
}, "/home/vengardus/projects/astro/02-refuerzo/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, COUNTRY as C };
