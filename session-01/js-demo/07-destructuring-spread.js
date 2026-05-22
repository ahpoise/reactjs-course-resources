// =============================================================
// 07 · Destructuring + spread
// =============================================================
//
// Em React vais ler props com destructuring no topo de quase todos os
// componentes, e atualizar state com spread para não mutar.

console.log("[07] destructuring + spread");

// === Destructuring de objetos ===
const user = { name: "Ana", email: "ana@empresa.com", age: 28 };

// Sem destructuring (3 linhas)
const userName1 = user.name;
const userEmail1 = user.email;
console.log("sem destructuring:", userName1, userEmail1);

// Com destructuring (1 linha)
const { name, email } = user;
console.log("com destructuring:", name, email);

// === Rest: agrupa as restantes propriedades num objeto novo. ===
const { name: restName, ...rest } = user;
console.log("name:", restName); // "Ana"
console.log("rest:", rest); // { email: ..., age: ... }
