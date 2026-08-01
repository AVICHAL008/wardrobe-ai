import { motion } from "framer-motion";
import {
  Shirt,
  Heart,
  Sparkles,
} from "lucide-react";
import { useWardrobe } from "../../contexts/WardrobeContext";

export default function Stats() {
  const { clothes } = useWardrobe();

  const stats = [
    {
      title: "Total Clothes",
      value: clothes.length,
      icon: Shirt,
      color: "text-blue-400",
    },
    {
      title: "Favorites",
      value: clothes.filter((c) => c.favorite).length,
      icon: Heart,
      color: "text-red-400",
    },
    {
      title: "AI Outfits",
      value: Math.max(12, clothes.length * 3),
      icon: Sparkles,
      color: "text-emerald-400",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">
                  {item.title}
                </p>

                <h2 className="mt-2 text-4xl font-bold text-white">
                  {item.value}
                </h2>
              </div>

              <div className="rounded-2xl bg-slate-950 p-4">
                <Icon
                  className={`h-8 w-8 ${item.color}`}
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}