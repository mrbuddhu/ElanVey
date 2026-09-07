import { HomeService } from "@/data/homeServices";

const iconMap: Record<HomeService["icon"], React.ReactNode> = {
  star: (
    <svg viewBox="0 0 48 48" className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" aria-hidden>
      <path
        d="M24 4l4.8 14.8H44l-12 9.2 4.6 14L24 35.6 11.4 42l4.6-14-12-9.2h15.2L24 4z"
        fill="#5B6CFF"
        stroke="#000000"
        strokeWidth="1.5"
      />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 48 48" className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" aria-hidden>
      <circle cx="24" cy="24" r="10" fill="#FF8C00" stroke="#000000" strokeWidth="1.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect
          key={deg}
          x="22"
          y="4"
          width="4"
          height="6"
          rx="1"
          fill="#FF8C00"
          stroke="#000000"
          strokeWidth="1"
          transform={`rotate(${deg} 24 24)`}
        />
      ))}
    </svg>
  ),
  triangle: (
    <svg viewBox="0 0 48 48" className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" aria-hidden>
      <path d="M24 8 L44 40 H4 Z" fill="#FF1F3D" stroke="#000000" strokeWidth="1.5" />
    </svg>
  ),
  snowflake: (
    <svg viewBox="0 0 48 48" className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" aria-hidden>
      <path
        d="M24 4v40M4 24h40M10 10l28 28M38 10L10 38M24 4 18 10M24 4 30 10M24 44 18 38M24 44 30 38M4 24 10 18M4 24 10 30M44 24 38 18M44 24 38 30"
        stroke="#5B6CFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  diamond: (
    <svg viewBox="0 0 48 48" className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" aria-hidden>
      <path
        d="M24 4 L26.5 19.5 L42 22 L26.5 25 L24 40 L21.5 25 L6 22 L21.5 19.5 Z"
        fill="#FFE600"
        stroke="#000000"
        strokeWidth="1.5"
      />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 48 48" className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" aria-hidden>
      <path d="M24 4c0 0-12 8-12 20 0 4 2 8 6 10l-2 10 8-4c2 2 4 2 6 2 12 0 20-12 20-12S40 16 24 4z" fill="#FF1F3D" stroke="#000000" strokeWidth="1.5" />
      <circle cx="24" cy="20" r="4" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 48 48" className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" aria-hidden>
      <path
        d="M24 44c8 0 14-6 14-14 0-6-4-10-8-14-2 4-6 6-6 6s-2-8-6-12c-4 6-8 14-8 20 0 8 6 14 14 14z"
        fill="#FF6A00"
        stroke="#000000"
        strokeWidth="1.5"
      />
      <path
        d="M24 38c4 0 6-3 6-7 0-3-2-5-4-7-1 2-3 3-3 3s-1-4-3-6c-1 3-3 7-3 10 0 4 3 7 7 7z"
        fill="#FFCC00"
      />
    </svg>
  ),
};

export function ServiceIcon({ icon }: { icon: HomeService["icon"] }) {
  return <span className="inline-flex shrink-0">{iconMap[icon]}</span>;
}

export function LanternStamp({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden
    >
      <circle
        cx="100"
        cy="100"
        r="95"
        fill="none"
        stroke="#CC0000"
        strokeWidth="3"
        opacity="0.8"
      />
      <ellipse cx="100" cy="70" rx="35" ry="12" fill="#CC0000" opacity="0.9" />
      <rect x="65" y="70" width="70" height="80" rx="8" fill="#CC0000" opacity="0.85" />
      <rect x="75" y="80" width="50" height="55" rx="4" fill="#990000" opacity="0.6" />
      <line x1="100" y1="58" x2="100" y2="30" stroke="#CC0000" strokeWidth="2" />
      <path d="M85 150 Q100 175 115 150" fill="none" stroke="#CC0000" strokeWidth="2" />
      <line x1="90" y1="155" x2="90" y2="170" stroke="#CC0000" strokeWidth="1.5" />
      <line x1="100" y1="158" x2="100" y2="175" stroke="#CC0000" strokeWidth="1.5" />
      <line x1="110" y1="155" x2="110" y2="170" stroke="#CC0000" strokeWidth="1.5" />
    </svg>
  );
}
