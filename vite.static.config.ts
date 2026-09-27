import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

const pages = [
  "/",
  "/about",
  "/hearing-loss",
  "/hearing-aids",
  "/hearing-test",
  "/testimonials",
  "/contact",
];

/**
 * Static export for shared hosting (cPanel, Hostinger, any public_html).
 * The live preview keeps using vite.config.ts.
 */
export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
        failOnError: true,
      },
      pages: pages.map((path) => ({ path })),
    }),
    nitro({
      preset: "static",
    }),
    viteReact(),
  ],
});
