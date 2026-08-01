import { useState } from "react";
import { X } from "lucide-react";

export default function UploadModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "T-Shirt",
    color: "Black",
    season: "All Seasons",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];

      if (!file) return;

      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };

      reader.readAsDataURL(file);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.image) {
      alert("Please fill all required fields.");
      return;
    }

    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-zinc-900 p-6 shadow-2xl">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            Upload Clothing
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-zinc-800"
          >
            <X className="text-white" size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Clothing Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none focus:border-blue-500"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white"
          >
            <option>T-Shirt</option>
            <option>Shirt</option>
            <option>Jeans</option>
            <option>Jacket</option>
            <option>Hoodie</option>
            <option>Shoes</option>
          </select>

          <select
            name="color"
            value={formData.color}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white"
          >
            <option>Black</option>
            <option>White</option>
            <option>Blue</option>
            <option>Brown</option>
            <option>Grey</option>
            <option>Red</option>
            <option>Green</option>
          </select>

          <select
            name="season"
            value={formData.season}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white"
          >
            <option>All Seasons</option>
            <option>Summer</option>
            <option>Winter</option>
            <option>Monsoon</option>
          </select>

          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white"
          />

          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="h-56 w-full rounded-xl object-cover"
            />
          )}

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-zinc-700 px-5 py-3 text-white hover:bg-zinc-600"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Save Clothing
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}