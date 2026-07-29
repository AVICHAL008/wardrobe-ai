import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Button from "../../components/common/Button";

function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          AI-Powered Personal Stylist
        </span>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight">
          Discover Your
          <span className="block text-blue-500">
            Perfect Outfit
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Personalized outfit recommendations based on your wardrobe,
          weather, skin tone and occasion.
        </p>

        <div className="mt-10 flex gap-4">
          <Button>Get Started</Button>
          <Button variant="secondary">
            Learn More
          </Button>
        </div>

      </section>

      <Footer />
    </main>
  );
}

export default Home;