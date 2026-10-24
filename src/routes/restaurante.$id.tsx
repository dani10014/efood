import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { styled } from "styled-components";
import { CartDrawer } from "@/components/CartDrawer";
import { Container, Footer, HeaderBar, Logo, NavLink } from "@/components/Layout";
import { restaurants, formatPrice, type Dish } from "@/data/restaurants";

export const Route = createFileRoute("/restaurante/$id")({
  loader: ({ params }) => {
    const r = restaurants.find((x) => x.id === params.id);
    if (!r) throw notFound();
    return r;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.name} — efood` : "Restaurante — efood" },
      { name: "description", content: loaderData?.description ?? "Cardápio do restaurante" },
      { property: "og:title", content: loaderData ? `${loaderData.name} — efood` : "efood" },
      { property: "og:description", content: loaderData?.description ?? "Cardápio do restaurante" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RestaurantPage,
});

const Bar = styled(HeaderBar)`
  padding: 60px 0;
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 900;
    font-size: 18px;
  }
`;

const CartCount = styled.button`
  background: none;
  border: 0;
  color: var(--primary);
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
`;

const Banner = styled.div<{ $img: string }>`
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

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
  margin-top: 56px;
  list-style: none;
  padding: 0;
`;

const DishCard = styled.li`
  background: var(--primary);
  color: var(--secondary);
  padding: 8px;
  img { width: 100%; height: 167px; object-fit: cover; display: block; }
  h3 { font-size: 16px; font-weight: 900; margin: 8px 0; }
  p { font-size: 14px; line-height: 22px; margin-bottom: 8px; }
`;

const Action = styled.button`
  width: 100%;
  background: var(--secondary);
  color: var(--primary);
  border: 0;
  font-weight: 700;
  font-size: 14px;
  padding: 4px;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: var(--backdrop);
  display: grid;
  place-items: center;
  z-index: 10;
  overflow-y: auto;
  padding: 32px 0;
`;

const Modal = styled.div`
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

const Close = styled.button`
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
  const [cart, setCart] = useState<Dish[]>([]);
  const [open, setOpen] = useState<Dish | null>(null);
  const [cartOpen, setCartOpen] = useState(false);

  const removeOne = (id: number) =>
    setCart((c) => {
      const index = c.findIndex((d) => d.id === id);
      return index === -1 ? c : c.filter((_, i) => i !== index);
    });

  return (
    <>
      <Bar>
        <Container>
          <NavLink to="/">Restaurantes</NavLink>
          <Logo>efood</Logo>
          <CartCount onClick={() => setCartOpen(true)}>
            {cart.length} produto(s) no carrinho
          </CartCount>
        </Container>
      </Bar>
      <Banner $img={r.image}>
        <Container>
          <span>{r.category}</span>
          <h2>{r.name}</h2>
        </Container>
      </Banner>
      <Container>
        <Grid>
          {r.menu.map((d) => (
            <DishCard key={d.id}>
              <img src={d.image} alt={d.name} width={1024} height={640} loading="lazy" />
              <h3>{d.name}</h3>
              <p>{d.description}</p>
              <Action onClick={() => setOpen(d)}>Adicionar ao carrinho</Action>
            </DishCard>
          ))}
        </Grid>
      </Container>
      {open && (
        <Overlay onClick={() => setOpen(null)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <Close aria-label="Fechar" onClick={() => setOpen(null)}>✕</Close>
            <img src={open.image} alt={open.name} />
            <div>
              <h3>{open.name}</h3>
              <p>{open.description}</p>
              <p>Serve: de {open.serves}</p>
              <Action
                onClick={() => {
                  setCart((c) => [...c, open]);
                  setOpen(null);
                  setCartOpen(true);
                }}
              >
                Adicionar ao carrinho - {formatPrice(open.price)}
              </Action>
            </div>
          </Modal>
        </Overlay>
      )}
      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} cart={cart} removeOne={removeOne} />
      <Footer />
    </>
  );
}
