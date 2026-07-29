import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";

const stats = [
  {
    value: "10K+",
    label: "Outfits Generated",
  },
  {
    value: "5K+",
    label: "Happy Users",
  },
  {
    value: "98%",
    label: "Recommendation Accuracy",
  },
  {
    value: "24/7",
    label: "AI Availability",
  },
];

function Stats() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <h3 className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-5xl font-black text-transparent">
                  {stat.value}
                </h3>

                <p className="mt-4 text-gray-400">
                  {stat.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Stats;