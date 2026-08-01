import { PackageOpen } from "lucide-react";

export default function EmptyState({
  title,
  description,
}) {
  return (
    <div className="flex h-80 flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-700 bg-zinc-900">

      <PackageOpen
        size={60}
        className="text-gray-600"
      />

      <h2 className="mt-5 text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-2 text-center text-gray-400">
        {description}
      </p>

    </div>
  );
}