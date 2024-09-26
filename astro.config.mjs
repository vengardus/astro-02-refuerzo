// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    react(
      {
        include: ['**/react/**/*'],
      }
    )
  ],

  //output: "server",
  image: {
    remotePatterns: [{ protocol: "https" }],
    domains: ["flagcdn.com/"],
  },

  output: "server",
  adapter: vercel({
  }),
});            