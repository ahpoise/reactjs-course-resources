import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { UserForm } from "../components/UserForm.jsx";
import { added } from "../store/usersSlice.js";

export function UserNew() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // antes: useUsers() do Context

  function handleSubmit(user) {
    // O id é gerado aqui, no dispatch; o reducer só calcula o state seguinte.
    dispatch(added({ ...user, id: Date.now() }));
    navigate("/users");
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Novo utilizador</h1>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
}
