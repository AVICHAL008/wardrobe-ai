import { useMemo, useState } from "react";
import {
  Sparkles,
  RefreshCw,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { useWardrobe } from "../../contexts/WardrobeContext";

const TOPS = ["T-Shirt", "Shirt", "Hoodie", "Jacket"];
const BOTTOMS = ["Jeans", "Pants", "Trouser", "Shorts"];
const SHOES = ["Shoes", "Sneakers"];

export default function AIStylist() {
  const { clothes } = useWardrobe();

  const [occasion, setOccasion] = useState("Casual");
  const [weather, setWeather] = useState("Sunny");
  const [seed, setSeed] = useState(0);

  const outfits = useMemo(() => {
    const tops = clothes.filter((c) =>
      TOPS.includes(c.category)
    );

    const bottoms = clothes.filter((c) =>
      BOTTOMS.includes(c.category)
    );

    const shoes = clothes.filter((c) =>
      SHOES.includes(c.category)
    );

    const combinations = [];

    const total = Math.max(
      tops.length,
      bottoms.length,
      shoes.length,
      1
    );

    for (let i = 0; i < total; i++) {
      combinations.push({
        top:
          tops[(i + seed) % Math.max(1, tops.length)] ||
          null,

        bottom:
          bottoms[
            (i + seed + 1) %
              Math.max(1, bottoms.length)
          ] || null,

        shoes:
          shoes[
            (i + seed + 2) %
              Math.max(1, shoes.length)
          ] || null,

        score: 92 + ((seed + i) % 8),
      });
    }

    return combinations;
  }, [clothes, seed]);

  const bestOutfit = outfits[0];
  const suggestions = outfits.slice(1, 4);

  return (
    <div className="min-h-screen bg-black p-8 text-white">

      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            AI Stylist
          </h1>

          <p className="mt-2 text-gray-400">
            Smart outfit recommendations from
            your wardrobe.
          </p>

        </div>

        <button
          onClick={() => setSeed((s) => s + 1)}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
        >
          <RefreshCw size={18} />
          Generate Again
        </button>

      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2">

        <select
          value={occasion}
          onChange={(e) =>
            setOccasion(e.target.value)
          }
          className="rounded-xl bg-zinc-900 p-4 outline-none"
        >
          <option>Casual</option>
          <option>Office</option>
          <option>Party</option>
          <option>Travel</option>
          <option>Gym</option>
        </select>

        <select
          value={weather}
          onChange={(e) =>
            setWeather(e.target.value)
          }
          className="rounded-xl bg-zinc-900 p-4 outline-none"
        >
          <option>Sunny</option>
          <option>Cloudy</option>
          <option>Rainy</option>
          <option>Cold</option>
        </select>

      </div>

      {clothes.length === 0 ? (

        <div className="flex h-96 flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-700">

          <Sparkles
            size={60}
            className="mb-5 text-blue-500"
          />

          <h2 className="text-3xl font-bold">
            No Clothes Found
          </h2>

          <p className="mt-3 text-gray-500">
            Upload clothes to start generating
            AI outfits.
          </p>

        </div>

      ) : (

        <>
          {bestOutfit && (

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mb-10 rounded-3xl border border-blue-600 bg-zinc-900 p-8"
            >

              <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <div className="mb-2 flex items-center gap-3">

                    <Star
                      className="text-yellow-400"
                      fill="currentColor"
                    />

                    <h2 className="text-3xl font-bold">
                      Today's Best Outfit
                    </h2>

                  </div>

                  <p className="text-gray-400">
                    Recommended for{" "}
                    {occasion.toLowerCase()} •{" "}
                    {weather.toLowerCase()}
                  </p>

                </div>

                <div className="rounded-full bg-emerald-500/20 px-5 py-3 text-lg font-bold text-emerald-400">
                  {bestOutfit.score}% Match
                </div>

              </div>

              <div className="grid gap-6 md:grid-cols-3">

                {[
                  {
                    title: "Top",
                    item: bestOutfit.top,
                  },
                  {
                    title: "Bottom",
                    item: bestOutfit.bottom,
                  },
                  {
                    title: "Shoes",
                    item: bestOutfit.shoes,
                  },
                ].map(({ title, item }) => (

                  <div
                    key={title}
                    className="rounded-2xl bg-slate-950 p-4"
                  >

                    <p className="mb-3 text-sm text-gray-400">
                      {title}
                    </p>

                    {item ? (
                      <>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-56 w-full rounded-xl object-cover"
                        />

                        <h3 className="mt-4 text-lg font-semibold">
                          {item.name}
                        </h3>

                        <p className="text-gray-400">
                          {item.category}
                        </p>

                        <span className="mt-3 inline-block rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">
                          {item.color}
                        </span>
                      </>
                    ) : (
                      <div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-zinc-700">
                        No Item
                      </div>
                    )}

                  </div>

                ))}

              </div>

            </motion.div>

          )}

          <h2 className="mb-6 text-2xl font-bold">
            More Suggestions
          </h2>

          <div className="grid gap-6 lg:grid-cols-3">

            {suggestions.map(
              (outfit, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
                >

                  <div className="mb-5 flex items-center justify-between">

                    <h3 className="text-xl font-semibold">
                      Suggestion {index + 1}
                    </h3>

                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">
                      {outfit.score}%
                    </span>

                  </div>

                  <div className="space-y-3">

                    <p>
                      👕{" "}
                      {outfit.top?.name ??
                        "No Top"}
                    </p>

                    <p>
                      👖{" "}
                      {outfit.bottom?.name ??
                        "No Bottom"}
                    </p>

                    <p>
                      👟{" "}
                      {outfit.shoes?.name ??
                        "No Shoes"}
                    </p>

                  </div>

                </motion.div>

              )
            )}

          </div>

        </>

      )}

    </div>
  );
}