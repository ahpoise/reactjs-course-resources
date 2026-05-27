import { useState } from "react";
import { tags as allTags } from "../users.js";

const initialForm = { name: "", age: "", tags: [] };

export function UserForm({ initial, onSubmit }) {
  const [form, setForm] = useState(initial ?? initialForm);

  function toggleTag(tag, checked) {
    setForm({
      ...form,
      tags: checked
        ? [...form.tags, tag]
        : form.tags.filter((t) => t !== tag),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ ...form, age: Number(form.age) });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Nome"
        className="border border-gray-300 rounded px-3 py-2 w-full"
      />
      <input
        type="number"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
        placeholder="Idade"
        className="border border-gray-300 rounded px-3 py-2 w-full"
      />
      <div className="flex flex-wrap gap-3">
        {allTags.map((tag) => (
          <label key={tag} className="flex items-center gap-1 text-sm">
            <input
              type="checkbox"
              checked={form.tags.includes(tag)}
              onChange={(e) => toggleTag(tag, e.target.checked)}
            />
            {tag}
          </label>
        ))}
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Guardar
      </button>
    </form>
  );
}
