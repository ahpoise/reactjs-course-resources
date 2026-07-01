import { Link } from "react-router";
import type { User } from "../api/users";

type UserCardProps = { user: User };

export function UserCard({ user }: UserCardProps) {
  const avatar = user.avatar ?? "https://placehold.co/64x64?text=?";
  return (
    <Link
      to={`/users/${user.id}`}
      className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 shadow-sm transition hover:shadow-md hover:border-gray-300"
    >
      <img src={avatar} alt="" width="64" height="64" className="rounded-full" />
      <div>
        <h3 className="font-semibold">{user.name}</h3>
        <p className="text-sm text-gray-600">{user.age} anos</p>
      </div>
    </Link>
  );
}
