import { useState } from "react";
import { z } from "zod";
import { tags as allTags } from "../users.js";
import { userSchema } from "../schemas/user.js";

const initialForm = { name: "", age: "", tags: [] };

export function UserForm({ initial, onSubmit }) {
  const [form, setForm] = useState(initial ?? initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  function toggleTag(tag, checked) {
    setForm({
      ...form,
      tags: checked
        ? [...form.tags, tag]
        : form.tags.filter((t) => t !== tag),
    });
  }

  function handleBlur(field) {
    setTouched((t) => ({ ...t, [field]: true }));
    // As tags já são um array (checkboxes da s7); passamos o form direto.
    const result = userSchema.safeParse(form);
    setErrors(result.success ? {} : z.flattenError(result.error).fieldErrors);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Substitui a coercion manual da s7: validamos e só submetemos se passar.
    setTouched({ name: true, age: true, tags: true });
    const result = userSchema.safeParse(form);
    if (!result.success) {
      setErrors(z.flattenError(result.error).fieldErrors);
      return;
    }
    // result.data já vem validado e convertido: age é number, active é true.
    onSubmit(result.data);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          onBlur={() => handleBlur("name")}
          placeholder="Nome"
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        {errors.name && touched.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>
        )}
      </div>
      <div>
        <input
          type="number"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
          onBlur={() => handleBlur("age")}
          placeholder="Idade"
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        {errors.age && touched.age && (
          <p className="text-red-500 text-sm mt-1">{errors.age[0]}</p>
        )}
      </div>
      <div>
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
        {errors.tags && touched.tags && (
          <p className="text-red-500 text-sm mt-1">{errors.tags[0]}</p>
        )}
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Guardar
      </button>
    </form>
  );
}
