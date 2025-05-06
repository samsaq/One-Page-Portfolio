import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://samxweb.dev/",
  legacy: {
    collections: true,
  },
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://samxweb.dev/sitemap-index.xml",
        "https://samxweb.dev/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({
      injectReset: true,
    }),
    icon(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  adapter: vercel(),
});
