// (capítulo: modules) `import` traz os dados de outro ficheiro.
import { users } from "./users.js";

// `let` porque a lista filtrada vai ser reatribuída ao filtrar/ordenar.
let active = users.filter((u) => u.active); // (capítulo: array methods .filter)

function render(list) {
  const ul = document.getElementById("list"); // (capítulo: HTML id selector)
  ul.innerHTML = "";

  for (const user of list) {
    // (capítulo: destructuring) extrair campos do objeto numa só linha.
    const { name, age, tags } = user;
    const li = document.createElement("li");
    li.className = "user";
    // (capítulo: template literals) + (capítulo: optional chaining)
    // `tags?.[0]` é seguro mesmo se `tags` for undefined.
    li.textContent = `${name} (${age}) · ${tags?.[0] ?? "sem tag"}`;
    ul.appendChild(li);
  }

  // Counter sincronizado com a lista renderizada.
  document.getElementById("count").textContent = list.length;
}

render(active);

// (capítulo: array methods + spread) copiar com [...] antes de .sort()
// porque .sort() MUTA o array original.
document.getElementById("btn-sort-name").addEventListener("click", () => {
  active = [...active].sort((a, b) => a.name.localeCompare(b.name));
  render(active);
});

document.getElementById("btn-sort-age").addEventListener("click", () => {
  active = [...active].sort((a, b) => a.age - b.age);
  render(active);
});

// Popular o select com tags únicas (flatMap + Set).
const uniqueTags = [...new Set(users.flatMap((u) => u.tags))].sort();
const select = document.getElementById("filter-tag");
for (const tag of uniqueTags) {
  const option = document.createElement("option");
  option.value = tag;
  option.textContent = tag;
  select.appendChild(option);
}

select.addEventListener("change", (e) => {
  const tag = e.target.value;
  // (capítulo: ternary) devolve um de dois resultados conforme a condição.
  active = tag
    ? users.filter((u) => u.active && u.tags.includes(tag))
    : users.filter((u) => u.active);
  render(active);
});

/* ─────────────────────────────────────────────────────────────────────────
   Outros tópicos do guião. Não correm; ficam aqui como referência.
   ───────────────────────────────────────────────────────────────────────── */

// (capítulo: closures) função que "se lembra" do scope onde foi criada.
// function createCounter() {
//   let count = 0;
//   return () => ++count;
// }
// const counter = createCounter();
// counter(); counter(); counter(); // 1, 2, 3

// (capítulo: === vs ==) em JS moderno, usa sempre ===.
// 0 == "";    // true  (coercion)
// 0 === "";   // false

// (capítulo: short-circuit &&) em JSX, o padrão de conditional rendering.
// const isLoggedIn = true;
// isLoggedIn && console.log("hello");
// // {user && <Profile user={user} />}
