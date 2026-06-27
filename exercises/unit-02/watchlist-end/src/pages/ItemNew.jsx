import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { WatchlistForm } from "../components/WatchlistForm.jsx";
import { added } from "../store/watchlistSlice.js";

export function ItemNew() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(values) {
    // Gera um id novo com timestamp (ms desde epoch).
    dispatch(added({ ...values, id: Date.now(), watched: false }));
    navigate("/");
  }

  return (
    <main className="mx-auto max-w-md px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        Adicionar à watchlist
      </h1>
      <WatchlistForm onSubmit={handleSubmit} />
    </main>
  );
}
