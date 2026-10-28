import { n as restaurants } from "./restaurants-CotWk_4v.mjs";
import { K as notFound, _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/restaurante._id-B-onpJnl.js
var $$splitComponentImporter = () => import("./restaurante._id-CMYXk0-Y.mjs");
var Route = createFileRoute("/restaurante/$id")({
	loader: ({ params }) => {
		const r = restaurants.find((x) => x.id === params.id);
		if (!r) throw notFound();
		return r;
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: loaderData ? `${loaderData.name} — efood` : "Restaurante — efood" },
		{
			name: "description",
			content: loaderData?.description ?? "Cardápio do restaurante"
		},
		{
			property: "og:title",
			content: loaderData ? `${loaderData.name} — efood` : "efood"
		},
		{
			property: "og:description",
			content: loaderData?.description ?? "Cardápio do restaurante"
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
