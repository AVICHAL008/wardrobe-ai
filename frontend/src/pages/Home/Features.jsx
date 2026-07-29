import { motion } from "framer-motion";
import {
  Brain,
  Shirt,
  Palette,
  CloudSun,
  Sparkles,
  Zap,
} from "lucide-react";

import Card from "../../components/ui/Card";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

const features = [
  {
    icon: Brain,
    title: "AI Outfit Suggestions",
    description:
      "Receive intelligent outfit recommendations based on your wardrobe and preferences.",
  },
  {
    icon: Shirt,
    title: "Digital Wardrobe",
    description:
      "Organize every piece of clothing in one place with smart categorization.",
  },
  {
    icon: Palette,
    title: "Color Matching",
    description:
      "Discover combinations that complement each other effortlessly.",
  },
  {
    icon: CloudSun,
    title: "Weather Aware",
    description:
      "Get outfit suggestions based on today's weather forecast.",
  },
  {
    icon: Sparkles,
    title: "Occasion Based",
    description:
      "Dress appropriately for college, interviews, parties, or casual outings.",
  },
  {
    icon: Zap,
    title: "Instant Recommendations",
    description:
      "Generate stylish outfits within seconds using AI.",
  },
];

function Features() {
  return (
    <section className="py-28">
      <Container>
        <SectionTitle
          badge="Features"
          title="Everything you need to dress smarter"
          description="Wardrobe AI combines artificial intelligence with your personal wardrobe to make dressing effortless."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="mb-6 inline-flex rounded-2xl bg-blue-500/10 p-4">
                    <Icon className="text-blue-400" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Features;