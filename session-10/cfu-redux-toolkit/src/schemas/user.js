import { z } from "zod";

export const userSchema = z
  .object({
    name: z.string().min(1, { error: "Nome é obrigatório." }),
    age: z.coerce
      .number({ error: "Idade tem de ser pelo menos 18." })
      .int()
      .min(18, { error: "Idade tem de ser pelo menos 18." }),
    active: z.boolean().default(true), // sem campo no form; novo utilizador nasce ativo
    tags: z.array(z.string()).min(1, { error: "Escolhe pelo menos uma tag." }),
    avatar: z.string().optional(),
  })
  // bónus: se não vier avatar, geramos um a partir das iniciais do name
  .transform((user) => ({
    ...user,
    avatar:
      user.avatar ??
      `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`,
  }));
