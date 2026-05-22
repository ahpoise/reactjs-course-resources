// =============================================================
// 02 · Functions: declarations, expressions, arrow functions
// =============================================================
//
// Em React, vais escrever maioritariamente arrow functions (componentes,
// handlers, callbacks).

console.log("[02] functions");

// === Function declaration ===
function double(n) {
  return n * 2;
}

console.log("declaration before declared:", double(5));

// === Function expression ===
// (atribuição de uma função a uma variável).
const triple = function (n) {
  return n * 3;
};
console.log("expression triple(5):", triple(5));

// === Arrow function ===
// Arrow com corpo: precisas de `return` explícito.
const add = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log("arrow add(2, 3):", add(2, 3));

// Arrow function. Sintaxe compacta.
const square = (n) => n * n; // implicit return (sem curly braces)
console.log("arrow square(5):", square(5));
