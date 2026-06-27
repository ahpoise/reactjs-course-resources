import { useDispatch } from "react-redux";
import { toggledWatched, removed } from "../store/watchlistSlice.js";

export function WatchlistCard({ item }) {
  const dispatch = useDispatch();
  return (
    <article className="rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <h2 className="font-semibold text-gray-900">{item.title}</h2>
        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
          {item.type === "movie" ? "Filme" : "Série"}
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-500">{item.year}</p>
      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => dispatch(toggledWatched(item.id))}
          className={`rounded border px-3 py-1 text-sm ${
            item.watched
              ? "border-green-600 bg-green-600 text-white hover:bg-green-700"
              : "border-gray-300 text-gray-600 hover:bg-gray-100"
          }`}
        >
          {item.watched ? "Visto" : "Por ver"}
        </button>
        <button
          type="button"
          onClick={() => dispatch(removed(item.id))}
          aria-label="Apagar"
          title="Apagar"
          className="rounded border border-red-300 px-2 py-1 text-base hover:bg-red-50"
        >
          🗑️
        </button>
      </div>
    </article>
  );
}
