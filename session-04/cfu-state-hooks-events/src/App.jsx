import { useState, useEffect } from "react";
import { users, tags } from "./users.js";
import { UserCard } from "./components/UserCard.jsx";
import { Section } from "./components/Section.jsx";

function App() {
  const active = users.filter((u) => u.active);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedTag, setSelectedTag] = useState("");

  const filtered = selectedTag
    ? active.filter((u) => u.tags?.includes(selectedTag))
    : active;

  useEffect(() => {
    document.title = selectedUser
      ? "Diretório: " + selectedUser.name
      : "Diretório";
  }, [selectedUser]);

  return (
    <>
      <header className="space-y-3 border-b border-gray-200 p-4">
        <h1 className="text-xl font-semibold">
          Utilizadores ativos:{" "}
          <span className="text-red-600">{filtered.length}</span>
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
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
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
        <p className="text-sm text-gray-600">
          Selecionado: {selectedUser?.name ?? "nenhum"}
        </p>
      </header>
      <main className="mx-auto max-w-2xl p-4">
        <Section title="Diretório">
          <div className="flex flex-col gap-4">
            {filtered.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                avatar={user.avatar}
                onSelect={setSelectedUser}
                selected={selectedUser?.id === user.id}
              />
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}

export default App;
