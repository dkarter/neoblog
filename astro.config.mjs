// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

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
  integrations: [mdx(), sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["mermaid"],
    },
    build: {
      rollupOptions: {
        external: [],
      },
    },
    ssr: {
      noExternal: ["mermaid"],
    },
  },
});
