import { LayoutGrid, List } from "lucide-react";

export default function ViewToggle({
  view,
  onChange,
}) {
  return (
    <div className="flex overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
      <button
        onClick={() => onChange("grid")}
        className={`flex items-center gap-2 px-4 py-3 transition ${
          view === "grid"
            ? "bg-blue-600 text-white"
            : "text-gray-400 hover:bg-zinc-800"
        }`}
      >
        <LayoutGrid size={18} />
        <span className="hidden sm:block">Grid</span>
      </button>

      <button
        onClick={() => onChange("list")}
        className={`flex items-center gap-2 px-4 py-3 transition ${
          view === "list"
            ? "bg-blue-600 text-white"
            : "text-gray-400 hover:bg-zinc-800"
        }`}
      >
        <List size={18} />
        <span className="hidden sm:block">List</span>
      </button>
    </div>
  );
}