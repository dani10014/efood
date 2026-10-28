import { n as __toESM } from "../_runtime.mjs";
import { t as formatPrice } from "./restaurants-CotWk_4v.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Route } from "./restaurante._id-B-onpJnl.mjs";
import { t as Mt } from "../_libs/styled-components+stylis.mjs";
import { a as NavLink, i as Logo, n as Footer, r as HeaderBar, t as Container } from "./Layout-CetHwbQr.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as Trash2, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/restaurante._id-CMYXk0-Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CartAction = Mt.button`
  width: 100%;
  border: 0;
  padding: 6px 8px;
  background: var(--secondary);
  color: var(--primary);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  &:focus-visible { outline: 2px solid var(--card); outline-offset: 2px; }
`;
var Backdrop = Mt(DialogOverlay)`
  position: fixed;
  inset: 0;
  z-index: 20;
  background: var(--backdrop);
`;
var Panel = Mt(DialogContent)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 21;
  width: 360px;
  max-width: 100%;
  padding: 32px 8px 24px;
  overflow-y: auto;
  background: var(--primary);
  color: var(--secondary);
  font-size: 14px;
  h2 { font-size: 16px; font-weight: 700; margin: 0 0 16px; }
`;
var Close$1 = Mt(DialogClose)`
  position: absolute;
  top: 4px;
  right: 4px;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  background: none;
  border: 0;
  color: var(--secondary);
  cursor: pointer;
`;
var List = Mt.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 16px;
`;
var Item = Mt.li`
  position: relative;
  display: flex;
  gap: 8px;
  padding: 8px 8px 30px;
  min-height: 104px;
  background: var(--secondary);
  color: var(--primary);
  img { width: 80px; height: 80px; object-fit: cover; flex-shrink: 0; }
  h3 { font-size: 18px; font-weight: 900; line-height: 1.3; margin: 0 0 12px; overflow-wrap: anywhere; }
  p { margin: 0; }
`;
var Remove = Mt.button`
  position: absolute;
  right: 8px;
  bottom: 6px;
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  background: none;
  border: 0;
  color: var(--primary);
  cursor: pointer;
