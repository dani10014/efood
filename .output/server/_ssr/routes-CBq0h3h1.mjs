import { n as restaurants } from "./restaurants-CotWk_4v.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Mt } from "../_libs/styled-components+stylis.mjs";
import { i as Logo, n as Footer, r as HeaderBar, t as Container } from "./Layout-CetHwbQr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CBq0h3h1.js
var import_jsx_runtime = require_jsx_runtime();
var Hero = Mt(HeaderBar)`
  text-align: center;
  padding: 40px 0 40px;
  h1 {
    font-size: 36px;
    font-weight: 900;
    max-width: 540px;
    margin: 120px auto 0;
    line-height: 1.2;
  }
`;
var Grid = Mt.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 48px 80px;
  margin-top: 80px;
  list-style: none;
  padding: 0;
`;
var Card = Mt.li`
  position: relative;
  background: var(--card);
  border: 1px solid var(--primary);
  color: var(--primary);
  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    display: block;
  }
`;
var Tags = Mt.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  span {
    background: var(--primary);
    color: var(--secondary);
    font-size: 12px;
    font-weight: 700;
    padding: 6px 4px;
  }
`;
var Body = Mt.div`
  padding: 8px;
  h3 {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
  }
`;
var Button = Mt.div`
  a {
  display: inline-block;
  background: var(--primary);
  color: var(--secondary);
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  text-decoration: none;
  }
`;
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { children: "efood" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Viva experiências gastronômicas no conforto da sua casa" })] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid, { children: restaurants.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: r.image,
				alt: r.name,
				width: 1024,
				height: 640,
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tags, { children: [r.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Destaque da semana" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.category })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Body, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
					r.name,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [r.rating, " ★"] })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: r.description }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/restaurante/$id",
					params: { id: r.id },
					children: "Saiba mais"
				}) })
			] })
		] }, r.id)) }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Home as component };
