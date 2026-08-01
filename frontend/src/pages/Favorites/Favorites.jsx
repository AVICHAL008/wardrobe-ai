import { useMemo, useState } from "react";
import { Heart, Search } from "lucide-react";

import { useWardrobe } from "../../contexts/WardrobeContext";

import WardrobeGrid from "../../components/wardrobe/WardrobeGrid";
import SortDropdown from "../../components/wardrobe/SortDropdown";
import ViewToggle from "../../components/wardrobe/ViewToggle";

import EditModal from "../../components/wardrobe/EditModal";
import DeleteModal from "../../components/wardrobe/DeleteModal";
import DetailsModal from "../../components/wardrobe/DetailsModal";

export default function Favorites() {
  const {
    clothes,
    toggleFavorite,
    updateClothing,
    deleteClothing,
  } = useWardrobe();

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [view, setView] = useState("grid");

  const [selectedClothing, setSelectedClothing] = useState(null);

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const favorites = useMemo(() => {
    let filtered = clothes.filter((item) => item.favorite);

    filtered = filtered.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    switch (sortBy) {
      case "az":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "za":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case "oldest":
        filtered.sort((a, b) => a.id - b.id);
        break;

      default:
        filtered.sort((a, b) => b.id - a.id);
    }

    return filtered;
  }, [clothes, search, sortBy]);

  return (
    <div className="min-h-screen bg-black p-8 text-white">

      <div className="mb-8 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-red-500/20 p-4">
            <Heart
              size={34}
              className="fill-red-500 text-red-500"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              Favorites
            </h1>

            <p className="text-gray-400">
              {favorites.length} saved items
            </p>
          </div>

        </div>

      </div>

      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:justify-between">

        <div className="relative w-full lg:max-w-md">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search favorites..."
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 outline-none focus:border-blue-500"
          />

        </div>

        <div className="flex gap-4">

          <SortDropdown
            value={sortBy}
            onChange={setSortBy}
          />

          <ViewToggle
            view={view}
            onChange={setView}
          />

        </div>

      </div>

      {favorites.length === 0 ? (
        <div className="flex h-80 flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-700 bg-zinc-900">

          <Heart
            size={70}
            className="text-gray-600"
          />

          <h2 className="mt-5 text-2xl font-bold">
            No Favorites Yet
          </h2>

          <p className="mt-2 text-gray-400">
            Tap the heart icon on clothes to save them.
          </p>

        </div>
      ) : (
        <WardrobeGrid
          clothes={favorites}
          view={view}
          onFavorite={toggleFavorite}
          onView={(item) => {
            setSelectedClothing(item);
            setShowDetails(true);
          }}
          onEdit={(item) => {
            setSelectedClothing(item);
            setShowEdit(true);
          }}
          onDelete={(item) => {
            setSelectedClothing(item);
            setShowDelete(true);
          }}
        />
      )}

      {showDetails && (
        <DetailsModal
          isOpen={showDetails}
          clothing={selectedClothing}
          onClose={() => {
            setShowDetails(false);
            setSelectedClothing(null);
          }}
        />
      )}

      {showEdit && (
        <EditModal
          clothing={selectedClothing}
          onClose={() => {
            setShowEdit(false);
            setSelectedClothing(null);
          }}
          onSave={(item) => {
            updateClothing(item);
            setShowEdit(false);
            setSelectedClothing(null);
          }}
        />
      )}

      {showDelete && (
        <DeleteModal
          isOpen={showDelete}
          clothing={selectedClothing}
          onClose={() => {
            setShowDelete(false);
            setSelectedClothing(null);
          }}
          onConfirm={(id) => {
            deleteClothing(id);
            setShowDelete(false);
            setSelectedClothing(null);
          }}
        />
      )}

    </div>
  );
}
