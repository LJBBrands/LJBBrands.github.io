/** Decorative Charger-inspired muscle sedan side profile. */
export default function MuscleSedanOutline({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Continuous body: long hood, tucked cabin, muscular rear */}
        <path d="M22 86 C30 78 44 72 62 70 L118 66 C128 52 156 40 196 38 C238 36 272 42 298 54 L334 68 C352 70 368 74 382 80 C388 83 390 88 386 92 L372 98 C348 102 310 104 250 104 L112 104 C78 104 50 102 34 98 C24 95 18 90 22 86 Z" />

        {/* Character / shoulder line */}
        <path
          d="M66 72 C110 68 168 64 214 62 C268 60 318 66 352 78"
          opacity="0.5"
        />

        {/* Greenhouse — low, stretched */}
        <path d="M138 66 C162 48 188 40 218 38 C250 36 276 42 296 54 L276 66 C258 58 236 54 214 54 C190 54 164 58 138 66 Z" />
        <path d="M172 50 L178 66" opacity="0.4" />
        <path d="M236 40 L236 64" opacity="0.32" />

        {/* Front nose / grille plane */}
        <path d="M28 84 C36 76 48 72 64 70" opacity="0.75" />
        {/* Rear deck */}
        <path d="M334 68 L356 70 L368 80" opacity="0.7" />

        {/* Rocker */}
        <path d="M84 98 C140 102 230 102 318 98" opacity="0.32" />

        {/* Wheels — grounded, proportional */}
        <circle cx="108" cy="96" r="18" />
        <circle cx="108" cy="96" r="8" opacity="0.5" />
        <circle cx="300" cy="96" r="18" />
        <circle cx="300" cy="96" r="8" opacity="0.5" />
      </g>
    </svg>
  );
}
