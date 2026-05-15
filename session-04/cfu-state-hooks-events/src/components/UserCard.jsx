export function UserCard({
  user,
  avatar = "https://placehold.co/64x64?text=?",
  onSelect,
  selected = false,
}) {
  return (
    <div
      onClick={() => onSelect(user)}
      className={`flex items-center gap-3 rounded-lg border p-4 shadow-sm transition cursor-pointer hover:shadow-md ${
        selected ? "ring-2 ring-blue-500 border-blue-300" : "border-gray-200"
      }`}
    >
      <img src={avatar} alt="" width="64" height="64" className="rounded-full" />
      <div>
        <h3 className="font-semibold">{user.name}</h3>
        <p className="text-sm text-gray-600">{user.age} anos</p>
      </div>
    </div>
  );
}
