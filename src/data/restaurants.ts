import sushi from "@/assets/sushi.jpg";
import pasta from "@/assets/pasta.jpg";
import pizza from "@/assets/pizza.jpg";

export type Dish = { id: number; name: string; description: string; image: string; price: number; serves: string };
export type Restaurant = {
  id: string;
  name: string;
  category: string;
  rating: number;
  highlight?: boolean;
  description: string;
  image: string;
  menu: Dish[];
};

const pizzaMenu = (img: string): Dish[] =>
  Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: img,
    price: 60.9,
    serves: "2 a 3 pessoas",
  }));

export const restaurants: Restaurant[] = [
  {
    id: "hioki-sushi",
    name: "Hioki Sushi",
    category: "Japonesa",
    rating: 4.9,
    highlight: true,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.",
    image: sushi,
    menu: pizzaMenu(sushi).map((d) => ({ ...d, name: "Combo Hioki", price: 89.9 })),
  },
  ...([
    ["la-dolce-vita", "La Dolce Vita Trattoria"],
    ["trattoria-bella", "Trattoria Bella"],
    ["nonna-rosa", "Nonna Rosa"],
    ["via-roma", "Via Roma"],
    ["sapore", "Sapore Italiano"],
  ] as const).map(([id, name], i): Restaurant => ({
    id,
    name,
    category: "Italiana",
    rating: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.",
    image: i % 2 === 0 ? pasta : pizza,
    menu: pizzaMenu(pizza),
  })),
];

export const formatPrice = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
