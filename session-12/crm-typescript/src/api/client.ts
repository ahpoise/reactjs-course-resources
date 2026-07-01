import axios from "axios";

// O backend é um projeto mockapi.io alojado (criado pelo formador, partilhado pela turma).
// A baseURL é o endpoint base do projeto (sem o /users, que as funções de api/users.ts acrescentam).
export const api = axios.create({
  baseURL: "https://69144da9f34a2ff1170f59bc.mockapi.io/api",
});
