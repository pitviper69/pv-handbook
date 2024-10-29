import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";
import auth from "auth-astro";
// https://astro.build/config
export default defineConfig({
  markdown: {
    smartypants: true,
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
        },
      ],
    ],
    prefetch: true,
  },
  integrations: [
    react(),
    tailwind(),
    mdx({
      gfm: true,
    }),
    auth()
  ],
  output: "server",
  adapter: netlify(),
});