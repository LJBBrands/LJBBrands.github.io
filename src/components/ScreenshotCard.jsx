import { useEffect, useState } from "react";
import AssetTodoCard from "./AssetTodoCard";

export default function ScreenshotCard({ screenshot, theme, compact = false }) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [screenshot.missingFile]);

  return (
    <div
      className="rounded-[2rem] border p-2.5 shadow-2xl shadow-black/40 backdrop-blur-2xl"
      style={{
        backgroundColor: theme.phoneShell,
        borderColor: theme.cardBorder,
      }}
    >
      {!imageError ? (
        <img
          src={screenshot.image}
          alt={screenshot.alt}
          className="block w-full rounded-[1.65rem] border"
          style={{ borderColor: theme.cardBorder }}
          onError={() => setImageError(true)}
        />
      ) : (
        <AssetTodoCard screenshot={screenshot} theme={theme} compact={compact} />
      )}
    </div>
  );
}
