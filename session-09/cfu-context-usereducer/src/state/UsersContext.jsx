import { createContext, useContext, useReducer } from "react";
import { usersReducer } from "./usersReducer.js";
import { users as initialUsers } from "../users.js";

// O context object. null como default: aceder fora do provider deve falhar.
const UsersContext = createContext(null);

// O provider: o useReducer é utilizado aqui e { users, dispatch } são passados no value.
// As páginas/componentes que vão utilizar o context são a prop children.
export function UsersProvider({ children }) {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  return <UsersContext value={{ users, dispatch }}>{children}</UsersContext>;
}

// O custom hook: as páginas/componentes que precisam de aceder ao context
// fazem-no a partir daqui, nunca do UsersContext diretamente.
// eslint-disable-next-line react-refresh/only-export-components -- provider + hook no mesmo ficheiro (padrão react.dev)
export function useUsers() {
  const ctx = useContext(UsersContext);
  if (!ctx) {
    // Fora do provider? Erro imediato, com mensagem clara.
    throw new Error("useUsers deve ser usado dentro de <UsersProvider>.");
  }
  return ctx;
}
