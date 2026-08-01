import ClothingCard from "./ClothingCard";

export default function WardrobeGrid({
  clothes,
  onFavorite,
  onDelete,
  onEdit,
  onView,
  view = "grid",
}) {
  if (clothes.length === 0) {
    return (
      <div className="flex h-72 flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-900">
        <h2 className="text-xl font-semibold text-white">
          No Clothes Found
        </h2>

        <p className="mt-2 text-gray-400">
          Try changing your filters or upload new clothes.
        </p>
      </div>
    );
  }

  if (view === "list") {
    return (
      <div className="space-y-5">
        {clothes.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 transition hover:border-blue-500"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-32 w-32 rounded-xl object-cover"
            />

            <div className="flex-1">
              <h2 className="text-xl font-semibold text-white">
                {item.name}
              </h2>

              <p className="mt-1 text-gray-400">
                {item.category}
              </p>

              <span className="mt-3 inline-block rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">
                {item.color}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onFavorite(item.id)}
                className={`rounded-lg p-3 transition ${
                  item.favorite
                    ? "bg-red-600 text-white"
                    : "bg-zinc-800 text-gray-300 hover:bg-red-600"
                }`}
              >
                ❤️
              </button>

              <button
                onClick={() => onView(item)}
                className="rounded-lg bg-zinc-800 p-3 transition hover:bg-green-600"
              >
                👁️
              </button>

              <button
                onClick={() => onEdit(item)}
                className="rounded-lg bg-zinc-800 p-3 transition hover:bg-blue-600"
              >
                ✏️
              </button>

              <button
                onClick={() => onDelete(item)}
                className="rounded-lg bg-zinc-800 p-3 transition hover:bg-red-600"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {clothes.map((item) => (
        <ClothingCard
          key={item.id}
          {...item}
          onFavorite={onFavorite}
          onDelete={onDelete}
          onEdit={onEdit}
          onView={onView}
        />
      ))}
    </div>
  );
}