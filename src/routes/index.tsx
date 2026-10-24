import { createFileRoute, Link } from "@tanstack/react-router";
import { styled } from "styled-components";
import { Container, Footer, HeaderBar, Logo } from "@/components/Layout";
import { restaurants } from "@/data/restaurants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "efood — Restaurantes perto de você" },
      { name: "description", content: "Viva experiências gastronômicas no conforto da sua casa." },
      { property: "og:title", content: "efood — Restaurantes perto de você" },
      { property: "og:description", content: "Viva experiências gastronômicas no conforto da sua casa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const Hero = styled(HeaderBar)`
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

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 48px 80px;
  margin-top: 80px;
  list-style: none;
  padding: 0;
`;

const Card = styled.li`
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

const Tags = styled.div`
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

const Body = styled.div`
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

const Button = styled.div`
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
  return (
    <>
      <Hero>
        <Container>
          <Logo>efood</Logo>
          <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
        </Container>
      </Hero>
      <Container>
        <Grid>
          {restaurants.map((r) => (
            <Card key={r.id}>
              <img src={r.image} alt={r.name} width={1024} height={640} loading="lazy" />
              <Tags>
                {r.highlight && <span>Destaque da semana</span>}
                <span>{r.category}</span>
              </Tags>
              <Body>
                <h3>
                  {r.name} <span>{r.rating} ★</span>
                </h3>
                <p>{r.description}</p>
                <Button>
                  <Link to="/restaurante/$id" params={{ id: r.id }}>
                    Saiba mais
                  </Link>
                </Button>
              </Body>
            </Card>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
