function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <h1 className="text-2xl font-bold text-white">
        Wardrobe AI
      </h1>

      <div className="flex gap-8 text-gray-300">
        <a href="#">Features</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;