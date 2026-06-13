import { useNavigate, useParams } from "react-router";
import { UserForm } from "../components/UserForm.jsx";
import { NotFound } from "./NotFound.jsx";
import { useUsers } from "../state/UsersContext.jsx";

export function UserEdit() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { users, dispatch } = useUsers(); // antes: users e onSave por props
  const user = users.find((u) => String(u.id) === userId);

  if (!user) {
    return <NotFound />;
  }

  function handleSubmit(updated) {
    // O id vem do user atual: o reducer substitui pelo match de id.
    dispatch({ type: "updated", user: { ...updated, id: user.id } });
    navigate("/users");
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Editar {user.name}</h1>
      <UserForm initial={user} onSubmit={handleSubmit} />
    </div>
  );
}
