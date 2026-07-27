function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.2 9.1v5.8L15.3 12 10.2 9.1Z" fill="currentColor" />
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

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5.5 6.75h13A1.75 1.75 0 0 1 20.25 8.5v7A1.75 1.75 0 0 1 18.5 17.25H10.2L7 19.5v-2.25H5.5A1.75 1.75 0 0 1 3.75 15.5v-7A1.75 1.75 0 0 1 5.5 6.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
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

function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="9"
        y="3.75"
        width="6"
        height="10"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6.75 11.25a5.25 5.25 0 0 0 10.5 0M12 16.5v3.75M9 20.25h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ICONS = {
  play: PlayIcon,
  live: LiveIcon,
  chat: ChatIcon,
  book: BookIcon,
  code: CodeIcon,
  spark: SparkIcon,
  mic: MicIcon,
};

export default function DestinationIcon({ name, className = "" }) {
  const Icon = ICONS[name] || PlayIcon;
  return (
    <span className={`destination-icon ${className}`.trim()}>
      <Icon />
    </span>
  );
}
