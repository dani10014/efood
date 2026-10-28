import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Mt } from "../_libs/styled-components+stylis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Layout-CetHwbQr.js
var import_jsx_runtime = require_jsx_runtime();
var Container = Mt.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
`;
var Logo = Mt.span`
  font-family: "Pacifico", cursive;
  font-size: 40px;
  color: var(--primary);
`;
var HeaderBar = Mt.header`
  background: var(--secondary);
  background-image: radial-gradient(var(--accent) 2px, transparent 2px);
  background-size: 24px 24px;
  color: var(--primary);
`;
var NavLink = Mt(Link)`
  color: var(--primary);
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
`;
var FooterWrap = Mt.footer`
  background: var(--secondary);
  padding: 40px 0;
  text-align: center;
  margin-top: 120px;
  p {
    font-size: 10px;
    max-width: 480px;
    margin: 64px auto 0;
    color: var(--primary);
  }
`;
var Socials = Mt.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 32px;
  span {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--primary);
    color: var(--secondary);
    font-size: 12px;
    font-weight: 700;
    display: grid;
    place-items: center;
  }
`;
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterWrap, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { children: "efood" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Socials, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ig" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "f" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "x" })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado." })
	] });
}
//#endregion
export { NavLink as a, Logo as i, Footer as n, HeaderBar as r, Container as t };
