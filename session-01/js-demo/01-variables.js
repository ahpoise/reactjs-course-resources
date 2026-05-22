// =============================================================
// 01 · Variables: var, let, const
// =============================================================
//
// === Regra prática ===
//  - const por defeito.
//  - let quando precisas de fazer _reassign_.
//  - normalmente variáveis sãpo declaradas em camelCase

console.log("[01] variables");

// === const ===
//  - Tem de ser inicializada na declaração (sem initializer => SyntaxError).
//  - Não permite reassign.
//  - Mas o conteúdo de objetos/arrays continua mutável.

const num = 3;
console.log("const num =", num);
// const x;            // SyntaxError: Missing initializer in const declaration
// num = 4;            // TypeError: Assignment to constant variable

const user = { name: "Ana" };
user.name = "Bruno"; // OK, o objeto continua mutável
console.log("const user mutado:", user);

// === let ===
//  - Pode ser declarada sem value.
//  - Permite _reassign_.
//  - Não pode ser re-declarada no mesmo scope.

let count;
console.log("let antes do assign:", count);
count = 0;
count = count + 1; // reassign
console.log("let depois do reassign:", count);
// let count = 7;    // SyntaxError: Identifier 'count' has already been declared

// === var (legacy) ===
//  - Pode ser declarada sem value (fica `undefined`).
//  - Permite reassign e re-declarar no mesmo scope.
//  - Function-scoped, não block-scoped.

var legacyName = "Ana";
var legacyName = "Bruno"; // re-declare permitido (zero warnings)
legacyName = "Carlos"; // reassign permitido
console.log("var legacyName:", legacyName);

// =============================================================
// 02 · Scope
// =============================================================
//
// Scope é a parte do código que "vê" uma variável. Em JS moderno há dois
// tipos:
//
//  - Block scope (let, const): a variável só existe dentro do bloco { }
//    onde foi declarada.
//  - Function scope (var): a variável existe dentro da função inteira,
//    mesmo que tenha sido declarada dentro de um bloco { } interior.

function ifScope() {
  if (true) {
    let blockLet = "vivo só dentro do if";
    var blockVar = "leaked para fora do if";
    console.log("dentro do if:", blockLet);
  }
  // console.log(blockLet); // ReferenceError: blockLet is not defined
  console.log("var visto fora do if:", blockVar);
}
ifScope();
