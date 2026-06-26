import { Link } from "react-router";

export function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900">404</h1>
      <p className="mt-2 text-gray-600">Página não encontrada.</p>
      <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">
        Voltar à watchlist
      </Link>
    </main>
  );
}
