export function AnimatedPacManPillIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center h-10 sm:h-12 md:h-14 w-28 sm:w-36 md:w-44 overflow-hidden shrink-0 ${className}`} aria-hidden>
      {/* 3 Yellow Dots */}
      <div className="absolute left-[45%] top-1/2 -translate-y-1/2">
        <div className="pacdot-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-ev-neon-yellow border border-black shadow-[1px_1px_0_#000]" />
      </div>
      <div className="absolute left-[65%] top-1/2 -translate-y-1/2">
        <div className="pacdot-2 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-ev-neon-yellow border border-black shadow-[1px_1px_0_#000]" />
      </div>
      <div className="absolute left-[85%] top-1/2 -translate-y-1/2">
        <div className="pacdot-3 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-ev-neon-yellow border border-black shadow-[1px_1px_0_#000]" />
      </div>

      {/* Pac-Man Character */}
      <div className="pacman-mover absolute top-1/2 -translate-y-1/2">
        <div className="relative h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
          <div className="pacman-body absolute inset-0 rounded-full bg-[#FF2A3C] border-2 border-black shadow-[2px_2px_0_#000]" />
          <div className="absolute left-[30%] top-[20%] h-1.5 w-1.5 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
}

export function PacManIcon({ className = "" }: { className?: string }) {
  return (
    <img src="/images/PacMan.png" alt="PacMan" className={`h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain ${className}`} aria-hidden />
  );
}

export function BlueStarIcon() {
  return (
    <img src="/images/Star.png" alt="Star" className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain" aria-hidden />
  );
}

export function WhiteTriangleIcon() {
  return (
    <img src="/images/Triangle.png" alt="Triangle" className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain" aria-hidden />
  );
}

export function SparkleIcon() {
  return (
    <img src="/images/Diamond.png" alt="Sparkle" className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain" aria-hidden />
  );
}
