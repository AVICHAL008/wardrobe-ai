import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import Hero from "./Hero";
import Features from "./Features";

function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-black to-blue-950 text-white">
      <div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute right-20 top-96 h-72 w-72 rounded-full bg-cyan-500/20 blur-[140px]" />

      <Navbar />

      <Hero />

      <Features />

      <Footer />
    </main>
  );
}

export default Home;