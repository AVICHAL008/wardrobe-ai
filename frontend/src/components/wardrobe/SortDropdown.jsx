import { ArrowUpDown } from "lucide-react";

const options = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "az", label: "Name (A-Z)" },
  { value: "za", label: "Name (Z-A)" },
];

export default function SortDropdown({
  value,
  onChange,
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
      <ArrowUpDown
        size={18}
        className="text-blue-400"
      />

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-white outline-none"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-zinc-900"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}