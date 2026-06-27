import { z } from "zod";

const currentYear = new Date().getFullYear();

export const watchlistItemSchema = z.object({
  title: z.string().min(1, "O título é obrigatório."),
  year: z.coerce
    .number()
    .int("O ano tem de ser um número inteiro.")
    .min(1900, "Ano demasiado antigo.")
    .max(currentYear, "Ano demasiado no futuro."),
  type: z.enum(["movie", "series"]),
});
