import { useSelector } from "react-redux";

export function Total() {
  // O useSelector pode devolver um valor derivado, não só uma fatia direta.
  const total = useSelector((state) =>
    state.cart.reduce((sum, line) => sum + line.price * line.quantity, 0),
  );

  return <p className="mt-3 font-bold">Total: {total} euros</p>;
}
