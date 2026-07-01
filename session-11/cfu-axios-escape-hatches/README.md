# HTTP com Axios + Escape Hatches - Sessão 11

## O que muda em relação à Sessão 10

1. **`package.json`**: adiciona `axios` (`^1.15.2`). O _backend_ é um projeto mockapi.io alojado (criado pelo formador, partilhado pela turma), por isso não há dependências de servidor local nem _scripts_ novos.
2. **Dataset inicial**: os utilizadores são "fornecidos" por uma mock api em mockapi.io.
3. **`src/api/client.js`** (novo): uma instância única do Axios com `baseURL` para o endpoint base do projeto mockapi.io (sem o `/users`, que as funções de `api/users.js` acrescentam).
4. **`src/api/users.js`** (novo): `getUsers()` faz `GET /users` e valida a resposta com Zod (a ferramenta da s8, agora sobre o que vem da API). O _schema_ `userFromApi` tem `id: z.string()`: a resposta traz `id` (o _schema_ do form não tinha), a API é a dona do `id` e este fica `string` ponta a ponta, por isso todas as comparações de `id` batem certo. Acrescenta também as mutações `createUser`/`updateUser`/`deleteUser`.
5. **`src/users.js`**: o _seed_ sai daqui (passa a viver no mockapi.io); fica só a constante `tags`, que o form e a lista usam nos filtros.
6. **`src/store/usersSlice.js`**: `initialState` passa de `[...]` para `{ list: [], status: "idle" }`. O `status` do _fetch_ vive na _store_, ao lado dos dados, para sobreviver à navegação (voltar à lista não re-busca nem pisca o _loading_). Novos _reducers_ `usersLoading`/`usersLoaded`/`usersFailed`; `added`/`updated`/`deleted` passam a operar sobre `state.list`.
7. **`src/pages/UsersList.jsx`**: um `useEffect` chama `getUsers()`, guardado por `if (status !== "idle") return` (corre uma vez, não re-busca), e despacha `usersLoading`/`usersLoaded`/`usersFailed`. Lê `state.users.list` + `state.users.status` e renderiza os estados _loading_, _error_ e _empty_. O filtro + ordenação continuam derivados no _render_, sem _state_ à parte.
8. **Mutações nas páginas**: `<UserNew>`/`<UserEdit>`/`<UserDetail>` passam o _handler_ a `async`, chamam a API (`createUser`/`updateUser`/`deleteUser`), esperam com `await` e só depois fazem `dispatch`. A lista lê-se em `state.users.list` e o `user` encontra-se com `u.id === userId` (ambos `string`, sem conversões).
9. **`src/components/UserForm.jsx`**: `useRef(nameRef)` + `useEffect([])` para focar o _input_ do nome ao montar. É a segunda _escape hatch_ (a saída para o DOM); a primeira é o _Effect_ que vai à _network_ buscar os dados.
