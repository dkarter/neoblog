// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Change code highlight theme here.
  markdown: {
    shikiConfig: {
      theme: "dark-plus", // https://shiki.style/themes
      wrap: false,
      defaultColor: false,
    },
  },
  site: "https://dkarter.github.io",
  base: "neoblog",
  integrations: [mdx(), sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
