import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const WardrobeContext = createContext();

const defaultClothes = [
  {
    id: 1,
    name: "Black Hoodie",
    category: "Hoodie",
    color: "Black",
    image: "https://picsum.photos/400/500?random=1",
    favorite: false,
  },
  {
    id: 2,
    name: "White T-Shirt",
    category: "T-Shirt",
    color: "White",
    image: "https://picsum.photos/400/500?random=2",
    favorite: false,
  },
];

export function WardrobeProvider({ children }) {
  const [clothes, setClothes] = useState(() => {
    const saved = localStorage.getItem("wardrobe");
    return saved ? JSON.parse(saved) : defaultClothes;
  });

  useEffect(() => {
    localStorage.setItem("wardrobe", JSON.stringify(clothes));
  }, [clothes]);

  const addClothing = (item) => {
    const newItem = {
      id: Date.now(),
      favorite: false,
      ...item,
    };

    setClothes((prev) => [newItem, ...prev]);

    toast.success(`${newItem.name} added to wardrobe 👕`);
  };

  const updateClothing = (updatedItem) => {
    setClothes((prev) =>
      prev.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );

    toast.success(`${updatedItem.name} updated ✏️`);
  };

  const deleteClothing = (id) => {
    const item = clothes.find((c) => c.id === id);

    setClothes((prev) =>
      prev.filter((item) => item.id !== id)
    );

    if (item) {
      toast.success(`${item.name} deleted 🗑️`);
    }
  };

  const toggleFavorite = (id) => {
    const item = clothes.find((c) => c.id === id);

    setClothes((prev) =>
      prev.map((cloth) =>
        cloth.id === id
          ? {
              ...cloth,
              favorite: !cloth.favorite,
            }
          : cloth
      )
    );

    if (item) {
      if (!item.favorite) {
        toast.success(`${item.name} added to Favorites ❤️`);
      } else {
        toast(`${item.name} removed from Favorites`, {
          icon: "💔",
        });
      }
    }
  };

  return (
    <WardrobeContext.Provider
      value={{
        clothes,
        addClothing,
        updateClothing,
        deleteClothing,
        toggleFavorite,
      }}
    >
      {children}
    </WardrobeContext.Provider>
  );
}

export function useWardrobe() {
  return useContext(WardrobeContext);
}