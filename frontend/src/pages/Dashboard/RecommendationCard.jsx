import { Sparkles, Shirt, Footprints } from "lucide-react";
import Button from "../../components/ui/Button";

export default function RecommendationCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-purple-500/20 p-3">
          <Sparkles className="text-purple-400" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">
            AI Recommendation
          </h2>

          <p className="text-sm text-gray-400">
            Outfit suggested for today
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 rounded-2xl bg-slate-900/70 p-4">
          <Shirt className="text-blue-400" />
          <span className="text-white">White Oxford Shirt</span>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-slate-900/70 p-4">
          <Shirt className="text-indigo-400" />
          <span className="text-white">Navy Slim Jeans</span>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-slate-900/70 p-4">
          <Footprints className="text-green-400" />
          <span className="text-white">White Sneakers</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-400">
            Match Confidence
          </span>

          <span className="font-bold text-emerald-400">
            94%
          </span>
        </div>

        <Button className="w-full">
          Generate Another Outfit
        </Button>
      </div>
    </div>
  );
}