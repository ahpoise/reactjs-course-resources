// =============================================================
// 09 · Modules: import / export
// =============================================================
//
// ES Modules é o sistema padrão de organização em JS moderno. Cada ficheiro
// é um módulo: declara o que exporta, e outros módulos importam o que
// precisam. Em React, cada componente costuma viver no seu próprio ficheiro
// e exporta-se para ser utilizado em outros ficheiros.

import { users } from "./users.js";

console.log("[09] modules");
console.log("imported users:", users);

// `import { users } from "./users.js"` faz dois pedidos ao runtime:
//   1) Lê o módulo ./users.js (uma vez por sessão; é cached).
//   2) Extrai a propriedade exportada `users`.
//
// O nome entre chavetas TEM de bater certo com o nome exportado em users.js.
// Para renomear no import: `import { users as people } from "./users.js"`.
