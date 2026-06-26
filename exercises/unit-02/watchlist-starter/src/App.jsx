import { NavBar } from "./components/NavBar.jsx";
import { items } from "./data.js";
import { WatchlistCard } from "./components/WatchlistCard.jsx";

function App() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">A minha watchlist</h1>

        {/* Filtro já no sítio, ainda por ligar (Step 5). */}
        <div className="mb-6">
          <select className="rounded border border-gray-300 px-2 py-1 text-sm">
            <option value="all">Todos</option>
            <option value="to-watch">Por ver</option>
            <option value="watched">Vistos</option>
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <WatchlistCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
