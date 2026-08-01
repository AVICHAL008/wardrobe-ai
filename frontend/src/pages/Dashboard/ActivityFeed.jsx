import {
  Upload,
  Heart,
  Sparkles,
  Pencil,
  Shirt,
} from "lucide-react";

import { useWardrobe } from "../../contexts/WardrobeContext";

export default function ActivityFeed() {
  const { clothes } = useWardrobe();

  const activities = [];

  const recent = [...clothes].reverse().slice(0, 5);

  recent.forEach((item) => {
    activities.push({
      id: item.id,
      title: `Added ${item.name}`,
      subtitle: item.category,
      icon: Upload,
      color: "text-blue-400",
    });

    if (item.favorite) {
      activities.push({
        id: `${item.id}-fav`,
        title: `${item.name} marked as favorite`,
        subtitle: "Favorites",
        icon: Heart,
        color: "text-red-400",
      });
    }
  });

  activities.push({
    id: "ai",
    title: "AI Stylist Ready",
    subtitle: "Generate outfits",
    icon: Sparkles,
    color: "text-emerald-400",
  });

  activities.push({
    id: "edit",
    title: "Edit wardrobe anytime",
    subtitle: "Update clothing details",
    icon: Pencil,
    color: "text-yellow-400",
  });

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">
          Activity Feed
        </h2>

        <span className="text-sm text-gray-400">
          Live
        </span>

      </div>

      <div className="space-y-4">

        {activities.slice(0, 6).map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="flex items-center gap-4 rounded-2xl bg-slate-950 p-4 transition hover:bg-slate-800"
            >

              <div className="rounded-xl bg-zinc-900 p-3">
                <Icon
                  size={20}
                  className={activity.color}
                />
              </div>

              <div className="flex-1">

                <h3 className="font-medium text-white">
                  {activity.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {activity.subtitle}
                </p>

              </div>

            </div>
          );
        })}

        {activities.length === 0 && (
          <div className="flex h-48 flex-col items-center justify-center">

            <Shirt
              size={60}
              className="text-gray-600"
            />

            <p className="mt-4 text-gray-400">
              Your activity will appear here.
            </p>

          </div>
        )}

      </div>

    </div>
  );
}