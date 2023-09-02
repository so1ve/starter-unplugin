import { createUnplugin } from "unplugin";
import type { UnpluginFactory } from 'unplugin'
import type { Options } from "./types";

export const unpluginFactory:UnpluginFactory<Options | undefined>=_options => ({
	name: "pkg-name",
	transform(code) {
		return code;
	},
})
