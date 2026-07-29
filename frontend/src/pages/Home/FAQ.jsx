import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import SectionTitle from "../../components/ui/SectionTitle";

const faqs = [
  {
    question: "How does Wardrobe AI work?",
    answer:
      "Wardrobe AI analyzes your wardrobe and suggests outfits based on colors, weather, and occasion.",
  },
  {
    question: "Is my wardrobe data secure?",
    answer:
      "Yes. Your wardrobe data is stored securely, and only you can access your uploaded clothing items.",
  },
  {
    question: "Can I use Wardrobe AI on my phone?",
    answer:
      "Absolutely. The application is fully responsive and works on desktops, tablets, and smartphones.",
  },
  {
    question: "Do I need to upload all my clothes?",
    answer:
      "No. You can start with a few items and gradually build your digital wardrobe over time.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section
      id="faq"
      className="py-28"
    >
      <Container>
        <SectionTitle
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before getting started."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-6">
          {faqs.map((faq, index) => (
            <Card key={faq.question}>
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between text-left"
              >
                <h3 className="text-xl font-semibold">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-6 text-gray-400">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQ;