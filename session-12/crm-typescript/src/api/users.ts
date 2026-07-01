import { z } from "zod";
import { api } from "./client";

// Validamos a forma da resposta com Zod (a ferramenta da s8), agora sobre o que
// vem da API. A resposta tem id (o schema do form não tinha): a API é a dona do id.
const userFromApi = z.object({
  id: z.string(), // o id fica string, como a API o envia
  name: z.string(),
  age: z.number(),
  active: z.boolean(),
  tags: z.array(z.string()),
  avatar: z.string().optional(),
});
const usersFromApi = z.array(userFromApi);

// O User type sai do schema da API: a forma canónica dos dados na app.
export type User = z.infer<typeof userFromApi>;

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get("/users");
  return usersFromApi.parse(data);
}

// POST sem id: o mockapi.io gera o id e devolve o utilizador completo.
export async function createUser(user: Omit<User, "id">): Promise<User> {
  const { data } = await api.post("/users", user);
  return data;
}

export async function updateUser(user: User): Promise<User> {
  const { data } = await api.put(`/users/${user.id}`, user);
  return data;
}

export async function deleteUser(id: string): Promise<void> {
  await api.delete(`/users/${id}`);
}
