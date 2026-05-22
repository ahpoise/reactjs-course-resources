# Sessão 01 · JS demo

Playground com os tópicos de JavaScript essenciais para o resto do curso. Cada ficheiro `0X-….js` cobre **um** tópico, com `console.log` em vez de UI. Não há _app_ a correr; o foco é a consola.

## Como correr

```bash
cd session-01/js-demo
python3 -m http.server 8080 --bind 127.0.0.1
```

Abre [http://127.0.0.1:8080](http://127.0.0.1:8080) e a consola do _browser_ (DevTools → Console). O `index.html` tem um `<script type="module">` por tópico; só **um** está descomentado de cada vez. Para mudar de tópico, edita o HTML, descomenta o ficheiro que queres correr, comenta o anterior, recarrega.

> **Importante.** Tem de ser servido por HTTP. Abrir `index.html` direto do disco (`file://`) não corre módulos ES (`import` falha por CORS).

## Ficheiros, em ordem pedagógica

| #  | Ficheiro                       | O que cobre                                                                |
| -- | ------------------------------ | -------------------------------------------------------------------------- |
| 01 | `01-variables.js`              | `var` / `let` / `const`, _function vs block scope_, _hoisting_, TDZ        |
| 02 | `02-functions.js`              | _Declarations_ vs _expressions_ vs _arrow_, default + rest parameters      |
| 03 | `03-loops.js`                  | `for`, `while`, `for...of`, `for...in`, `.forEach` (e quando usar `.map`)  |
| 04 | `04-modern-syntax.js`          | Template literals, `?.`, `??`, _ternary_, `&&` / `\|\|` _short-circuit_       |
| 05 | `05-equality.js`               | `===` vs `==`, _falsy_ / _truthy_                                          |
| 06 | `06-closures.js`               | `createCounter`, _closures_ em loops com `let` vs `var`                    |
| 07 | `07-destructuring-spread.js`   | _Destructuring_ (objeto / _array_ / _rename_ / _default_ / _rest_) + _spread_ |
| 08 | `08-array-methods.js`          | `.filter`, `.map`, `.reduce`, `.find` + _mutation caveat_ (`[...arr].sort()`) |
| 09 | `09-modules.js`                | `import` / `export`, _named_ vs _default_                                  |

`users.js` exporta os dados partilhados (4 utilizadores com `active` + `tags`); só `08` e `09` o importam.

## O que esperar na consola

Cada ficheiro começa com `console.log("── 0X · <tópico> ──")` para ser fácil de localizar o início. Lê o código de cima a baixo enquanto vais saltando linhas na consola — comentários explicam o porquê de cada linha.

## Próximo passo

Na próxima sessão deixamos de mexer no DOM à mão; entra Vite + React e o primeiro componente.
