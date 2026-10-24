import { styled } from "styled-components";
import { Link } from "@tanstack/react-router";

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Logo = styled.span`
  font-family: "Pacifico", cursive;
  font-size: 40px;
  color: var(--primary);
`;

export const HeaderBar = styled.header`
  background: var(--secondary);
  background-image: radial-gradient(var(--accent) 2px, transparent 2px);
  background-size: 24px 24px;
  color: var(--primary);
`;

export const NavLink = styled(Link)`
  color: var(--primary);
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
`;

const FooterWrap = styled.footer`
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

const Socials = styled.div`
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

export function Footer() {
  return (
    <FooterWrap>
      <Logo>efood</Logo>
      <Socials>
        <span>ig</span>
        <span>f</span>
        <span>x</span>
      </Socials>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega,
        qualidade dos produtos é toda do estabelecimento contratado.
      </p>
    </FooterWrap>
  );
}
