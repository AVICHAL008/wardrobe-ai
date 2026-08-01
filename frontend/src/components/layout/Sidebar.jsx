import {
  LayoutDashboard,
  Shirt,
  Sparkles,
  Heart,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Wardrobe",
    path: "/wardrobe",
    icon: Shirt,
  },
  {
    title: "AI Stylist",
    path: "/ai",
    icon: Sparkles,
  },
  {
    title: "Favorites",
    path: "/favorites",
    icon: Heart,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950">
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-3xl font-bold text-white">
          👔 Wardrobe AI
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          AI Powered Fashion Assistant
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.title}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-4 py-3 font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span>{link.title}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-slate-800 p-6">
        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Version
          </p>

          <p className="mt-1 font-semibold text-white">
            Wardrobe AI v1.0
          </p>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-3/4 rounded-full bg-blue-500" />
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Frontend Progress: 75%
          </p>
        </div>
      </div>
    </aside>
  );
}