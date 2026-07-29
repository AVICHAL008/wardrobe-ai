function Badge({
  children,
  color = "blue",
}) {
  const variants = {
    blue:
      "border-blue-500/30 bg-blue-500/10 text-blue-300",

    green:
      "border-green-500/30 bg-green-500/10 text-green-300",

    purple:
      "border-purple-500/30 bg-purple-500/10 text-purple-300",

    orange:
      "border-orange-500/30 bg-orange-500/10 text-orange-300",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium ${variants[color]}`}
    >
      {children}
    </span>
  );
}

export default Badge;