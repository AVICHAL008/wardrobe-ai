import { motion } from "framer-motion";
import {
  Shirt,
  Sparkles,
  CloudSun,
} from "lucide-react";

const features = [
  {
    icon: Shirt,
    title: "Smart Wardrobe",
    description:
      "Upload your clothes and organize your wardrobe digitally.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description:
      "Get outfit suggestions based on your style, skin tone and occasion.",
  },
  {
    icon: CloudSun,
    title: "Weather Aware",
    description:
      "Receive outfit recommendations based on real-time weather.",
  },
];

function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-4xl font-bold">
          Why Choose Wardrobe AI?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-gray-400">
          Powerful AI features designed to make getting dressed effortless.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="mb-6 inline-flex rounded-2xl bg-blue-500/10 p-4">
                <Icon
                  size={34}
                  className="text-blue-400"
                />
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;