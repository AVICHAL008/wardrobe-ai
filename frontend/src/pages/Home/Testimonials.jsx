import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import SectionTitle from "../../components/ui/SectionTitle";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Software Engineer",
    review:
      "Wardrobe AI completely changed how I plan my outfits. It saves me so much time every morning.",
  },
  {
    name: "Priya Sharma",
    role: "College Student",
    review:
      "The AI recommendations are surprisingly accurate. I discovered outfit combinations I never thought of.",
  },
  {
    name: "Michael Lee",
    role: "Product Designer",
    review:
      "The interface is beautiful and the recommendations feel personalized. A fantastic experience.",
  },
];

function Testimonials() {
  return (
    <section className="py-28">
      <Container>
        <SectionTitle
          badge="Testimonials"
          title="Loved by early users"
          description="Here's what people are saying about Wardrobe AI."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((user, index) => (
            <motion.div
              key={user.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <p className="leading-7 text-gray-300">
                  "{user.review}"
                </p>

                <div className="mt-8">
                  <h3 className="font-bold">
                    {user.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {user.role}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;