//#region node_modules/.nitro/vite/services/ssr/assets/restaurants-CotWk_4v.js
var sushi_default = "/assets/sushi-Bpe-U3Q-.jpg";
var pasta_default = "/assets/pasta-24tkltJk.jpg";
var pizza_default = "/assets/pizza-CRtcNVln.jpg";
var pizzaMenu = (img) => Array.from({ length: 6 }, (_, i) => ({
	id: i + 1,
	name: "Pizza Marguerita",
	description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
	image: img,
	price: 60.9,
	serves: "2 a 3 pessoas"
}));
var restaurants = [{
	id: "hioki-sushi",
	name: "Hioki Sushi",
	category: "Japonesa",
	rating: 4.9,
	highlight: true,
	description: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.",
	image: sushi_default,
	menu: pizzaMenu(sushi_default).map((d) => ({
		...d,
		name: "Combo Hioki",
		price: 89.9
	}))
}, ...[
	["la-dolce-vita", "La Dolce Vita Trattoria"],
	["trattoria-bella", "Trattoria Bella"],
	["nonna-rosa", "Nonna Rosa"],
	["via-roma", "Via Roma"],
	["sapore", "Sapore Italiano"]
].map(([id, name], i) => ({
	id,
	name,
	category: "Italiana",
	rating: 4.6,
	description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.",
	image: i % 2 === 0 ? pasta_default : pizza_default,
	menu: pizzaMenu(pizza_default)
}))];
var formatPrice = (v) => v.toLocaleString("pt-BR", {
	style: "currency",
	currency: "BRL"
});
//#endregion
export { restaurants as n, formatPrice as t };
