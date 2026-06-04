# Validação com Zod - Sessão 8

A app é a mesma da Sessão 7 (lista, detalhe, criar / editar / apagar utilizadores). O que acrescentamos é **validação com Zod** no `<UserForm>`, sem mudar a estrutura do form.

## O que muda em relação à Sessão 7

1. **`src/schemas/user.js`**: um `userSchema` (`z.object`) com a forma e as regras num só sítio: `name` obrigatório (`.min(1)`); `age` entre 18 e 120 (`z.coerce.number().int().min().max()`); `active` (`z.boolean().default(true)`, sem campo no form, logo um utilizador novo nasce ativo); `tags` (`z.array(z.string()).min(1)`, pelo menos uma selecionada). Mensagens em PT-PT via `{ error: "..." }`.
2. **`<UserForm>` valida com `safeParse`** (`src/components/UserForm.jsx`): `errors` e `touched` em _state_. No `onBlur` de cada campo marcamos `touched` e corremos `userSchema.safeParse(form)`, mapeando com `z.flattenError(result.error).fieldErrors`.
3. **Mensagens por campo**: `<p>{errors.x[0]}</p>` por baixo de `name`, `age` e `tags`, só quando `errors.x && touched.x`.
4. **`onSubmit` como _gate_**: substitui a _coercion_ manual da s7 (`Number(form.age)`). Marca tudo `touched`, corre `safeParse`, e só submete `result.data` (já validado e convertido) se passar.

O resto da app (`<App>`, páginas, `<UserCard>`, rotas) é igual à Sessão 7.

## Estrutura da app

Componentes da app no estado final da sessão. \
Setas com etiqueta indicam as _props_ que cada parent passa ao child. \
`<App>` é o dono do _state_ (`users`) e dos _handlers_ que o mutam (`addUser`, `updateUser`, `deleteUser`).

```mermaid
flowchart TB
    App["<b>&lt;App&gt;</b><br/><i>useState(users)</i><br/>addUser, updateUser, deleteUser"]
    NavBar["&lt;NavBar&gt;"]
    Routes["&lt;Routes&gt;"]
    UsersList["&lt;UsersList&gt;<br/><i>/users</i>"]
    UserDetail["&lt;UserDetail&gt;<br/><i>/users/:userId</i>"]
    UserNew["&lt;UserNew&gt;<br/><i>/users/new</i>"]
    UserEdit["&lt;UserEdit&gt;<br/><i>/users/:userId/edit</i>"]
    UserForm["&lt;UserForm&gt;<br/><i>useState(form, errors, touched)</i><br/>safeParse(userSchema)"]
    UserCard["&lt;UserCard&gt;"]

    App --> NavBar
    App --> Routes
    Routes -- "users" --> UsersList
    Routes -- "users, onDelete" --> UserDetail
    Routes -- "onAdd" --> UserNew
    Routes -- "users, onUpdate" --> UserEdit
    UsersList -- "user" --> UserCard
    UserNew -- "onSubmit" --> UserForm
    UserEdit -- "onSubmit, initial" --> UserForm
```

## Fluxo: criar um novo utilizador (com validação)

O caminho desde o clique em "Guardar" no `<UserForm>` até o utilizador aparecer na lista. \
Agora o `<UserForm>` valida com `safeParse` antes de submeter: só chama `onSubmit` se os dados passarem o `userSchema`.

```mermaid
sequenceDiagram
    actor Utilizador
    participant UserForm
    participant UserNew
    participant App
    participant UsersList

    Utilizador->>UserForm: escreve campos + clica Guardar
    UserForm->>UserForm: handleSubmit: preventDefault + safeParse(form)
    alt dados inválidos
        UserForm->>Utilizador: setErrors + mostra mensagens (return)
    else dados válidos
        UserForm->>UserNew: onSubmit(result.data) (validado + convertido)
        UserNew->>App: onAdd(user)
        App->>App: setUsers([...users, {id: Date.now(), ...user}])
        Note over UserNew: navigate /users
        App->>UsersList: re-render com users novo
        UsersList->>Utilizador: vê o utilizador novo
    end
```
