function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-6 pt-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">

        <h1 className="cursor-pointer text-2xl font-bold tracking-wide text-white">
          Wardrobe AI
        </h1>

        <div className="hidden gap-8 text-gray-300 md:flex">
          <a
            href="#"
            className="transition hover:text-blue-400"
          >
            Features
          </a>

          <a
            href="#"
            className="transition hover:text-blue-400"
          >
            About
          </a>

          <a
            href="#"
            className="transition hover:text-blue-400"
          >
            Contact
          </a>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;