// =============================================================
// 08 · Array methods: .filter, .map, .reduce, .find
// =============================================================
//
// Estes quatro recebem um array, devolvem um array NOVO (.filter, .map) ou
// um valor (.reduce, .find), e nunca mutam o original. Em React, .map é
// habitualmente utilizado para iterar sobre arrays.

import { users } from "./users.js";

console.log("[08] array methods");

// .filter: devolve apenas os elementos que passam no predicate.
// Nova array pode ter menos elementos que a original.
const active = users.filter((u) => u.active);
console.log("filter active:", active);

// .map: transforma cada elemento.
// Nova array tem os mesmos elementos que a original.
const names = users.map((u) => u.name);
console.log("map names:", names);

// Compor filter().map() é um padrão de todos os dias em React.
const activeNames = users.filter((u) => u.active).map((u) => u.name);
console.log("active names:", activeNames);

// .reduce: acumula. Argumentos: (acumulador, elemento) => novo acumulador,
// valor inicial.
const totalAge = users
  .filter((u) => u.active)
  .reduce((sum, u) => sum + u.age, 0);
console.log("total age (active):", totalAge);

// .find: devolve o primeiro elemento que passa no predicate, ou undefined.
const ana = users.find((u) => u.name === "Ana");
console.log("find Ana:", ana);

const missing = users.find((u) => u.name === "José");
console.log("find missing:", missing); // undefined

// Mutation caveat
//
// .filter, .map, .reduce, .find devolvem novo (seguros para state React).
// .sort, .reverse, .push, .pop, .shift, .unshift, .splice MUTAM (cuidado).

// Erro comum: .sort() muta in-place.
const ages = [42, 28, 35];
ages.sort(); // ages foi alterado
console.log("sort mutou:", ages);

// Solução recomendada: copia primeiro, por exemplo, com spread.
const ages2 = [42, 28, 35];
const sorted = [...ages2].sort((a, b) => a - b);
console.log("original intacto:", ages2);
console.log("sorted (novo):", sorted);
