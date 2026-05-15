# State, Hooks & Events - Sessão 4

## O que muda em relação à Sessão 3

1. **`useState` para o utilizador selecionado.** Em `App.jsx`, importamos `useState` e declaramos `const [selectedUser, setSelectedUser] = useState(null);`. Passamos `onSelect={setSelectedUser}` a cada `<UserCard>` no `.map()`.
2. **Nova _prop_ `onSelect` em `<UserCard>`.** O componente aceita `onSelect` e liga o `onClick` do `<div>` exterior a `() => onSelect(user)`. A _className_ ganha `cursor-pointer`.
3. **Feedback de seleção no `<header>`.** Aparece `Selecionado: {selectedUser?.name ?? "nenhum"}` para confirmar que o _state_ atualiza a cada clique.
4. **Nova _prop_ `selected` com destaque visual.** `App.jsx` passa `selected={selectedUser?.id === user.id}`. Em `<UserCard>`, a _prop_ tem _default_ `false` e aplica condicionalmente `ring-2 ring-blue-500 border-blue-300` quando o cartão está selecionado.
5. **`useEffect` para `document.title`.** Importamos `useEffect` e sincronizamos o título do separador: `"Diretório: " + selectedUser.name` com seleção, ou `"Diretório"` sem seleção. _Dependency array_: `[selectedUser]`.
6. **`<select>` controlado para filtrar por tag.** Declaramos `const [selectedTag, setSelectedTag] = useState("")`, ligamos `value={selectedTag}` e `onChange` a `setSelectedTag`. Calculamos `filtered` (todos os `active` ou só os que têm a tag) e mapeamos `filtered` em vez de `active`. A contagem no `<h1>` passa a `{filtered.length}`.
