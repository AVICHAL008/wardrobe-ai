import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

import Button from "../ui/Button";
import Container from "../ui/Container";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-2">
              <Sparkles
                size={20}
                className="text-white"
              />
            </div>

            <span className="text-xl font-black tracking-wide">
              Wardrobe AI
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-gray-300 transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#faq"
              className="text-gray-300 transition hover:text-white"
            >
              FAQ
            </a>

            <Button variant="secondary">
              Login
            </Button>

            <Button>
              Get Started
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;