import { CalendarDays, Sparkles } from "lucide-react";
import { useWardrobe } from "../../contexts/WardrobeContext";

export default function Header() {
  const { clothes } = useWardrobe();

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const favorites = clothes.filter(
    (item) => item.favorite
  ).length;

  return (
    <div className="flex flex-col justify-between gap-6 rounded-3xl border border-zinc-800 bg-zinc-900 p-8 lg:flex-row lg:items-center">

      <div>

        <p className="mb-2 flex items-center gap-2 text-sm text-blue-400">
          <CalendarDays size={18} />
          {today}
        </p>

        <h1 className="text-4xl font-bold text-white">
          Welcome back 👋
        </h1>

        <p className="mt-3 text-lg text-gray-400">
          Manage your wardrobe and generate AI-powered outfits.
        </p>

      </div>

      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-slate-950 p-5 text-center">
          <h2 className="text-3xl font-bold text-white">
            {clothes.length}
          </h2>

          <p className="mt-2 text-gray-400">
            Clothes
          </p>
        </div>

        <div className="rounded-2xl bg-slate-950 p-5 text-center">
          <h2 className="text-3xl font-bold text-pink-400">
            {favorites}
          </h2>

          <p className="mt-2 text-gray-400">
            Favorites
          </p>
        </div>

      </div>

      <div className="hidden xl:flex items-center gap-3 rounded-2xl bg-blue-600 px-6 py-4">

        <Sparkles
          className="text-white"
          size={24}
        />

        <div>
          <p className="text-sm text-blue-100">
            AI Stylist
          </p>

          <h3 className="font-semibold text-white">
            Ready to Recommend
          </h3>
        </div>

      </div>

    </div>
  );
}