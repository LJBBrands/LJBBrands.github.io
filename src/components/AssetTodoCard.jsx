export default function AssetTodoCard({ screenshot, theme, compact = false }) {
  return (
    <div
      className={`flex flex-col justify-center rounded-[1.65rem] border p-5 text-center ${
        compact ? "min-h-[160px]" : "min-h-[240px]"
      }`}
      style={{
        backgroundColor: theme.cardBg,
        borderColor: theme.cardBorder,
      }}
      role="img"
      aria-label={screenshot.alt}
    >
      <div
        className="mx-auto inline-flex rounded-full border px-3 py-1 text-xs"
        style={{
          borderColor: theme.accentBorder,
          backgroundColor: theme.accentSoft,
          color: theme.accentText,
        }}
      >
        Preview unavailable
      </div>
      <div className="mt-5 text-xl font-semibold">{screenshot.label}</div>
      <p className="mt-3 text-sm leading-6 text-white/58">
        This screenshot could not be loaded.
      </p>
    </div>
  );
}
