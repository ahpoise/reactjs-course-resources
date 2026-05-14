export function UserCard({
  user,
  avatar = "https://placehold.co/64x64?text=?",
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 shadow-sm transition hover:shadow-md">
      <img src={avatar} alt="" width="64" height="64" className="rounded-full" />
      <div>
        <h3 className="font-semibold">{user.name}</h3>
        <p className="text-sm text-gray-600">{user.age} anos</p>
      </div>
    </div>
  );
}
