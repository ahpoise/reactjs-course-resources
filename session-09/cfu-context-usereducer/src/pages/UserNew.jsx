import { useNavigate } from "react-router";
import { UserForm } from "../components/UserForm.jsx";
import { useUsers } from "../state/UsersContext.jsx";

export function UserNew() {
  const navigate = useNavigate();
  const { dispatch } = useUsers(); // antes: onAdd por prop

  function handleSubmit(user) {
    // O id é gerado aqui, no dispatch; o reducer só calcula o state seguinte.
    dispatch({ type: "added", user: { ...user, id: Date.now() } });
    navigate("/users");
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Novo utilizador</h1>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
}
