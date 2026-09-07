import { HomeService } from "@/data/homeServices";

const pngSrcMap: Record<string, string> = {
  star: "/images/Star.png",
  sun: "/images/Sun.png",
  triangle: "/images/Triangle.png",
  snowflake: "/images/Frost.png",
  diamond: "/images/Diamond.png",
};

export function ServiceIcon({ icon }: { icon: HomeService["icon"] }) {
  if (pngSrcMap[icon]) {
    return (
      <span className="inline-flex shrink-0">
        <img
          src={pngSrcMap[icon]}
          alt=""
          aria-hidden
          className="h-10 w-10 object-contain sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
        />
      </span>
    );
  }

  if (icon === "rocket") {
    return (
      <span className="inline-flex shrink-0">
        <svg viewBox="0 0 48 48" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" aria-hidden>
          <path d="M24 4c0 0-12 8-12 20 0 4 2 8 6 10l-2 10 8-4c2 2 4 2 6 2 12 0 20-12 20-12S40 16 24 4z" fill="#FF1F3D" stroke="#000000" strokeWidth="1.5" />
          <circle cx="24" cy="20" r="4" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
        </svg>
      </span>
    );
  }

  if (icon === "flame") {
    return (
      <span className="inline-flex shrink-0">
        <svg viewBox="0 0 48 48" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" aria-hidden>
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
      </span>
    );
  }

  if (icon === "sparkle") {
    return (
      <span className="inline-flex shrink-0">
        <svg viewBox="0 0 48 48" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" aria-hidden>
          <path
            d="M24 2 L28 20 L46 24 L28 28 L24 46 L20 28 L2 24 L20 20 Z"
            fill="#5B58FF"
            stroke="#000000"
            strokeWidth="1.5"
          />
        </svg>
      </span>
    );
  }

  if (icon === "bolt") {
    return (
      <span className="inline-flex shrink-0">
        <svg viewBox="0 0 48 48" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" aria-hidden>
          <path
            d="M26 2 L8 28 h12 l-4 18 L40 20 H28 l2 -18 z"
            fill="#FFE500"
            stroke="#000000"
            strokeWidth="1.5"
          />
        </svg>
      </span>
    );
  }

  if (icon === "target") {
    return (
      <span className="inline-flex shrink-0">
        <svg viewBox="0 0 48 48" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" aria-hidden>
          <circle cx="24" cy="24" r="20" fill="#FF3D6E" stroke="#000000" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="13" fill="#ffffff" stroke="#000000" strokeWidth="1.2" />
          <circle cx="24" cy="24" r="7" fill="#FF3D6E" stroke="#000000" strokeWidth="1" />
          <circle cx="24" cy="24" r="2" fill="#000000" />
        </svg>
      </span>
    );
  }

  return (
    <span className="inline-flex shrink-0">
      <svg viewBox="0 0 48 48" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" aria-hidden>
        <path
          d="M10 14 C10 14 4 18 4 24 C4 30 10 34 10 34 L10 38 L22 32 C23 33 26 34 30 34 C38 34 44 30 44 24 C44 18 38 14 30 14 C26 14 23 15 22 16 Z"
          fill="#FF6A00"
          stroke="#000000"
          strokeWidth="1.5"
        />
        <path
          d="M4 22 C2 22 2 26 4 26 L10 26 Z"
          fill="#FF6A00"
          stroke="#000000"
          strokeWidth="1"
        />
      </svg>
    </span>
  );
}

export function LanternStamp({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/Lantern.png"
      alt=""
      aria-hidden
      className={`object-contain ${className}`}
    />
  );
}
