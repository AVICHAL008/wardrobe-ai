import { motion } from "framer-motion";
import {
  Sparkles,
  Shirt,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import { useState } from "react";

const outfits = [
  {
    occasion: "Casual",
    confidence: 96,
    items: [
      "White T-Shirt",
      "Blue Jeans",
      "White Sneakers",
    ],
  },
  {
    occasion: "Office",
    confidence: 94,
    items: [
      "Blue Oxford Shirt",
      "Black Trousers",
      "Brown Loafers",
    ],
  },
  {
    occasion: "Party",
    confidence: 92,
    items: [
      "Black Shirt",
      "Grey Chinos",
      "Chelsea Boots",
    ],
  },
  {
    occasion: "Travel",
    confidence: 95,
    items: [
      "Hoodie",
      "Cargo Pants",
      "Running Shoes",
    ],
  },
];

export default function OutfitSuggestionCard() {
  const [index, setIndex] = useState(0);

  const outfit = outfits[index];

  const nextOutfit = () => {
    setIndex((prev) => (prev + 1) % outfits.length);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <div className="mb-6 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-purple-600/20 p-3">
            <Sparkles
              className="text-purple-400"
              size={28}
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              Today's AI Outfit
            </h2>

            <p className="text-gray-400">
              {outfit.occasion} Recommendation
            </p>
          </div>

        </div>

        <button
          onClick={nextOutfit}
          className="rounded-xl bg-slate-950 p-3 transition hover:bg-zinc-800"
        >
          <RefreshCw size={18} />
        </button>

      </div>

      <div className="space-y-4">

        {outfit.items.map((item) => (

          <motion.div
            key={item}
            layout
            className="flex items-center gap-4 rounded-2xl bg-slate-950 p-4"
          >
            <Shirt
              size={22}
              className="text-blue-400"
            />

            <span className="text-lg font-medium text-white">
              {item}
            </span>

          </motion.div>

        ))}

      </div>

      <div className="mt-8">

        <div className="mb-2 flex items-center justify-between">

          <span className="text-gray-400">
            Match Confidence
          </span>

          <span className="font-bold text-emerald-400">
            {outfit.confidence}%
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-zinc-800">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${outfit.confidence}%`,
            }}
            transition={{
              duration: 0.5,
            }}
            className="h-full rounded-full bg-emerald-500"
          />

        </div>

      </div>

      <button
        onClick={nextOutfit}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 text-lg font-semibold transition hover:bg-blue-700"
      >
        Generate Another Outfit

        <ArrowRight size={20} />
      </button>

      <p className="mt-4 text-center text-xs text-gray-500">
        Live AI recommendations will use Gemini after backend integration.
      </p>

    </motion.div>
  );
}