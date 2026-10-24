import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Trash2, X } from "lucide-react";
import { styled } from "styled-components";
import { formatPrice, type Dish } from "@/data/restaurants";

export const CartAction = styled.button`
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

const Backdrop = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 20;
  background: var(--backdrop);
`;

const Panel = styled(Dialog.Content)`
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

const Close = styled(Dialog.Close)`
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

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 16px;
`;

const Item = styled.li`
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

const Remove = styled.button`
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

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-weight: 700;
  margin: 40px 0 16px;
`;

const Form = styled.form`
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

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

const Actions = styled.div`
  display: grid;
  gap: 8px;
  margin-top: 16px;
`;

const Review = styled.div`
  p { line-height: 22px; margin: 0 0 16px; overflow-wrap: anywhere; }
`;

type Delivery = { name: string; address: string; city: string; zip: string; number: string; extra: string };
type Props = { open: boolean; onOpenChange: (open: boolean) => void; cart: Dish[]; removeOne: (id: number) => void };

export function CartDrawer({ open, onOpenChange, cart, removeOne }: Props) {
  const [step, setStep] = useState<"cart" | "delivery" | "payment" | "review">("cart");
  const [delivery, setDelivery] = useState<Delivery>({ name: "", address: "", city: "", zip: "", number: "", extra: "" });
  const total = cart.reduce((sum, dish) => sum + dish.price, 0);
  const grouped = new Map<number, { dish: Dish; qty: number }>();
  cart.forEach((dish) => {
    const entry = grouped.get(dish.id);
    if (entry) entry.qty += 1;
    else grouped.set(dish.id, { dish, qty: 1 });
  });
  const field = (key: keyof Delivery, label: string, autoComplete: string, optional = false) => (
    <label>{label}
      <input name={key} value={delivery[key]} autoComplete={autoComplete} required={!optional}
        pattern={key === "zip" ? "[0-9]{5}-?[0-9]{3}" : undefined}
        title={key === "zip" ? "Informe um CEP com 8 números" : undefined}
        inputMode={key === "zip" ? "numeric" : undefined}
        onChange={(event) => setDelivery((current) => ({ ...current, [key]: event.target.value }))} />
    </label>
  );

  return (
    <Dialog.Root open={open} onOpenChange={(value) => { onOpenChange(value); if (!value) setStep("cart"); }}>
      <Dialog.Portal>
        <Backdrop />
        <Panel aria-describedby={undefined}>
          <Close aria-label="Fechar carrinho"><X size={18} /></Close>
          <Dialog.Title>{step === "cart" ? "Carrinho" : step === "delivery" ? "Entrega" : step === "payment" ? `Pagamento — Valor a pagar ${formatPrice(total)}` : "Revisão do pedido"}</Dialog.Title>
          {step === "cart" && (cart.length === 0 ? <p>O carrinho está vazio.</p> : <>
            <List>{[...grouped.values()].map(({ dish, qty }) => <Item key={dish.id}>
              <img src={dish.image} alt={dish.name} />
              <div><h3>{dish.name}</h3><p>{qty} × {formatPrice(dish.price)}</p></div>
              <Remove type="button" aria-label={`Remover uma unidade de ${dish.name}`} title={`Remover uma unidade de ${dish.name}`} onClick={() => removeOne(dish.id)}><Trash2 size={16} /></Remove>
            </Item>)}</List>
            <Total><span>Valor total</span><span>{formatPrice(total)}</span></Total>
            <CartAction onClick={() => setStep("delivery")}>Continuar com a entrega</CartAction>
          </>)}
          {step === "delivery" && <Form onSubmit={(event) => { event.preventDefault(); setStep("payment"); }}>
            {field("name", "Quem irá receber", "name")}
            {field("address", "Endereço", "street-address")}
            {field("city", "Cidade", "address-level2")}
            <Row>{field("zip", "CEP", "postal-code")}{field("number", "Número", "off")}</Row>
            {field("extra", "Complemento (opcional)", "address-line2", true)}
            <Actions><CartAction type="submit">Continuar com o pagamento</CartAction><CartAction type="button" onClick={() => setStep("cart")}>Voltar para o carrinho</CartAction></Actions>
          </Form>}
          {step === "payment" && <Form onSubmit={(event) => { event.preventDefault(); setStep("review"); }}>
            <p>Prévia do formulário: não há cobrança nem envio de pedido. Use apenas dados fictícios.</p>
            <label>Nome no cartão<input name="cardName" required autoComplete="off" /></label>
            <Row>
              <label>Número do cartão<input name="cardNumber" required inputMode="numeric" autoComplete="off" pattern="[0-9 ]{13,23}" maxLength={23} title="Use entre 13 e 19 números fictícios" /></label>
              <label>CVV<input name="cvv" required inputMode="numeric" autoComplete="off" pattern="[0-9]{3,4}" maxLength={4} /></label>
            </Row>
            <Row>
              <label>Mês de vencimento<input name="month" required inputMode="numeric" autoComplete="off" pattern="0[1-9]|1[0-2]" maxLength={2} placeholder="MM" /></label>
              <label>Ano de vencimento<input name="year" required inputMode="numeric" autoComplete="off" pattern="[0-9]{4}" maxLength={4} placeholder="AAAA" /></label>
            </Row>
            <Actions><CartAction type="submit">Finalizar pedido</CartAction><CartAction type="button" onClick={() => setStep("delivery")}>Voltar para a edição de endereço</CartAction></Actions>
          </Form>}
          {step === "review" && <Review>
            <p><strong>{delivery.name}</strong><br />{delivery.address}, {delivery.number}{delivery.extra ? ` — ${delivery.extra}` : ""}<br />{delivery.city} — CEP {delivery.zip}</p>
            <List>{[...grouped.values()].map(({ dish, qty }) => <Item key={dish.id}><img src={dish.image} alt={dish.name} /><div><h3>{dish.name}</h3><p>{qty} × {formatPrice(dish.price)}</p></div></Item>)}</List>
            <Total><span>Valor total</span><span>{formatPrice(total)}</span></Total>
            <p>Esta é uma prévia. Nenhum pedido foi enviado e nenhum pagamento foi realizado.</p>
            <CartAction onClick={() => { setStep("cart"); onOpenChange(false); }}>Concluir</CartAction>
          </Review>}
        </Panel>
      </Dialog.Portal>
    </Dialog.Root>
  );
}