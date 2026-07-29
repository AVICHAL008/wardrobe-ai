import { motion } from "framer-motion";
import Button from "../../components/common/Button";

function Hero() {
  return (
    <motion.section
      className="mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
        ✨ AI-Powered Personal Stylist
      </span>

      <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
        Discover Your
        <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Perfect Outfit
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-400">
        Personalized outfit recommendations based on your wardrobe,
        weather, skin tone, and occasion. Let AI become your personal
        fashion assistant.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </motion.section>
  );
}

export default Hero;