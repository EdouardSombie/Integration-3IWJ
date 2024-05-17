import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, "./src/js/main.js"),
			name: "ESGI_framework",
			//formats: ["es"],
		},
		rollupOptions: {
			output: {
				entryFileNames: "js/[name].js",
				assetFileNames: ({ name }) => {
					// Ne sera pa utilisé dans le cadre d'une génération de library...
					if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
						return "images/[name][extname]";
					}
					if (/\.css$/.test(name ?? "")) {
						// return "assets/css/[name]-[hash][extname]";
						return "css/[name][extname]";
					}
					// default value
					// ref: https://rollupjs.org/guide/en/#outputassetfilenames
					return "assets/[name]-[hash][extname]";
				},
			},
		},
	}, // ...
});
