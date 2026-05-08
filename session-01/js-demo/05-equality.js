// =============================================================
// 05 · Igualdade estrita: === vs ==, falsy/truthy
// =============================================================
//
// Em React, regra geral, usa SEMPRE ===.

console.log("[05] equality");

// === Falsy values ===
// Os SEIS valores falsy. Tudo o que NÃO está aqui é truthy.
const falsies = [false, 0, "", null, undefined, NaN];
falsies.forEach((v) =>
  console.log("falsy:", JSON.stringify(v), "Boolean:", Boolean(v)),
);

// === Truthy values that seem falsy ===
const truthies = ["false", "0", " ", [], {}];
truthies.forEach((v) =>
  console.log("truthy:", JSON.stringify(v), "Boolean:", Boolean(v)),
);

// === Equality ===
//  - === é estrita: compara valor e tipo.
//  - == é coerciva: pode converter tipos antes de comparar (coerção implícita).

// == Coercion example ==
console.log('0 == "":', 0 == ""); // true (coerção)
console.log('0 === "":', 0 === ""); // false (sem coerção)

/**
 * Passo-a-passo (baseado no exemplo `0 == ""`).
 *
 * Ideia-chave:
 * - Com `==`, quando comparas um número e uma string, o JS tenta converter a string para número.
 * - `Number("")` dá `0`, logo `0 == ""` torna-se `0 == 0` que é `true`.
 * - Com `===`, não há conversões: número vs string é `false`.
 */
console.log("");
console.log('[coerção] passo-a-passo para 0 == ""');
console.log("Tipos:", typeof 0, "==", typeof "");
console.log('Conversão com Number(""):', Number("")); // 0
console.log("Comparação depois da coerção:", 0 == Number("")); // 0 == 0 é true
console.log("Sem coerção (===):", 0 === ""); // false

// if usa truthiness (não igualdade). Cuidado com inputs:
const input = "0";
if (input) {
  console.log('if ("0") entra'); // entra! "0" é uma string não vazia
}

if (Number(input)) {
  console.log('if (Number("0")) entra');
} else {
  console.log('if (Number("0")) NÃO entra'); // 0 é falsy
}
