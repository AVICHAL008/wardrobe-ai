import { useMemo, useState } from "react";
import { useWardrobe } from "../../contexts/WardrobeContext";

import SearchBar from "../../components/wardrobe/SearchBar";
import Filters from "../../components/wardrobe/Filters";
import UploadButton from "../../components/wardrobe/UploadButton";
import WardrobeGrid from "../../components/wardrobe/WardrobeGrid";
import UploadModal from "../../components/wardrobe/UploadModal";
import EditModal from "../../components/wardrobe/EditModal";
import DeleteModal from "../../components/wardrobe/DeleteModal";
import DetailsModal from "../../components/wardrobe/DetailsModal";
import SortDropdown from "../../components/wardrobe/SortDropdown";
import ViewToggle from "../../components/wardrobe/ViewToggle";

export default function Wardrobe() {
  const {
    clothes,
    addClothing,
    updateClothing,
    deleteClothing,
    toggleFavorite,
  } = useWardrobe();

  const [showUpload, setShowUpload] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const [selectedClothing, setSelectedClothing] = useState(null);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [view, setView] = useState("grid");

  const filteredClothes = useMemo(() => {
    let filtered = clothes.filter((item) => {
      const searchMatch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const categoryMatch =
        selectedCategory === "All" ||
        item.category === selectedCategory;

      return searchMatch && categoryMatch;
    });

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
  }, [clothes, search, selectedCategory, sortBy]);

  const favorites = clothes.filter((c) => c.favorite).length;

  return (
    <div className="min-h-screen bg-black p-8 text-white">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            My Wardrobe
          </h1>

          <p className="mt-2 text-gray-400">
            {clothes.length} Items • {favorites} Favorites
          </p>
        </div>

        <UploadButton
          onClick={() => setShowUpload(true)}
        />
      </div>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Filters
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />

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

      <div className="mt-8">
        <WardrobeGrid
          clothes={filteredClothes}
          view={view}
          onFavorite={toggleFavorite}
          onEdit={(item) => {
            setSelectedClothing(item);
            setShowEdit(true);
          }}
          onDelete={(item) => {
            setSelectedClothing(item);
            setShowDelete(true);
          }}
          onView={(item) => {
            setSelectedClothing(item);
            setShowDetails(true);
          }}
        />
      </div>

      {showUpload && (
        <UploadModal
          onClose={() => setShowUpload(false)}
          onSave={(item) => {
            addClothing(item);
            setShowUpload(false);
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
    </div>
  );
}