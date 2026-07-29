import Badge from "./Badge";

function SectionTitle({
  badge,
  title,
  description,
  align = "center",
}) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center"
          ? "text-center"
          : "text-left"
      }`}
    >
      {badge && <Badge>{badge}</Badge>}

      <h2 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-relaxed text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;