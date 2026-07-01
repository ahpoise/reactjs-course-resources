import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { UserForm } from "../components/UserForm";
import { NotFound } from "./NotFound";
import { updated } from "../store/usersSlice";
import { updateUser } from "../api/users";
import type { UserInput } from "../schemas/user";
import type { UsersState } from "../store/usersSlice";

export function UserEdit() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const users = useSelector((state: { users: UsersState }) => state.users.list);
  const dispatch = useDispatch();
  const user = users.find((u) => u.id === userId);

  async function handleSubmit(values: UserInput) {
    if (!user) return;
    const saved = await updateUser({ ...values, id: user.id }); // PUT
    dispatch(updated(saved));
    navigate("/users");
  }

  if (!user) {
    return <NotFound />;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Editar {user.name}</h1>
      <UserForm initial={user} onSubmit={handleSubmit} />
    </div>
  );
}