`;
var Total = Mt.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-weight: 700;
  margin: 40px 0 16px;
`;
var Form = Mt.form`
  display: grid;
  gap: 8px;
  label { display: grid; gap: 8px; font-weight: 700; min-width: 0; }
  input {
    width: 100%;
    min-width: 0;
    border: 1px solid var(--secondary);
    background: var(--secondary);
    color: var(--primary);
    height: 32px;
    padding: 6px 8px;
    font-size: 14px;
  }
  input:focus-visible { outline: 2px solid var(--card); outline-offset: 2px; }
`;
var Row = Mt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;
var Actions = Mt.div`
  display: grid;
  gap: 8px;
  margin-top: 16px;
`;
var Review = Mt.div`
  p { line-height: 22px; margin: 0 0 16px; overflow-wrap: anywhere; }
`;
function CartDrawer({ open, onOpenChange, cart, removeOne }) {
	const [step, setStep] = (0, import_react.useState)("cart");
	const [delivery, setDelivery] = (0, import_react.useState)({
		name: "",
		address: "",
		city: "",
		zip: "",
		number: "",
		extra: ""
	});
	const total = cart.reduce((sum, dish) => sum + dish.price, 0);
	const grouped = /* @__PURE__ */ new Map();
	cart.forEach((dish) => {
		const entry = grouped.get(dish.id);
		if (entry) entry.qty += 1;
		else grouped.set(dish.id, {
			dish,
			qty: 1
		});
	});
	const field = (key, label, autoComplete, optional = false) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name: key,
		value: delivery[key],
		autoComplete,
		required: !optional,
		pattern: key === "zip" ? "[0-9]{5}-?[0-9]{3}" : void 0,
		title: key === "zip" ? "Informe um CEP com 8 números" : void 0,
		inputMode: key === "zip" ? "numeric" : void 0,
		onChange: (event) => setDelivery((current) => ({
			...current,
			[key]: event.target.value
		}))
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (value) => {
			onOpenChange(value);
			if (!value) setStep("cart");
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Backdrop, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			"aria-describedby": void 0,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Close$1, {
					"aria-label": "Fechar carrinho",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: step === "cart" ? "Carrinho" : step === "delivery" ? "Entrega" : step === "payment" ? `Pagamento — Valor a pagar ${formatPrice(total)}` : "Revisão do pedido" }),
				step === "cart" && (cart.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "O carrinho está vazio." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { children: [...grouped.values()].map(({ dish, qty }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: dish.image,
							alt: dish.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: dish.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							qty,
							" × ",
							formatPrice(dish.price)
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Remove, {
							type: "button",
							"aria-label": `Remover uma unidade de ${dish.name}`,
							title: `Remover uma unidade de ${dish.name}`,
							onClick: () => removeOne(dish.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
						})
					] }, dish.id)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Total, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Valor total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(total) })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartAction, {
						onClick: () => setStep("delivery"),
						children: "Continuar com a entrega"
					})
				] })),
				step === "delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Form, {
					onSubmit: (event) => {
						event.preventDefault();
						setStep("payment");
					},
					children: [
						field("name", "Quem irá receber", "name"),
						field("address", "Endereço", "street-address"),
						field("city", "Cidade", "address-level2"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [field("zip", "CEP", "postal-code"), field("number", "Número", "off")] }),
						field("extra", "Complemento (opcional)", "address-line2", true),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Actions, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartAction, {
							type: "submit",
							children: "Continuar com o pagamento"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartAction, {
							type: "button",
							onClick: () => setStep("cart"),
							children: "Voltar para o carrinho"
						})] })
					]
				}),
				step === "payment" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Form, {
					onSubmit: (event) => {
						event.preventDefault();
						setStep("review");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Prévia do formulário: não há cobrança nem envio de pedido. Use apenas dados fictícios." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Nome no cartão", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "cardName",
							required: true,
							autoComplete: "off"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Número do cartão", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "cardNumber",
							required: true,
							inputMode: "numeric",
							autoComplete: "off",
							pattern: "[0-9 ]{13,23}",
							maxLength: 23,
							title: "Use entre 13 e 19 números fictícios"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["CVV", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "cvv",
							required: true,
							inputMode: "numeric",
							autoComplete: "off",
							pattern: "[0-9]{3,4}",
							maxLength: 4
						})] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Mês de vencimento", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "month",
							required: true,
							inputMode: "numeric",
							autoComplete: "off",
							pattern: "0[1-9]|1[0-2]",
							maxLength: 2,
							placeholder: "MM"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Ano de vencimento", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "year",
							required: true,
							inputMode: "numeric",
							autoComplete: "off",
							pattern: "[0-9]{4}",
							maxLength: 4,
							placeholder: "AAAA"
						})] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Actions, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartAction, {
							type: "submit",
							children: "Finalizar pedido"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartAction, {
							type: "button",
							onClick: () => setStep("delivery"),
							children: "Voltar para a edição de endereço"
						})] })
					]
				}),
				step === "review" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Review, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: delivery.name }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						delivery.address,
						", ",
						delivery.number,
						delivery.extra ? ` — ${delivery.extra}` : "",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						delivery.city,
						" — CEP ",
						delivery.zip
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { children: [...grouped.values()].map(({ dish, qty }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: dish.image,
						alt: dish.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: dish.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						qty,
						" × ",
						formatPrice(dish.price)
					] })] })] }, dish.id)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Total, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Valor total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatPrice(total) })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Esta é uma prévia. Nenhum pedido foi enviado e nenhum pagamento foi realizado." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartAction, {
						onClick: () => {
							setStep("cart");
							onOpenChange(false);
						},
						children: "Concluir"
					})
				] })
			]
		})] })
	});
}
var Bar = Mt(HeaderBar)`
  padding: 60px 0;
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 900;
    font-size: 18px;
  }
`;
var CartCount = Mt.button`
  background: none;
  border: 0;
  color: var(--primary);
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
`;
var Banner = Mt.div`
  height: 280px;
  background: linear-gradient(var(--overlay), var(--overlay)), url(${(p) => p.$img}) center / cover;
  color: var(--card);
  ${Container} {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 24px;
    padding-bottom: 32px;
  }
  span { font-size: 32px; font-weight: 100; }
  h2 { font-size: 32px; font-weight: 900; }
`;
var Grid = Mt.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
  margin-top: 56px;
  list-style: none;
  padding: 0;
