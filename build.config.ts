import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  externals: [
    "@nuxt/schema",
    "@nuxt/kit",
    "webpack",
    "rollup",
    "vite",
    "esbuild",
    "rspack",
  ],
});
