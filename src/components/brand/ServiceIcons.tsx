import { HomeService } from "@/data/homeServices";

const iconMap: Record<HomeService["icon"], React.ReactNode> = {
  star: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <path
        d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.8 5.7 21l2.3-7-6-4.6h7.6L12 2z"
        fill="#0066FF"
      />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <circle cx="12" cy="12" r="5" fill="#FF8C00" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect
          key={deg}
          x="11"
          y="2"
          width="2"
          height="4"
          fill="#FF8C00"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
    </svg>
  ),
  triangle: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <path d="M12 4 L22 20 H2 Z" fill="#FF0033" />
    </svg>
  ),
  snowflake: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <path
        d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"
        stroke="#0066FF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  diamond: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="#FFE600" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <path d="M12 2c0 0-6 4-6 10 0 2 1 4 3 5l-1 5 4-2c1 1 2 1 3 1 6 0 10-6 10-6s-4-6-10-13z" fill="#FF0033" />
      <circle cx="12" cy="10" r="2" fill="#fff" />
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <path
        d="M12 22c4 0 7-3 7-7 0-3-2-5-4-7-1 2-3 3-3 3s-1-4-3-6c-2 3-4 7-4 10 0 4 3 7 7 7z"
        fill="#FF8C00"
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
