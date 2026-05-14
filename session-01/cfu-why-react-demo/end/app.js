import { users, tags } from "./users.js";

function render(list) {
  const ul = document.getElementById("list");
  ul.innerHTML = "";
  for (const user of list) {
    const li = document.createElement("li");
    li.textContent = `${user.name} (${user.age})`;
    ul.appendChild(li);
  }
}

let active = users.filter((u) => u.active);
render(active);

// Counter atualizado FORA do render(). Repara no que acontece ao filtrar.
document.getElementById("count").textContent = active.length;

document.getElementById("btn-sort-name").addEventListener("click", () => {
  active = [...active].sort((a, b) => a.name.localeCompare(b.name));
  render(active);

  document.getElementById("count").textContent = active.length;
});

document.getElementById("btn-sort-age").addEventListener("click", () => {
  active = [...active].sort((a, b) => a.age - b.age);
  render(active);

  document.getElementById("count").textContent = active.length;
});

const select = document.getElementById("filter-tag");
for (const tag of tags) {
  const option = document.createElement("option");
  option.value = tag;
  option.textContent = tag;
  select.appendChild(option);
}

select.addEventListener("change", (e) => {
  const tag = e.target.value;
  active = users
    .filter((u) => u.active)
    .filter((u) => !tag || u.tags.includes(tag));
  render(active);

  document.getElementById("count").textContent = active.length;
});
