const filters = [
  "All",
  "T-Shirt",
  "Shirt",
  "Jeans",
  "Jacket",
  "Hoodie",
  "Shoes",
];

export default function Filters({ selected, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition ${
            selected === filter
              ? "bg-blue-600 text-white"
              : "bg-zinc-900 text-gray-300 hover:bg-zinc-800"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}