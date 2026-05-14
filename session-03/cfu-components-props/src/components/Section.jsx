export function Section({ title, children }) {
  return (
    <section className="mt-6">
      <h2 className="mb-3 text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}
