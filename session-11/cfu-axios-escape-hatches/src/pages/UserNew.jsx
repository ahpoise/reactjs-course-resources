import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { UserForm } from "../components/UserForm.jsx";
import { added } from "../store/usersSlice.js";
import { createUser } from "../api/users.js";

export function UserNew() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSubmit(user) {
    const created = await createUser(user); // POST: o servidor gera o id
    dispatch(added(created));
    navigate("/users");
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Novo utilizador</h1>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
}
