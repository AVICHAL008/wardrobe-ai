import { AlertTriangle } from "lucide-react";

export default function DeleteModal({
  isOpen,
  clothing,
  onClose,
  onConfirm,
}) {
  if (!isOpen || !clothing) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

        <div className="flex justify-center">
          <div className="rounded-full bg-red-500/20 p-4">
            <AlertTriangle
              size={42}
              className="text-red-500"
            />
          </div>
        </div>

        <h2 className="mt-5 text-center text-2xl font-bold text-white">
          Delete Clothing?
        </h2>

        <p className="mt-3 text-center text-gray-400">
          Are you sure you want to delete
          <span className="font-semibold text-white">
            {" "}
            {clothing.name}
          </span>
          ?
        </p>

        <p className="mt-1 text-center text-sm text-gray-500">
          This action cannot be undone.
        </p>

        <div className="mt-8 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-zinc-700 py-3 font-medium text-white transition hover:bg-zinc-800"
          >
            Cancel
          </button>

          <button
            onClick={() => onConfirm(clothing.id)}
            className="flex-1 rounded-xl bg-red-600 py-3 font-medium text-white transition hover:bg-red-700"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}