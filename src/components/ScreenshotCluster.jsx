import ScreenshotCard from "./ScreenshotCard";

export default function ScreenshotCluster({ screenshots, theme }) {
  if (screenshots.length === 1) {
    return <ScreenshotCard screenshot={screenshots[0]} theme={theme} />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {screenshots.map((screenshot, index) => (
        <div
          key={screenshot.missingFile}
          className={index === 1 ? "sm:mt-10" : ""}
        >
          <ScreenshotCard screenshot={screenshot} theme={theme} compact />
        </div>
      ))}
    </div>
  );
}
