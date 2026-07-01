import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { UserCard } from "../components/UserCard.jsx";
import { EmptyState } from "../components/EmptyState.jsx";
import { tags } from "../users.js";
import { getUsers } from "../api/users.js";
import { usersLoading, usersLoaded, usersFailed } from "../store/usersSlice.js";

export function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const status = useSelector((state) => state.users.status);
  const [selectedTag, setSelectedTag] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Fetch só quando o status é idle
  useEffect(() => {
    if (status !== "idle") return;
    dispatch(usersLoading());
    getUsers()
      .then((data) => dispatch(usersLoaded(data)))
      .catch(() => dispatch(usersFailed()));
  }, [status, dispatch]);

  // Derivado no render: filtra + ordena a partir do state, sem state à parte.
  const filtered = selectedTag
    ? users.filter((u) => u.tags?.includes(selectedTag))
    : users;

  const sorted = [...filtered].sort((a, b) =>
    sortBy === "name" ? a.name.localeCompare(b.name) : a.age - b.age,
  );

  if (status === "idle" || status === "loading") {
    return (
      <div className="max-w-3xl mx-auto px-4 py-6">
        <p className="text-gray-600">A carregar utilizadores...</p>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="max-w-3xl mx-auto px-4 py-6">
        <p className="text-red-600">
          Não foi possível carregar os utilizadores. Tenta novamente.
        </p>
      </div>
    );
  }

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
