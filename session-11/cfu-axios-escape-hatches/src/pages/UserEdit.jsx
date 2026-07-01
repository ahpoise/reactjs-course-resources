import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { UserForm } from "../components/UserForm.jsx";
import { NotFound } from "./NotFound.jsx";
import { updated } from "../store/usersSlice.js";
import { updateUser } from "../api/users.js";

export function UserEdit() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.list);
  const dispatch = useDispatch();
  const user = users.find((u) => u.id === userId);

  async function handleSubmit(values) {
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
