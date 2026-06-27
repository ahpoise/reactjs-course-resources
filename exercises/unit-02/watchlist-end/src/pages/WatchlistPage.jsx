import { useState } from "react";
import { useSelector } from "react-redux";
import { WatchlistCard } from "../components/WatchlistCard.jsx";

export function WatchlistPage() {
  const items = useSelector((state) => state.watchlist);
  const [filter, setFilter] = useState("all");

  const visible = items.filter((item) => {
    if (filter === "to-watch") return !item.watched;
    if (filter === "watched") return item.watched;
    return true;
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-4 text-2xl font-bold text-gray-900">
        A minha watchlist
      </h1>

      <div className="mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded border border-gray-300 px-2 py-1 text-sm"
        >
          <option value="all">Todos</option>
          <option value="to-watch">Por ver</option>
          <option value="watched">Vistos</option>
        </select>
      </div>

      {visible.length === 0 ? (
        <p className="text-gray-500">Nenhum item.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {visible.map((item) => (
            <WatchlistCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </main>
  );
}
