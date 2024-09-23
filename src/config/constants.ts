import type { Navbar } from "@/interfaces/shared/Navbar";

export const siteInfo = {
  title: "My Site",
  description: "This is my site",
};

export const navBarOptions: Navbar[] = [
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
    path: "/paises",
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
