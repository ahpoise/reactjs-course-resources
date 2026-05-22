export function UserDetail({ user, onClear }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white">
      <img
        src={user.avatar}
        alt=""
        width="80"
        height="80"
        className="rounded-full mb-3"
      />
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-xl font-bold">{user.name}</h2>
        <button
          type="button"
          onClick={onClear}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Limpar seleção
        </button>
      </div>
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
  );
}
