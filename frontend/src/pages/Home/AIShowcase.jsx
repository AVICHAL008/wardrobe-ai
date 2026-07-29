import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Badge from "../../components/ui/Badge";
import Glow from "../../components/ui/Glow";

function Hero() {
  return (
    <section className="relative overflow-hidden py-28">
      <Glow className="left-10 top-10 h-80 w-80 bg-blue-500/20" />
      <Glow className="right-10 bottom-10 h-96 w-96 bg-purple-500/20" />

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>
              <Sparkles size={16} className="mr-2" />
              AI Powered Outfit Recommendations
            </Badge>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Your Smart
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Wardrobe Assistant
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              Upload your wardrobe, receive AI-powered outfit suggestions,
              discover color combinations, and dress confidently for every
              occasion.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button>
                Get Started
                <ArrowRight className="ml-2" size={18} />
              </Button>

              <Button variant="secondary">
                Explore Features
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;