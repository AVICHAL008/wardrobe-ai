import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function EditModal({
  isOpen,
  clothing,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    color: "",
  });

  useEffect(() => {
    if (clothing) {
      setForm({
        name: clothing.name,
        category: clothing.category,
        color: clothing.color,
      });
    }
  }, [clothing]);

  if (!isOpen || !clothing) return null;

  function handleSubmit(e) {
    e.preventDefault();

    onSave({
      ...clothing,
      ...form,
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

      <div className="w-full max-w-lg rounded-2xl bg-zinc-900 p-6">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">
            Edit Clothing
          </h2>

          <button onClick={onClose}>
            <X className="text-white" />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            value={form.name}
            onChange={(e)=>
              setForm({
                ...form,
                name:e.target.value
              })
            }
            className="w-full rounded-xl bg-zinc-800 p-3 text-white"
          />

          <input
            value={form.category}
            onChange={(e)=>
              setForm({
                ...form,
                category:e.target.value
              })
            }
            className="w-full rounded-xl bg-zinc-800 p-3 text-white"
          />

          <input
            value={form.color}
            onChange={(e)=>
              setForm({
                ...form,
                color:e.target.value
              })
            }
            className="w-full rounded-xl bg-zinc-800 p-3 text-white"
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-zinc-700 px-5 py-3 text-white"
            >
              Cancel
            </button>

            <button
              className="rounded-xl bg-blue-600 px-5 py-3 text-white"
            >
              Save
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}