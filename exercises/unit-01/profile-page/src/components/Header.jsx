export function Header({ name, role }) {
  return (
    <header className="text-center mb-10">
      <img
        src="https://placehold.co/120x120?text=TP"
        alt=""
        width="120"
        height="120"
        className="rounded-full mx-auto mb-4"
      />
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900">{name}</h1>
      <p className="text-lg text-gray-600 mt-2">{role}</p>
    </header>
  );
}
