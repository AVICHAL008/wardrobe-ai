export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 ${className}`}
    >
      {children}
    </div>
  );
}