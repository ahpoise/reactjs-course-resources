import { useState, useEffect } from "react";
import { users, tags } from "./users.js";
import { UserCard } from "./components/UserCard.jsx";
import { Section } from "./components/Section.jsx";
import { UserDetail } from "./components/UserDetail.jsx";
import { EmptyState } from "./components/EmptyState.jsx";

function App() {
  const active = users.filter((u) => u.active);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedTag, setSelectedTag] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filtered = selectedTag
    ? active.filter((u) => u.tags?.includes(selectedTag))
    : active;

  const sorted = [...filtered].sort((a, b) =>
    sortBy === "name" ? a.name.localeCompare(b.name) : a.age - b.age
  );

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
            onClick={() => setSortBy("name")}
            className={`rounded border px-3 py-1 text-sm transition ${
              sortBy === "name"
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            ordenar por nome
          </button>
          <button
            type="button"
            onClick={() => setSortBy("age")}
            className={`rounded border px-3 py-1 text-sm transition ${
              sortBy === "age"
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            ordenar por idade
          </button>
          {users.length > 0 && (
            <>
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
            </>
          )}
        </div>
        <p className="text-sm text-gray-600">
          Selecionado: {selectedUser?.name ?? "nenhum"}
        </p>
      </header>
      <main className="mx-auto max-w-5xl p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Section title="Diretório">
            <p className="text-sm text-gray-600 mb-3">
              {filtered.length < users.length
                ? `Mostrando ${filtered.length} de ${users.length} utilizadores.`
                : `${users.length} utilizadores.`}
            </p>
            {sorted.length === 0 ? (
              <EmptyState
                message={
                  selectedTag
                    ? `Nenhum utilizador com a tag '${selectedTag}'.`
                    : "Ainda não há utilizadores."
                }
              />
            ) : (
              <div className="flex flex-col gap-4">
                {sorted.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    avatar={user.avatar}
                    onSelect={setSelectedUser}
                    selected={selectedUser?.id === user.id}
                  />
                ))}
              </div>
            )}
          </Section>
          <Section title="Detalhe">
            {selectedUser ? (
              <UserDetail
                user={selectedUser}
                onClear={() => setSelectedUser(null)}
              />
            ) : (
              <EmptyState message="Seleciona um utilizador para ver detalhes." />
            )}
          </Section>
        </div>
      </main>
    </>
  );
}

export default App;
