import Container from "../ui/Container";

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-gray-400">
            © 2026 Wardrobe AI. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-400">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;