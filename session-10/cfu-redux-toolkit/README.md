# State global com Redux Toolkit - Sessão 10 (CFU)

App **standalone** (um carrinho de compras), à parte do CRM, para praticar o Redux Toolkit num sítio simples. A migração do CRM de Context para Redux é teacher-led na integração da sessão, não está aqui.

## O que tem

1. **`src/store/cartSlice.js`**: `createSlice` com `initialState: []` e quatro _reducers_, `added` (cria a linha ou soma 1 se o produto já lá estiver), `incremented` / `decremented` (quantidade), `removed` (devolve uma _array_ nova). O `added`/`incremented`/`decremented` mutam o _draft_ (Immer trata); o `removed` devolve. _Action creators_ gerados pelo `createSlice`.
2. **`src/store/index.js`**: `configureStore({ reducer: { cart: cartReducer } })`. O _state_ global é `{ cart: [...] }`.
3. **`src/main.jsx`**: `<Provider store={store}>` no topo da árvore.
4. **`src/components/Catalog.jsx`**: lista de produtos fixa; cada botão faz `dispatch(added(produto))`. Só `useDispatch`.
5. **`src/components/Cart.jsx`**: lê `useSelector((state) => state.cart)`; botões `+`/`-`/remover fazem `dispatch` dos _action creators_ com o `id` da linha.
6. **`src/components/Total.jsx`**: `useSelector` com um valor derivado (a soma de `price * quantity`).

Plain JS. **Sem `RootState`/`AppDispatch`/`.withTypes()`** (isso é TypeScript, chega na Sessão 12); `useSelector`/`useDispatch` diretos de `react-redux`.

## Correr

```bash
npm install
npm run dev
```
