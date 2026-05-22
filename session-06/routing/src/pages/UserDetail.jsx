import { Link, useParams } from "react-router";
import { users } from "../users.js";
import { NotFound } from "./NotFound.jsx";

export function UserDetail() {
  const { userId } = useParams();
  const user = users.find((u) => String(u.id) === userId);

  if (!user) {
    return <NotFound />;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <Link
        to="/users"
        className="text-sm text-gray-500 hover:text-gray-700"
      >
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
        {user.tags && user.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
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
      </div>
    </div>
  );
}