`;
var DishCard = Mt.li`
  background: var(--primary);
  color: var(--secondary);
  padding: 8px;
  img { width: 100%; height: 167px; object-fit: cover; display: block; }
  h3 { font-size: 16px; font-weight: 900; margin: 8px 0; }
  p { font-size: 14px; line-height: 22px; margin-bottom: 8px; }
`;
var Action = Mt.button`
  width: 100%;
  background: var(--secondary);
  color: var(--primary);
  border: 0;
  font-weight: 700;
  font-size: 14px;
  padding: 4px;
  cursor: pointer;
`;
var Overlay = Mt.div`
  position: fixed;
  inset: 0;
  background: var(--backdrop);
  display: grid;
  place-items: center;
  z-index: 10;
  overflow-y: auto;
  padding: 32px 0;
`;
var Modal = Mt.div`
  position: relative;
  max-width: 1024px;
  width: calc(100% - 32px);
  background: var(--primary);
  color: var(--card);
  padding: 32px;
  display: flex;
  gap: 24px;
  img { width: 280px; height: 280px; object-fit: cover; }
  h3 { font-size: 18px; font-weight: 900; }
  p { font-size: 14px; line-height: 22px; margin: 16px 0; }
  ${Action} { width: auto; padding: 4px 8px; }
  @media (max-width: 640px) { flex-direction: column; img { width: 100%; } }
`;
var Close = Mt.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: 0;
  color: var(--card);
  font-size: 20px;
  cursor: pointer;
`;
function RestaurantPage() {
	const r = Route.useLoaderData();
	const [cart, setCart] = (0, import_react.useState)([]);
	const [open, setOpen] = (0, import_react.useState)(null);
	const [cartOpen, setCartOpen] = (0, import_react.useState)(false);
	const removeOne = (id) => setCart((c) => {
		const index = c.findIndex((d) => d.id === id);
		return index === -1 ? c : c.filter((_, i) => i !== index);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
				to: "/",
				children: "Restaurantes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { children: "efood" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartCount, {
				onClick: () => setCartOpen(true),
				children: [cart.length, " produto(s) no carrinho"]
			})
		] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Banner, {
			$img: r.image,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: r.name })] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid, { children: r.menu.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DishCard, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: d.image,
				alt: d.name,
				width: 1024,
				height: 640,
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: d.name }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: d.description }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
				onClick: () => setOpen(d),
				children: "Adicionar ao carrinho"
			})
		] }, d.id)) }) }),
		open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
			onClick: () => setOpen(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Close, {
						"aria-label": "Fechar",
						onClick: () => setOpen(null),
						children: "✕"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: open.image,
						alt: open.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: open.name }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: open.description }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Serve: de ", open.serves] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Action, {
							onClick: () => {
								setCart((c) => [...c, open]);
								setOpen(null);
								setCartOpen(true);
							},
							children: ["Adicionar ao carrinho - ", formatPrice(open.price)]
						})
					] })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {
			open: cartOpen,
			onOpenChange: setCartOpen,
			cart,
			removeOne
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { RestaurantPage as component };
