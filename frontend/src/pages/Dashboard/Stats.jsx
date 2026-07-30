import { Shirt, Heart, Sparkles } from "lucide-react";

const stats = [
  {
    title: "Total Clothes",
    value: "54",
    icon: Shirt,
    color: "text-blue-400",
  },
  {
    title: "Favorites",
    value: "12",
    icon: Heart,
    color: "text-pink-400",
  },
  {
    title: "AI Outfits",
    value: "138",
    icon: Sparkles,
    color: "text-emerald-400",
  },
];

export default function Stats() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">
                  {item.title}
                </p>

                <h2 className="mt-2 text-4xl font-bold text-white">
                  {item.value}
                </h2>
              </div>

              <div className="rounded-2xl bg-slate-900 p-4">
                <Icon className={`h-8 w-8 ${item.color}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}