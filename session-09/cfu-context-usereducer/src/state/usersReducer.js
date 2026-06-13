// Função pura: recebe o state atual e uma action, devolve o state seguinte.
// O id é gerado por quem faz o dispatch, não aqui.
export function usersReducer(state, action) {
  switch (action.type) {
    case "added":
      return [...state, action.user];
    case "updated":
      return state.map((u) => (u.id === action.user.id ? action.user : u));
    case "deleted":
      return state.filter((u) => u.id !== action.id);
    default:
      throw new Error(`Action desconhecida: ${action.type}`);
  }
}
