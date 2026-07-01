import { z } from "zod";
import { api } from "./client.js";

// Validamos a forma da resposta com Zod (a ferramenta da s8), agora sobre o que
// vem da API. A resposta tem id (o schema do form não tinha): a API é a dona do id.
const userFromApi = z.object({
  // o id fica string, como a API o envia (assim todas as comparações de id batem certo)
  id: z.string(),
  name: z.string(),
  age: z.number(),
  active: z.boolean(),
  tags: z.array(z.string()),
  avatar: z.string().optional(),
});
const usersFromApi = z.array(userFromApi);

export async function getUsers() {
  const { data } = await api.get("/users");
  return usersFromApi.parse(data);
}

// POST sem id: o mockapi.io gera o id e devolve o utilizador completo.
export async function createUser(user) {
  const { data } = await api.post("/users", user);
  return data;
}

export async function updateUser(user) {
  const { data } = await api.put(`/users/${user.id}`, user);
  return data;
}

export async function deleteUser(id) {
  await api.delete(`/users/${id}`);
}
