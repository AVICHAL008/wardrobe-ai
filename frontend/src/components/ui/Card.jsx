function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;