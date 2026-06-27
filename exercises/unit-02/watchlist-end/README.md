# Watchlist (versão de referência, Unit 2)

Solução completa do exercício de consolidação da Unit 2, construída **por cima do `watchlist-starter`**. O _starter_ é uma UI estática (lista de cards, navbar, página 404, mais o filtro e os botões da card já no sítio mas por ligar); esta versão aplica-lhe as camadas da Unit 2: _routing_, _state_ global, formulário controlado, validação Zod e _wiring_ das interações.

```bash
npm install
npm run dev
```

## O que muda face ao starter, passo a passo

Cada secção corresponde a um Step do enunciado. Por Step: ficheiros tocados e o que muda. Tudo o resto fica igual ao _starter_.

### Step 1: Acrescentar as rotas (routing)

- `src/App.jsx`: deixa de renderizar a lista estática; passa a renderizar `<Routes>` com `/` (`<WatchlistPage>`), `/new` (`<ItemNew>`) e `*` (`<NotFound>`).
- `src/pages/WatchlistPage.jsx` (novo): a lista que estava no `App` (título + filtro + grid de cards) movida para uma página própria.
- `src/pages/ItemNew.jsx` (novo): a página `/new` (por agora só o título; o formulário chega no Step 3).
- `src/components/NavBar.jsx`, `src/pages/NotFound.jsx`: já vinham no _starter_, agora ligados pelas `<Routes>` (sem alterações ao código).

### Step 2: Os dados passam a viver no state global

- `package.json`: acrescenta `@reduxjs/toolkit` e `react-redux`.
- `src/store/watchlistSlice.js` (novo): `createSlice` com `initialState` = seed do `data.js` e as ações `added` / `toggledWatched` / `removed`.
- `src/store/index.js` (novo): `configureStore({ reducer: { watchlist } })`.
- `src/main.jsx`: envolve a App em `<Provider store={store}>`.
- `src/pages/WatchlistPage.jsx`: lê a lista com `useSelector((state) => state.watchlist)` em vez de importar de `data.js`.
- `src/data.js`: o mesmo seed, agora consumido só como `initialState` do _slice_.

### Step 3: Formulário para adicionar item

- `src/components/WatchlistForm.jsx` (novo): formulário controlado (`title`, `year`, `type`) com `useState`; chama `onSubmit` com os _values_.
- `src/pages/ItemNew.jsx`: renderiza o `<WatchlistForm>`; no submit faz `dispatch(added(...))` com um id novo e `navigate("/")` de volta à lista.

### Step 4: Validação com Zod

- `src/schemas/watchlistItem.js` (novo): `watchlistItemSchema` (`title` não vazio, `year` via `z.coerce.number().int().min(1900).max(ano atual)`, `type` via `z.enum`).
- `src/components/WatchlistForm.jsx`: no submit faz `safeParse`; em erro usa `z.flattenError(result.error).fieldErrors` e mostra a 1.ª mensagem por campo; só faz `onSubmit` quando válido.

### Step 5: Interação nas cards e dados derivados

- `src/components/WatchlistCard.jsx`: liga os botões que já vinham no _starter_, `onClick` para `dispatch(toggledWatched(item.id))` (marcar visto/por ver) e `dispatch(removed(item.id))` (apagar).
- `src/pages/WatchlistPage.jsx`: liga o filtro (`useState` + `value`/`onChange`); a lista visível é derivada no _render_ a partir do _state_, sem _state_ à parte.
