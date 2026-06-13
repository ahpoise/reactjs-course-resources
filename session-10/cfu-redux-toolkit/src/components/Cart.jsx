import { useSelector, useDispatch } from "react-redux";
import { incremented, decremented, removed } from "../store/cartSlice.js";

export function Cart() {
  // Lê a fatia cart; só re-renderiza quando essa fatia muda.
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cart.length === 0) return <p className="text-gray-500">O carrinho está vazio.</p>;

  return (
    <ul className="space-y-2">
      {cart.map((line) => (
        <li key={line.id} className="flex items-center gap-2">
          <span className="flex-1">
            {line.name}: {line.quantity}
          </span>
          <button
            type="button"
            onClick={() => dispatch(incremented(line.id))}
            className="rounded border px-2"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => dispatch(decremented(line.id))}
            className="rounded border px-2"
          >
            -
          </button>
          <button
            type="button"
            onClick={() => dispatch(removed(line.id))}
            className="text-sm text-red-600 hover:underline"
          >
            remover
          </button>
        </li>
      ))}
    </ul>
  );
}
