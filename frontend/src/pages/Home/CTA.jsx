import { ArrowRight } from "lucide-react";

import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";

function CTA() {
  return (
    <section className="py-32">
      <Container>
        <div className="overflow-hidden rounded-[40px] border border-blue-500/20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-black text-white md:text-6xl">
            Ready to Transform
            <br />
            Your Wardrobe?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Let AI handle your outfit planning while you focus on your day.
            Build your digital wardrobe and discover the perfect outfit in
            seconds.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button className="bg-white text-blue-700 hover:bg-gray-100">
              Get Started
              <ArrowRight className="ml-2" size={18} />
            </Button>

            <Button variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTA;