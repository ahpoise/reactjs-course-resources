import { useDispatch } from "react-redux";
import { added } from "../store/cartSlice.js";

const products = [
  { id: 1, name: "Caderno", price: 4 },
  { id: 2, name: "Caneta", price: 1 },
  { id: 3, name: "Mochila", price: 25 },
];

// Só escreve no store: usa apenas o useDispatch, não lê o carrinho.
export function Catalog() {
  const dispatch = useDispatch();

  return (
    <ul className="space-y-2">
      {products.map((p) => (
        <li key={p.id} className="flex items-center justify-between">
          <span>
            {p.name} ({p.price} euros)
          </span>
          <button
            type="button"
            onClick={() => dispatch(added(p))}
            className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
          >
            Adicionar
          </button>
        </li>
      ))}
    </ul>
  );
}
