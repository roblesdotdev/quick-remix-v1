import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

const MODE = process.env.NODE_ENV;

export default defineConfig({
  build: { cssMinify: MODE === "production", sourcemap: true },
  plugins: [remix(), tsconfigPaths()],
});
