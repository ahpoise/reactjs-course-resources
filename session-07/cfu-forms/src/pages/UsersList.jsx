import { useState } from "react";
import { Link } from "react-router";
import { UserCard } from "../components/UserCard.jsx";
import { EmptyState } from "../components/EmptyState.jsx";
import { tags } from "../users.js";

export function UsersList({ users }) {
  const [selectedTag, setSelectedTag] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filtered = selectedTag
    ? users.filter((u) => u.tags?.includes(selectedTag))
    : users;

  const sorted = [...filtered].sort((a, b) =>
    sortBy === "name" ? a.name.localeCompare(b.name) : a.age - b.age,
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="mb-4">
        <Link to="/users/new" className="text-blue-600 hover:underline">
          + Novo utilizador
        </Link>
      </div>
      <header className="flex items-center gap-2 mb-4">
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
      </header>
      {sorted.length === 0 ? (
        <EmptyState message="Nenhum utilizador encontrado." />
      ) : (
        <div className="flex flex-col gap-4">
          {sorted.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
