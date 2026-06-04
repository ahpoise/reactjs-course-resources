import { useNavigate } from "react-router";
import { UserForm } from "../components/UserForm.jsx";

export function UserNew({ onAdd }) {
  const navigate = useNavigate();

  function handleSubmit(user) {
    onAdd(user);
    navigate("/users");
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Novo utilizador</h1>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
}
