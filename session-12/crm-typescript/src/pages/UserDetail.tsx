import { Link, useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { NotFound } from "./NotFound";
import { deleted } from "../store/usersSlice";
import { deleteUser } from "../api/users";
import type { UsersState } from "../store/usersSlice";

export function UserDetail() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const users = useSelector((state: { users: UsersState }) => state.users.list);
  const dispatch = useDispatch();
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return <NotFound />;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <Link to="/users" className="text-sm text-gray-500 hover:text-gray-700">
        ← Voltar à lista
      </Link>
      <div className="border border-gray-200 rounded-lg p-6 bg-white mt-4">
        <img
          src={user.avatar}
          alt=""
          width="80"
          height="80"
          className="rounded-full mb-3"
        />
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-sm text-gray-600 mb-4">{user.age} anos</p>
        {user.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {user.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-2">
          <Link
            to={`/users/${user.id}/edit`}
            className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
          >
            Editar
          </Link>
          <button
            type="button"
            onClick={async () => {
              await deleteUser(user.id); // DELETE no servidor
              dispatch(deleted(user.id));
              navigate("/users");
            }}
            className="rounded bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
          >
            Apagar
          </button>
        </div>
      </div>
    </div>
  );
}
