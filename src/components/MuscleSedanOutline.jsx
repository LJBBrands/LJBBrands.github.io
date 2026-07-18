/**
 * Original monoline side profile of a modern American muscle sedan.
 * Stance and proportions only — not traced from manufacturer artwork.
 */
export default function MuscleSedanOutline({ className = "" }) {
  return (
    <svg
      viewBox="0 0 520 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Body: long hood, tucked cabin, muscular rear quarter */}
        <path d="M22 104 C28 90 46 80 74 74 L168 66 C176 66 182 62 186 54 C198 32 232 20 278 18 C328 16 372 26 404 44 C416 52 434 62 456 68 L498 76 C508 78 514 86 512 96 C510 104 500 110 486 112 L448 116 C400 120 320 122 250 122 L118 122 C72 122 42 118 28 112 C18 108 16 106 22 104 Z" />

        {/* Hood surface / fender crown */}
        <path d="M76 74 C110 70 142 68 168 66" opacity="0.55" />

        {/* Flank character line */}
        <path
          d="M86 88 C150 80 230 74 310 74 C390 74 450 82 492 96"
          opacity="0.42"
        />

        {/* Low greenhouse */}
        <path d="M196 62 C218 40 250 26 288 24 C330 22 366 30 392 46 L408 60 C384 50 352 44 316 44 C272 44 230 50 204 62 Z" />

        {/* Window division (A / B / C) */}
        <path d="M236 36 L244 60" opacity="0.4" />
        <path d="M300 24 L300 60" opacity="0.28" />
        <path d="M360 34 L368 58" opacity="0.36" />

        {/* Nose plane */}
        <path d="M26 102 C38 88 56 78 80 74" opacity="0.72" />

        {/* Deck / rear shoulder */}
        <path d="M408 60 L448 66 L486 82" opacity="0.7" />

        {/* Door cut suggestion */}
        <path d="M252 62 L252 112" opacity="0.18" />
        <path d="M332 58 L336 112" opacity="0.16" />

        {/* Rocker */}
        <path d="M108 118 C180 122 300 122 430 116" opacity="0.26" />

        {/* Front wheel */}
        <circle cx="138" cy="114" r="22" />
        <circle cx="138" cy="114" r="9" opacity="0.5" />

        {/* Rear wheel under haunch */}
        <circle cx="402" cy="114" r="22" />
        <circle cx="402" cy="114" r="9" opacity="0.5" />
      </g>
    </svg>
  );
}
