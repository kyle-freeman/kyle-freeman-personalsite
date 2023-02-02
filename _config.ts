import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site.use(jsx_preact());
site.use(tailwindcss({
	extensions: [".html", ".jsx"],
	options: {
		theme: {
			extend: {
				colors: {
					darkgreen:"#071E22",
					green: "#1C7C54",
					mintgreen: "#73E2A7",
					lightgreen: "#DEF4C6",
					salmon: '#EF946C'
				},
				fontFamily: {
					body: ['Inter', 'sans-serif'],
					title: ['Epilogue', 'sans-serif'],
					code: ['JetBrains Mono', 'mono']
				}
			}
		}
	},
}));
site.use(postcss());

export default site;
