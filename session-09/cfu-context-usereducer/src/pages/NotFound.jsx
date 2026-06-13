import { useNavigate } from "react-router";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-gray-600 mb-6">Página não encontrada.</p>
      <button
        type="button"
        onClick={() => navigate("/")}
        className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
      >
        Voltar à página inicial
      </button>
    </div>
  );
}
