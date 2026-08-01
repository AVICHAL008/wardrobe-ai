import { Heart, Trash2, Pencil, Eye } from "lucide-react";

export default function ClothingCard({
  id,
  name,
  category,
  color,
  image,
  favorite,
  onFavorite,
  onDelete,
  onEdit,
  onView,
}) {
  const clothing = {
    id,
    name,
    category,
    color,
    image,
    favorite,
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover"
        />

        <button
          onClick={() => onFavorite(id)}
          className={`absolute right-3 top-3 rounded-full p-2 transition ${
            favorite
              ? "bg-red-500 text-white"
              : "bg-black/60 text-white hover:bg-red-500"
          }`}
        >
          <Heart
            size={18}
            fill={favorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="space-y-3 p-4">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {name}
          </h3>

          <p className="text-sm text-gray-400">
            {category}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs text-blue-400">
            {color}
          </span>

          <div className="flex gap-2">

            <button
              onClick={() => onView(clothing)}
              className="rounded-lg bg-zinc-800 p-2 transition hover:bg-green-600"
              title="View Details"
            >
              <Eye size={16} />
            </button>

            <button
              onClick={() => onEdit(clothing)}
              className="rounded-lg bg-zinc-800 p-2 transition hover:bg-blue-600"
              title="Edit"
            >
              <Pencil size={16} />
            </button>

            <button
              onClick={() => onDelete(clothing)}
              className="rounded-lg bg-zinc-800 p-2 transition hover:bg-red-600"
              title="Delete"
            >
              <Trash2 size={16} />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}