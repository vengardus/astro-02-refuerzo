import type { Navbar } from "@/interfaces/shared/Navbar";

export const SITE_INFO = {
  title: "My Site",
  description: "This is my site",
};

export const NAVBAR_OPTIONS: Navbar[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Test",
    path: "/test",
  },
  {
    name: "Islas",
    path: "",
    options: [
      {
        name: "Isla 1",
        path: "/islands/island1",
      },
      {
        name: "Isla 2",
        path: "/islands/island2",
      },
    ],
  },
  {
    name: "Paises",
    path: "/countries/1",
  },
  {
    name: "Guides",
    path: "/guides",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "About",
    path: "/about",
  },
];

export const COUNTRY = {
  urlBaseApiCountries : "https://restcountries.com/v3.1"
}