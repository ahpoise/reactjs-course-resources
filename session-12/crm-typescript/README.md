# TypeScript (refactor JS→TSX) - Sessão 12

## O que muda em relação à Sessão 11

O domínio, as rotas e a store são os mesmos da s11: isto é o **refactor JS→TSX** do mesmo CRM. Não muda comportamento, só tipos.

1. **Toolchain TypeScript**: `tsconfig.json` + `tsconfig.app.json` + `tsconfig.node.json` (setup oficial do Vite 8), `src/vite-env.d.ts`. O `package.json` ganha `typescript` e `typescript-eslint`; o `build` passa a `tsc -b && vite build`. O `index.html` aponta para `main.tsx`; `vite.config.js` passa a `vite.config.ts`; o `eslint.config.js` migra para `typescript-eslint`.
2. **Todos os ficheiros passam a `.ts`/`.tsx`**: componentes, páginas, `App` e `main` ficam `.tsx`; `api/`, `store/`, `schemas/`, `users` ficam `.ts`. Os _imports_ passam a _extensionless_ (`./client` em vez de `./client.js`).
3. **Os types saem dos _schemas_ Zod (s8/s11), uma só fonte de verdade**: `User` é `z.infer<typeof userFromApi>` em `src/api/users.ts`; `UserInput` é `z.infer<typeof userSchema>` em `src/schemas/user.ts`. Não escrevemos os campos à mão duas vezes.
4. **A store ganha _types_**: o `usersSlice` tipa cada _reducer_ com `PayloadAction<...>` e o `initialState` com `UsersState` (`{ list: User[]; status: Status }`), exportado para os _selectors_. As páginas leem com `useSelector((state: { users: UsersState }) => ...)`, sem um `RootState` global (escolha de âmbito: o foco é TypeScript, não Redux+TS).
5. **Componentes com _types_ nas _props_**: `UserCardProps`, `EmptyStateProps`, `UserFormProps`. O `<UserForm>` ganha um type explícito `FormState` (o `age` fica `string` enquanto se escreve; o _schema_ faz a coerção no submit) e `nameRef` é `useRef<HTMLInputElement>(null)`.

## Os types principais

**`User` a partir do Zod** (`src/api/users.ts`): não escrevemos os campos à mão.

```ts
export type User = z.infer<typeof userFromApi>;
```

**Props com _types_** (`src/components/UserCard.tsx`): o editor passa a conhecer os campos e a recusar props erradas.

```tsx
type UserCardProps = { user: User };

export function UserCard({ user }: UserCardProps) {
  return <h3>{user.name}</h3>;
}
```

**Selectors com _types_** (`src/pages/UsersList.tsx`): anotamos a estrutura do state direto no selector (sem `RootState` global).

```tsx
const users = useSelector((state: { users: UsersState }) => state.users.list);
```

**O slice com `PayloadAction`** (`src/store/usersSlice.ts`): cada reducer declara o type do seu payload.

```ts
deleted(state, action: PayloadAction<string>) {
  state.list = state.list.filter((u) => u.id !== action.payload);
}
```

### Exemplo de bug que o TypeScript apanha (antes/depois)

Em JS, apagar pelo objeto inteiro compilava e falhava em silêncio (o `filter` nunca encontrava o utilizador):

```js
// JS (s11): sem aviso
dispatch(deleted(user)); // u.id !== user (objeto): nunca remove
```

Com o _type_ `PayloadAction<string>` no `deleted`, o mesmo erro aparece no editor:

```ts
// TS (s12): erro de compilação
dispatch(deleted(user));
// Argument of type 'User' is not assignable to parameter of type 'string'.
dispatch(deleted(user.id)); // correto
```
