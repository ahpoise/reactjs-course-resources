import { useEffect, useRef, useState, type SubmitEvent } from "react";
import { z } from "zod";
import { tags as allTags } from "../users";
import { userSchema, type UserInput } from "../schemas/user";
import type { User } from "../api/users";

type UserFormProps = {
  initial?: User;
  onSubmit: (user: UserInput) => void;
};

// O shape do form: age fica string enquanto se escreve; o schema faz a coerção no submit.
type FormState = { name: string; age: string; tags: string[] };
const initialForm: FormState = { name: "", age: "", tags: [] };

export function UserForm({ initial, onSubmit }: UserFormProps) {
  const [form, setForm] = useState<FormState>(
    initial
      ? { name: initial.name, age: String(initial.age), tags: initial.tags }
      : initialForm,
  );
  const [errors, setErrors] = useState<Record<string, string[] | undefined>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const nameRef = useRef<HTMLInputElement>(null);

  // useRef + useEffect: focar o input do nome assim que o form aparece.
  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  function toggleTag(tag: string, checked: boolean) {
    setForm({
      ...form,
      tags: checked ? [...form.tags, tag] : form.tags.filter((t) => t !== tag),
    });
  }

  function handleBlur(field: string) {
    setTouched((t) => ({ ...t, [field]: true }));
    const result = userSchema.safeParse(form);
    setErrors(result.success ? {} : z.flattenError(result.error).fieldErrors);
  }

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({ name: true, age: true, tags: true });
    const result = userSchema.safeParse(form);
    if (!result.success) {
      setErrors(z.flattenError(result.error).fieldErrors);
      return;
    }
    onSubmit(result.data);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <input
          ref={nameRef}
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
