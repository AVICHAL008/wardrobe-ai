import { useWardrobe } from "../../contexts/WardrobeContext";

export default function RecentUploads() {
  const { clothes } = useWardrobe();

  const recent = clothes.slice(0, 4);

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Recent Uploads
        </h2>

        <span className="text-sm text-gray-400">
          {recent.length} Items
        </span>
      </div>

      {recent.length === 0 ? (
        <div className="flex h-60 items-center justify-center rounded-2xl border border-dashed border-zinc-700">
          <p className="text-gray-400">
            No uploads yet.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recent.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl bg-slate-950 transition hover:scale-[1.02]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-white">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  {item.category}
                </p>

                <span className="mt-3 inline-block rounded-full bg-blue-600/20 px-3 py-1 text-xs text-blue-400">
                  {item.color}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}