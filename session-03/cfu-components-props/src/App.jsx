import { users, tags } from "./users.js";
import { UserCard } from "./components/UserCard.jsx";
import { Section } from "./components/Section.jsx";

function App() {
  const active = users.filter((u) => u.active);

  return (
    <>
      <header className="space-y-3 border-b border-gray-200 p-4">
        <h1 className="text-xl font-semibold">
          Utilizadores ativos:{" "}
          <span className="text-red-600">{active.length}</span>
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => console.log("ordenar por nome")}
            className="rounded border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100"
          >
            ordenar por nome
          </button>
          <button
            type="button"
            onClick={() => console.log("ordenar por idade")}
            className="rounded border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100"
          >
            ordenar por idade
          </button>
          <label htmlFor="filter-tag" className="text-sm text-gray-600">
            Filtrar por tag
          </label>
          <select
            id="filter-tag"
            onChange={(e) => console.log("filtro:", e.target.value)}
            className="rounded border border-gray-300 px-2 py-1 text-sm"
          >
            <option value="">todas</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </header>
      <main className="mx-auto max-w-2xl p-4">
        <Section title="Diretório">
          <div className="flex flex-col gap-4">
            {active.map((user) => (
              <UserCard key={user.id} user={user} avatar={user.avatar} />
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}

export default App;
