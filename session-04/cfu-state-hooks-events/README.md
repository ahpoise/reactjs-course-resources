# State, Hooks & Events - Sessão 4

Estado final do CFU da Sessão 4: o Diretório da Sessão 3 ganha interatividade. Clicar num `<UserCard>` guarda o utilizador selecionado em _state_, há destaque visual com Tailwind, `useEffect` sincroniza `document.title`, e um _input_ _controlled_ filtra a lista por nome.

## Como correr

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/` e:

- Clica num _card_ para o selecionar (destaque visual via Tailwind, `ring-2 ring-blue-500`).
- Repara que a _tab_ do _browser_ atualiza o título com o nome do utilizador selecionado.
- Escolhe uma tag no `<select>` "Filtrar por tag" para reduzir a lista; a contagem no `<h1>` atualiza em tempo real. "Todas" repõe a lista completa.

## Estrutura

- `src/App.jsx`, dois `useState` (`selectedUser`, `selectedTag`) + um `useEffect` que sincroniza `document.title`. Filtra `active` por `selectedTag` durante o _render_ (lê do `<select>` _controlled_).
- `src/components/UserCard.jsx`, aceita _props_ `user`, `avatar`, `onSelect`, `selected`. Liga o `onClick` do `<div>` exterior a `() => onSelect(user)` e aplica condicionalmente o anel azul de destaque.
- `src/components/Section.jsx`, herdado da Sessão 3.
- `src/users.js`, herdado da Sessão 3 (`User` com `id`, `name`, `age`, `active`, `tags`, `avatar?`).
- `src/index.css`, `@import "tailwindcss";` (v4 com plugin oficial Vite).
- `vite.config.js`, plugin `tailwindcss()` ao lado do plugin React.
- `package.json`, deps fixadas: React 19.2.5, Vite 8.0.10, Tailwind 4.2.0.

## Onde está documentado

- UI _lesson_ (_student-facing_) na _app_ Next.js, em duas rotas:
  - Teoria: `/unit-1/session-04-state-hooks-events-theory`.
  - CFU: `/unit-1/session-04-state-hooks-events-cfu`.
