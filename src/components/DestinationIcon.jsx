function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.25 7.25h1.1l.85-1.5h3.6l.85 1.5h1.1A1.75 1.75 0 0 1 17.5 9v7A1.75 1.75 0 0 1 15.75 17.75h-7.5A1.75 1.75 0 0 1 6.5 16V9A1.75 1.75 0 0 1 8.25 7.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12.25" r="2.6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function LiveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <circle
        cx="12"
        cy="12"
        r="9.25"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.55"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5.5 5.75h5.2c1.4 0 2.55 1.15 2.55 2.55v10.2c0-.97-.78-1.75-1.75-1.75H5.5V5.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 5.75h-5.2c-1.4 0-2.55 1.15-2.55 2.55v10.2c0-.97.78-1.75 1.75-1.75H18.5V5.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.25 8.5 4.75 12l3.5 3.5M15.75 8.5 19.25 12l-3.5 3.5M13.25 6.75l-2.5 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.75 13.4 9.1 18.5 10.5 13.4 11.9 12 17.25 10.6 11.9 5.5 10.5 10.6 9.1 12 3.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ICONS = {
  camera: CameraIcon,
  live: LiveIcon,
  book: BookIcon,
  code: CodeIcon,
  spark: SparkIcon,
};

export default function DestinationIcon({ name, className = "" }) {
  const Icon = ICONS[name] || CameraIcon;
  return (
    <span className={`destination-icon ${className}`.trim()}>
      <Icon />
    </span>
  );
}
