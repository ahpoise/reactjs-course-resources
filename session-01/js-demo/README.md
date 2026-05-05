# Sessão 01 · JS demo

Estende o exemplo de [html-css-demo](../html-css-demo) com a camada de JS coberta na revisão. A página é a mesma; o que muda é que agora os `<li>`, o counter, a ordenação e o filtro são todos conduzidos por código, não hardcoded.

## Como correr

```bash
cd session-01/js-demo
python3 -m http.server 8080 --bind 127.0.0.1
```

Abre [http://127.0.0.1:8080](http://127.0.0.1:8080). Não precisas de toolchain: o `<script type="module">` carrega o `app.js`, que importa os dados de `users.js`.

> **Importante.** Tem de ser servido por HTTP. Abrir `index.html` direto do disco (`file://`) não corre módulos ES (`import` falha por CORS).

## O que observar

- Counter no topo arranca a `3` (escrito por JS, não pelo HTML).
- Cada `<li>` é construído com _template literal_ + _optional chaining_: `${name} (${age}) · ${tags?.[0] ?? "sem tag"}`.
- "Ordenar por nome" e "Ordenar por idade" reordenam a lista; o counter mantém-se sincronizado porque a sua atualização vive dentro de `render()`.
- O `<select>` é populado em runtime com as _tags_ únicas extraídas via `flatMap` + `Set`. Escolher uma _tag_ filtra por essa _tag_; "todas" repõe a lista completa.
- O `Bruno` (inativo) nunca aparece: `users.filter((u) => u.active)` está sempre na cadeia.

## Tópicos cobertos no código

| Tópico da revisão                      | Onde vive na demo                                                     |
| -------------------------------------- | --------------------------------------------------------------------- |
| Sintaxe moderna · arrow functions      | Todos os _callbacks_ em `app.js`                                      |
| Sintaxe moderna · template literals    | `${name} (${age})` no texto do `<li>`                                 |
| Sintaxe moderna · optional chaining    | `tags?.[0]` ao ler a primeira _tag_                                   |
| Sintaxe moderna · ternary              | `tag ? users.filter(...) : users.filter(...)` no _handler_ do filtro  |
| Sintaxe moderna · short-circuit `&&`   | Snippet comentado no rodapé do `app.js`                               |
| Closures                               | `createCounter` no rodapé "Outros tópicos do guião"                   |
| `===` vs `==` + falsy                  | Snippet comentado no rodapé                                           |
| Array methods (`.filter`, `.map`, `.flatMap`) | _Pipeline_ de render e construção do `<select>` de _tags_      |
| _Array_ mutation _caveat_              | `[...active].sort(...)` nos _handlers_ de ordenação                   |
| Modules (`import` / `export`)          | `users.js` exporta; `app.js` importa                                  |
| Destructuring                          | `const { name, age, tags } = user;` dentro do _loop_ de render        |
| Spread                                 | `[...active]`, `[...new Set(...)]`                                    |

## Próximo passo

Em React, este `render(list)` desaparece: descreves a UI como uma função do _state_, e a sincronização do counter acontece de graça. A próxima sessão é onde isso começa.
