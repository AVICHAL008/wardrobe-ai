import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black">

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70"
          onClick={() => setOpen(false)}
        />

        <div className="absolute left-0 top-0 h-full">
          <Sidebar />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="flex-1 overflow-y-auto">

        {/* Mobile Header */}
        <div className="sticky top-0 z-40 flex items-center justify-between border-b border-zinc-800 bg-black px-6 py-4 lg:hidden">

          <button
            onClick={() => setOpen(true)}
            className="rounded-xl bg-zinc-900 p-3"
          >
            <Menu size={22} />
          </button>

          <h2 className="text-xl font-bold text-white">
            Wardrobe AI
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="rounded-xl bg-zinc-900 p-3"
          >
            <X size={22} />
          </button>

        </div>

        <Outlet />

      </div>

    </div>
  );
}