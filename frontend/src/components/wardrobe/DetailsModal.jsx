import { X, Shirt, Palette, Tag, Heart } from "lucide-react";

export default function DetailsModal({
  isOpen,
  clothing,
  onClose,
}) {
  if (!isOpen || !clothing) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">

        <div className="relative">
          <img
            src={clothing.image}
            alt={clothing.name}
            className="h-80 w-full rounded-t-2xl object-cover"
          />

          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-black/60 p-2 transition hover:bg-red-500"
          >
            <X className="text-white" size={20} />
          </button>
        </div>

        <div className="space-y-5 p-6">

          <div>
            <h2 className="text-3xl font-bold text-white">
              {clothing.name}
            </h2>

            <p className="mt-1 text-gray-400">
              View clothing information
            </p>
          </div>

          <div className="space-y-4">

            <div className="flex items-center gap-3 rounded-xl bg-zinc-800 p-4">
              <Shirt className="text-blue-400" />

              <div>
                <p className="text-xs uppercase text-gray-400">
                  Category
                </p>

                <p className="text-white">
                  {clothing.category}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-zinc-800 p-4">
              <Palette className="text-pink-400" />

              <div>
                <p className="text-xs uppercase text-gray-400">
                  Color
                </p>

                <p className="text-white">
                  {clothing.color}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-zinc-800 p-4">
              <Tag className="text-green-400" />

              <div>
                <p className="text-xs uppercase text-gray-400">
                  ID
                </p>

                <p className="text-white">
                  #{clothing.id}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-zinc-800 p-4">
              <Heart
                className={
                  clothing.favorite
                    ? "fill-red-500 text-red-500"
                    : "text-gray-400"
                }
              />

              <div>
                <p className="text-xs uppercase text-gray-400">
                  Favourite
                </p>

                <p className="text-white">
                  {clothing.favorite ? "Yes" : "No"}
                </p>
              </div>
            </div>

          </div>

          <button
            onClick={onClose}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
}