import { addVitePlugin, addWebpackPlugin } from "@nuxt/kit";
import type { ModuleDefinition } from "@nuxt/schema";

import { name, version } from "../package.json";

import VitePlugin from "./vite";
import WebpackPlugin from "./webpack";
import type { Options } from "./types";

export default {
  meta: {
    name,
    version,
    configKey: "pkg-name",
    compatibility: {
      bridge: true,
    },
  },
  defaults: {},
  setup(options) {
    addVitePlugin(VitePlugin(options));
    addWebpackPlugin(WebpackPlugin(options));
  },
} as ModuleDefinition<Options>;
