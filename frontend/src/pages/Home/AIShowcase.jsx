import { motion } from "framer-motion";
import {
  Upload,
  Sparkles,
  CloudSun,
  Shirt,
  ArrowDown,
} from "lucide-react";

function AIShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-4xl font-bold">
          See Wardrobe AI in Action
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-center text-gray-400">
          Upload your clothes, let AI understand your wardrobe,
          consider today's weather and occasion, then receive
          personalized outfit recommendations instantly.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-col items-center gap-5">

        <WorkflowCard
          icon={<Upload className="text-blue-400" size={30} />}
          title="Upload Your Clothes"
        />

        <ArrowDown className="text-gray-500" />

        <WorkflowCard
          icon={<Sparkles className="text-cyan-400" size={30} />}
          title="AI Analyzes Your Wardrobe"
        />

        <ArrowDown className="text-gray-500" />

        <WorkflowCard
          icon={<CloudSun className="text-yellow-400" size={30} />}
          title="Weather + Occasion Analysis"
        />

        <ArrowDown className="text-gray-500" />

        <WorkflowCard
          icon={<Shirt className="text-green-400" size={30} />}
          title="Perfect Outfit Recommendation"
        />

      </div>
    </section>
  );
}

function WorkflowCard({ icon, title }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
      }}
      className="flex w-full max-w-xl items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div className="rounded-2xl bg-white/5 p-4">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>
    </motion.div>
  );
}

export default AIShowcase;