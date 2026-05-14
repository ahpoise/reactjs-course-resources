# Components & Props + Tailwind - Sessão 3

## O que muda em relação à Sessão 2

1. **Novo componente `<UserCard>`** (`src/components/UserCard.jsx`). O corpo do `<li>` inline em `App.jsx` é extraído para um _function component_ que recebe `user` por _prop_ via _destructuring_ nos parâmetros. A `key` passa do `<li>` para `<UserCard key={user.id} ...>`.
2. **Nova _prop_ `avatar` com _default value_.** `<UserCard>` ganha um segundo _prop_ `avatar` com um placeholder por _default_. `users.js` ganha um campo `avatar` opcional na Ana e na Diana (URL `pravatar.cc`); o Carlos fica sem o campo, por isso o _default_ entra em ação só para ele.
3. **Novo componente `<Section>`** (`src/components/Section.jsx`). Recebe `title` + `children` e devolve uma `<section>` com `<h2>{title}</h2>` por cima dos `children`. `App.jsx` envolve o `<ul>` em `<Section title="Diretório">`.
4. **Tailwind v4 instalado.** `npm install tailwindcss @tailwindcss/vite`, plugin `tailwindcss()` no `vite.config.js`, e `src/index.css` passa a uma única linha: `@import "tailwindcss";`. O CSS personalizado da Sessão 2 desaparece.
5. **Estilização com Tailwind.** `<UserCard>` passa a `<div>` (border, rounded, padding, shadow, hover); `<ul>` passa a `<div className="flex flex-col gap-4">`; `<Section>` ganha _spacing_; `<header>` ganha `flex flex-wrap`.
