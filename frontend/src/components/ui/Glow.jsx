function Glow({
  className = "",
}) {
  return (
    <div
      className={`absolute rounded-full blur-[140px] ${className}`}
    />
  );
}

export default Glow;