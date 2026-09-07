export function AnimatedPacManRow({ className = '' }: { className?: string }) {
  return (
    <div className={`pacman-row relative flex h-20 w-full items-center md:h-24 lg:h-28 ${className}`} aria-hidden>
      {/* Three static dots eaten in sequence */}
      <div className="absolute right-[22%] top-1/2 -translate-y-1/2 md:right-[20%] lg:right-[18%]">
        <div className="pacdot-1 h-5 w-5 rounded-full bg-ev-neon-yellow border-[2px] border-black md:h-7 md:w-7 lg:h-9 lg:w-9 shadow-[2px_2px_0_#000]" />
      </div>
      <div className="absolute right-[14%] top-1/2 -translate-y-1/2 md:right-[12%] lg:right-[10%]">
        <div className="pacdot-2 h-5 w-5 rounded-full bg-ev-neon-yellow border-[2px] border-black md:h-7 md:w-7 lg:h-9 lg:w-9 shadow-[2px_2px_0_#000]" />
      </div>
      <div className="absolute right-[6%] top-1/2 -translate-y-1/2 md:right-[4%] lg:right-[2%]">
        <div className="pacdot-3 h-5 w-5 rounded-full bg-ev-neon-yellow border-[2px] border-black md:h-7 md:w-7 lg:h-9 lg:w-9 shadow-[2px_2px_0_#000]" />
      </div>

      {/* Pac-Man character marching across + chomping mouth */}
      <div className="pacman-mover absolute left-0 top-1/2 -translate-y-1/2">
        <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-24 lg:w-24">
          {/* Body (red, facing right with mouth on right side) */}
          <div className="pacman-body absolute inset-0 rounded-full bg-[#FF2A3C] border-[3px] border-black shadow-[3px_3px_0_#000]" />
          {/* Eye */}
          <div className="absolute left-[30%] top-[18%] h-2 w-2 rounded-full bg-black md:h-3 md:w-3 lg:h-4 lg:w-4" />
        </div>
      </div>
    </div>
  );
}

export function PacManIcon() {
  return (
    <svg viewBox="0 0 80 40" className="h-10 w-20 md:h-14 md:w-28 lg:h-16 lg:w-32" aria-hidden>
      <path
        d="M20 20 A20 20 0 1 1 20 19.9 Z"
        fill="#FF2A3C"
        stroke="#000000"
        strokeWidth="2"
      />
      <circle cx="50" cy="20" r="5" fill="#FFE600" stroke="#000000" strokeWidth="1.5" />
      <circle cx="62" cy="20" r="5" fill="#FFE600" stroke="#000000" strokeWidth="1.5" />
      <circle cx="74" cy="20" r="5" fill="#FFE600" stroke="#000000" strokeWidth="1.5" />
    </svg>
  );
}

export function BlueStarIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20" aria-hidden>
      <path
        d="M20 2l4.5 13.8H38l-11.5 8.4 4.4 13.6L20 29.6 9.1 37.8l4.4-13.6L2 15.8h13.5L20 2z"
        fill="#0066FF"
        stroke="#000000"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function WhiteTriangleIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20" aria-hidden>
      <path d="M20 6 L36 34 H4 Z" fill="#F5F0E1" stroke="#000000" strokeWidth="2" />
    </svg>
  );
}

export function SparkleIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20" aria-hidden>
      <path
        d="M20 2 L22 16 L36 18 L22 20 L20 34 L18 20 L4 18 L18 16 Z"
        fill="#FFE600"
        stroke="#000000"
        strokeWidth="1.5"
      />
    </svg>
  );
}
