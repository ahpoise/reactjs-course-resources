import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { UserForm } from "../components/UserForm.jsx";
import { NotFound } from "./NotFound.jsx";
import { updated } from "../store/usersSlice.js";

export function UserEdit() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const user = users.find((u) => String(u.id) === userId);

  if (!user) {
    return <NotFound />;
  }

  // O parâmetro chama-se values (não updated) para não colidir com o action creator updated.
  function handleSubmit(values) {
    // O id vem do user atual: o reducer substitui pelo match de id.
    dispatch(updated({ ...values, id: user.id }));
    navigate("/users");
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Editar {user.name}</h1>
      <UserForm initial={user} onSubmit={handleSubmit} />
    </div>
  );
}
