import { useState } from "react";
import { z } from "zod";
import { watchlistItemSchema } from "../schemas/watchlistItem.js";

const emptyForm = { title: "", year: "", type: "movie" };

export function WatchlistForm({ onSubmit }) {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const result = watchlistItemSchema.safeParse(values);
    // Como na s8: {} se válido, senão os erros "flattened" por campo (z.flattenError).
    const fieldErrors = result.success
      ? {}
      : z.flattenError(result.error).fieldErrors;
    setErrors(fieldErrors);
    if (result.success) onSubmit(result.data);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1">
        <span className="text-sm text-gray-600">Título</span>
        <input
          name="title"
          value={values.title}
          onChange={handleChange}
          className="rounded border border-gray-300 px-3 py-2"
        />
        {errors.title && (
          <span className="text-sm text-red-600">{errors.title[0]}</span>
        )}
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm text-gray-600">Ano</span>
        <input
          name="year"
          value={values.year}
          onChange={handleChange}
          className="rounded border border-gray-300 px-3 py-2"
        />
        {errors.year && (
          <span className="text-sm text-red-600">{errors.year[0]}</span>
        )}
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm text-gray-600">Tipo</span>
        <select
          name="type"
          value={values.type}
          onChange={handleChange}
          className="rounded border border-gray-300 px-3 py-2"
        >
          <option value="movie">Filme</option>
          <option value="series">Série</option>
        </select>
      </label>

      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Adicionar
      </button>
    </form>
  );
}
