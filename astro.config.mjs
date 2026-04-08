// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import remarkDirective from "remark-directive";
import { remarkGridDirective } from "./src/plugins/remark-grid-directive.mjs";

// https://astro.build/config
export default defineConfig({
  site: 'https://shuheykoyama.github.io/',
  integrations: [react(), tailwind()],
  markdown: {
    remarkPlugins: [remarkDirective, remarkGridDirective],
  },
});
