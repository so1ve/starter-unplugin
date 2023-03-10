import type { Options } from "./types";
import unplugin from ".";

export default function (options: Options = {}, nuxt: any) {
  nuxt.hook("webpack:config", async (config: any) => {
    config.plugins ||= [];
    config.plugins.unshift(unplugin.webpack(options));
  });

  nuxt.hook("vite:extendConfig", async (config: any) => {
    config.plugins ||= [];
    config.plugins.push(unplugin.vite(options));
  });
}
