function Button({
  children,
  variant = "primary",
  onClick,
}) {
  const base =
    "rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 active:scale-95";

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30",

    secondary:
      "border border-white/20 text-white hover:bg-white hover:text-black",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;