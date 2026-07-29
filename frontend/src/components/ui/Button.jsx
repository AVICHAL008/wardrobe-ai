function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50";

  const variants = {
    primary:
      "bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700",

    secondary:
      "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:bg-white hover:text-black",

    outline:
      "border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white",

    ghost:
      "text-gray-300 hover:bg-white/10 hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;