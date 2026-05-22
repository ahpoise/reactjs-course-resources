import { users, tags } from "./users.js";

function App() {
  const active = users.filter((u) => u.active);

  const handleOrderByAge = () => {
    console.log("ordenar por idade");
  };

  return (
    <>
      <header>
        <h1>
          Utilizadores ativos: <span id="count">{active.length}</span>
        </h1>
        <button type="button" onClick={() => console.log("ordenar por nome")}>
          ordenar por nome
        </button>
        <button type="button" onClick={handleOrderByAge}>
          ordenar por idade
        </button>
        <label htmlFor="filter-tag">Filtrar por tag</label>
        <select
          id="filter-tag"
          onChange={(e) => console.log("filtro:", e.target.value)}
        >
          <option value="">todas</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </header>
      <main>
        <ul>
          {active.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age})
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
