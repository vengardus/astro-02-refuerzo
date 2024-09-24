import { c as createComponent, r as renderTemplate, e as addAttribute, a as createAstro, f as renderTransition, m as maybeRenderHead, d as renderComponent, g as renderHead, b as renderSlot } from './astro/server_Cp53ijaV.mjs';
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

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Navbar2N = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar2N;
  const currentPath = Astro2.url.pathname;
  const navBarOptions = NAVBAR_OPTIONS;
  return renderTemplate(_a || (_a = __template(["", '<nav class="bg-gray-900 text-white" x-data="{ openMobileMenu: false, openSubMenu: false }" data-astro-cid-3wpqwjs7> <div class="max-w-7xl mx-auto px-2 sm:px-3" data-astro-cid-3wpqwjs7> <div class="flex items-center h-16 " data-astro-cid-3wpqwjs7> <div class="flex items-center w-full justify-between" data-astro-cid-3wpqwjs7> <div class="flex-shrink-0" data-astro-cid-3wpqwjs7> <span class="text-2xl font-bold" data-astro-cid-3wpqwjs7>Logo</span> </div> <div class="hidden md:block" data-astro-cid-3wpqwjs7> <div class="ml-10 flex items-baseline space-x-7" data-astro-cid-3wpqwjs7> ', ' </div> </div> </div> <!-- Mobile menu button --> <div class="md:hidden " data-astro-cid-3wpqwjs7> <button @click="openMobileMenu = !openMobileMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" data-astro-cid-3wpqwjs7> <span class="sr-only" data-astro-cid-3wpqwjs7>Open main menu</span> <svg x-show="!openMobileMenu" xmlns="http://www.w3.org/2000/svg" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-3wpqwjs7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3wpqwjs7></path> </svg> <svg x-show="openMobileMenu" xmlns="http://www.w3.org/2000/svg" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-astro-cid-3wpqwjs7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-3wpqwjs7></path> </svg> </button> </div> </div> </div> <!-- Mobile menu --> <div x-show="openMobileMenu" x-cloak class="md:hidden" data-astro-cid-3wpqwjs7> <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-astro-cid-3wpqwjs7> ', ' </div> </div></nav> <!-- Script --> <script src="//unpkg.com/alpinejs" defer><\/script> '])), maybeRenderHead(), navBarOptions.map((item) => renderTemplate`<div data-astro-cid-3wpqwjs7> ${!item.options ? renderTemplate`<a${addAttribute(item.path, "href")} class="px-3 py-2 rounded-md text-base font-medium hover:text-blue-500" data-astro-cid-3wpqwjs7>${item.name}</a>` : (
    // Sub-Opcionts
    renderTemplate`<div @click.away="openSubMenu = false" class="relative" data-astro-cid-3wpqwjs7> <button @click="openSubMenu = !openSubMenu" class="px-3 py-2 rounded-md text-base font-medium hover:text-blue-500 flex items-center" data-astro-cid-3wpqwjs7> ${item.name} <svg :class="{'transform rotate-180': openSubMenu}" class="ml-1 h-5 w-5 inline-block transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-astro-cid-3wpqwjs7> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-3wpqwjs7></path> </svg> </button> <div x-show="openSubMenu" x-cloak class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5" data-astro-cid-3wpqwjs7> <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" data-astro-cid-3wpqwjs7> ${item.options.map((option) => renderTemplate`<a${addAttribute(option.path, "href")} class="block px-4 py-2 text-base hover:text-blue-500" role="menuitem" data-astro-cid-3wpqwjs7>${option.name}</a>`)} </div> </div> </div>`
  )} ${item.path == currentPath ? renderTemplate`<div class="border-b-2 border-blue-500 mx-4" data-astro-cid-3wpqwjs7${addAttribute(renderTransition($$result, "sohfjmvy", "", `item-name-nav`), "data-astro-transition-scope")}></div>` : renderTemplate`<div class="border-b-2 border-transparent " data-astro-cid-3wpqwjs7></div>`} </div>`), navBarOptions.map((item) => !item.options ? renderTemplate`<a${addAttribute(item.path, "href")} class="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-500" @click="openMobileMenu = false" data-astro-cid-3wpqwjs7>${item.name}</a>` : renderTemplate`<div x-data="{ open: false }" data-astro-cid-3wpqwjs7> <button @click="open = !open" class="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-500 flex items-center" data-astro-cid-3wpqwjs7> ${item.name} <svg :class="{'transform rotate-180': open}" class="ml-1 h-5 w-5 inline-block transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-astro-cid-3wpqwjs7> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-3wpqwjs7></path> </svg> </button> <div x-show="open" x-cloak class="pl-4" data-astro-cid-3wpqwjs7> ${item.options.map((option) => renderTemplate`<a${addAttribute(option.path, "href")} class="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-500" @click="openMobileMenu = false" data-astro-cid-3wpqwjs7>${option.name}</a>`)} </div> </div>`));
}, "/home/vengardus/projects/astro/02-refuerzo/src/components/shared/Navbar2N.astro", "self");

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title = SITE_INFO.title,
    descritpion = SITE_INFO.description,
    isNavbar = true
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- SEO --><meta name="description"${addAttribute(descritpion, "content")}><meta name="author" content="Vengardus"><!-- Open Graph / Facebook --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(descritpion, "content")}><title>${title ?? "Vengardus Page"}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-slate-800 text-slate-100"> ${isNavbar && renderTemplate`${renderComponent($$result, "Navbar2N", $$Navbar2N, {})}`} <main class="mt-2 m-auto w-full max-w-4xl flex-grow px-4 mb-6"> ${renderSlot($$result, $$slots["default"])} </main> <footer></footer> </body></html>`;
}, "/home/vengardus/projects/astro/02-refuerzo/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, COUNTRY as C };
