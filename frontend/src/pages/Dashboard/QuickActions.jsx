import { motion } from "framer-motion";
import {
  Plus,
  Sparkles,
  Heart,
  Shirt,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Add Clothing",
      subtitle: "Upload new wardrobe items",
      icon: Plus,
      color: "bg-blue-600",
      route: "/wardrobe",
    },
    {
      title: "AI Stylist",
      subtitle: "Generate outfit ideas",
      icon: Sparkles,
      color: "bg-purple-600",
      route: "/ai",
    },
    {
      title: "Favorites",
      subtitle: "View saved clothes",
      icon: Heart,
      color: "bg-red-600",
      route: "/favorites",
    },
    {
      title: "My Wardrobe",
      subtitle: "Browse all clothing",
      icon: Shirt,
      color: "bg-emerald-600",
      route: "/wardrobe",
    },
  ];

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="grid gap-5 sm:grid-cols-2">
        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <motion.button
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() => navigate(action.route)}
              className="group rounded-2xl border border-zinc-800 bg-slate-950 p-5 text-left transition hover:border-blue-500"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${action.color}`}
              >
                <Icon
                  size={28}
                  className="text-white"
                />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {action.title}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {action.subtitle}
              </p>

              <div className="mt-5 flex items-center gap-2 text-blue-400 opacity-0 transition group-hover:opacity-100">
                <span className="text-sm">
                  Open
                </span>

                <ArrowRight size={16} />
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}