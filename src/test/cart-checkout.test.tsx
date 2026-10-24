import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CartDrawer } from "@/components/CartDrawer";

afterEach(cleanup);
const dish = { id: 1, name: "Combo teste", description: "", image: "/dish.jpg", price: 89.9, serves: "2" };

describe("Cart checkout", () => {
  it("groups repeated products and removes one unit", () => {
    const removeOne = vi.fn();
    render(<CartDrawer open onOpenChange={vi.fn()} cart={[dish, dish]} removeOne={removeOne} />);
    expect(screen.getByText(/2 ×/)).toBeTruthy();
    expect(screen.getByText(/179,80/)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Remover uma unidade de Combo teste" }));
    expect(removeOne).toHaveBeenCalledWith(1);
  });

  it("keeps delivery information when returning from payment", () => {
    render(<CartDrawer open onOpenChange={vi.fn()} cart={[dish]} removeOne={vi.fn()} />);
    fireEvent.click(screen.getByRole("button", { name: "Continuar com a entrega" }));
    fireEvent.change(screen.getByLabelText("Quem irá receber"), { target: { value: "Maria" } });
    fireEvent.submit(screen.getByLabelText("Quem irá receber").closest("form") as HTMLFormElement);
    fireEvent.click(screen.getByRole("button", { name: "Voltar para a edição de endereço" }));
    expect((screen.getByLabelText("Quem irá receber") as HTMLInputElement).value).toBe("Maria");
  });
});