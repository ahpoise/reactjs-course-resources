import { useState } from "react";
import { SkillPill } from "./SkillPill.jsx";
import { skills, categories } from "../data.js";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filtered =
    selectedCategory === "all"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">Skills</h2>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <label htmlFor="filter-category" className="text-sm text-gray-600">
          Filtrar por categoria
        </label>
        <select
          id="filter-category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded border border-gray-300 px-2 py-1 text-sm"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <ul className="flex flex-wrap gap-2">
        {filtered.map((skill) => (
          <SkillPill key={skill.name} name={skill.name} />
        ))}
      </ul>
    </section>
  );
}
