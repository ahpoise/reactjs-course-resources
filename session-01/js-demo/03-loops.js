// =============================================================
// 03 · Loops: for, while, for...of, for...in, .forEach
// =============================================================
//
// Em React, a forma standard de "fazer loop" para renderizar é .map().
// Ainda assim, conhecer os loops clássicos é útil. Aparecem em código de
// preparação de dados, side effects e outros.

console.log("[03] loops");

const users = [
  { name: "Ana", active: true },
  { name: "Bruno", active: false },
  { name: "Carlos", active: true },
];

// for clássico
for (let i = 0; i < users.length; i++) {
  console.log("for:", i, users[i].name);
}

// while: corre enquanto a condição for truthy.
let n = 3;
while (n > 0) {
  console.log("while:", n);
  n = n - 1;
}

// do ... while: corre pelo menos uma vez, mesmo se a condição for falsy.
do {
  console.log("do...while:", n);
  n = n - 1;
} while (n > 0);

// .forEach: método de array.
users.forEach((user, index) => {
  console.log("forEach:", index, user.name);
});

// for...of: itera valores de um iterável (array, string, Set, Map).
for (const user of users) {
  console.log("for...of:", user.name);
}

// for...in: itera CHAVES de um objeto. Cuidado com arrays (devolve índices
// como strings + propriedades enumeráveis herdadas). Usa for...of em arrays.
const meta = { name: "Ana", age: 28 };
for (const key in meta) {
  console.log("for...in:", key, "=", meta[key]);
}
