// =============================================================
// 04 · Sintaxe moderna: template literals, ?., ternary, && e ||
// =============================================================
//
// Estes operadores aparecem em quase todo o código React. Reconhecê-los de
// imediato é o que separa "leio React com atrito" de "leio React fluente".

console.log("[04] modern syntax");

// === Template literals ===
// Strings com interpolação, em backticks.
const name = "Ana";
const age = 28;
const greeting = `Olá, ${name}, tens ${age} anos.`;
console.log(greeting);

// Multi-linha: backticks preservam newlines.
const multi = `
  linha 1
  linha 2
`;
console.log(multi);

// === Optional chaining (?.) ===
// acesso seguro a propriedades, índices, métodos
// que podem não existir. Devolve undefined em vez de atirar TypeError.
const user = { name: "Ana", address: null };

// user.address.street;     // erro: TypeError
console.log(user.address?.street); // undefined (sem erro)
console.log(user.tags?.[0]); // undefined (sem erro)
console.log(user.greet?.()); // undefined (sem erro)

// === Ternary (? :) ===
//  if em forma de expressão.
const isAdult = age >= 18 ? "adulto" : "menor";
console.log("ternary:", isAdult);

// Em React vais ver ternary a serem utilizados, por exemplo, para escolher entre dois componentes:
//   {isLoading ? <Spinner /> : <Content />}

// === Short-circuit && / || ===
//   A && B  se A for truthy, devolve B; senão A.
//   A || B  se A for truthy, devolve A; senão B.
const isLoggedIn = true;
console.log("&& side effect:", isLoggedIn && console.log("hello"));

const fallback = null || "anónimo";
console.log("|| fallback:", fallback); // "anónimo"

// Em React, && é o padrão para conditional rendering:
//   {user && <Profile user={user} />}
