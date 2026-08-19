export function OrbitalRings() {
  return (
    <svg
      viewBox="0 0 400 200"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    >
      <ellipse
        cx="200"
        cy="100"
        rx="170"
        ry="70"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.9"
      />
      <ellipse
        cx="200"
        cy="100"
        rx="130"
        ry="50"
        fill="none"
        stroke="white"
        strokeWidth="1"
        opacity="0.6"
      />
      {[0, 72, 144, 216, 288].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x = 200 + 170 * Math.cos(rad);
        const y = 100 + 70 * Math.sin(rad);
        return (
          <path
            key={deg}
            d={`M${x} ${y} l3 -3 l0 6 l-6 0 l3 -3z`}
            fill="white"
            opacity="0.9"
          />
        );
      })}
    </svg>
  );
}

export function HalftoneMoon() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-40 w-40 md:h-52 md:w-52 lg:h-64 lg:w-64"
      aria-hidden
    >
      <defs>
        <pattern id="halftone" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.35)" />
        </pattern>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#halftone)" opacity="0.9" />
      <circle cx="130" cy="80" r="75" fill="#FF0066" />
      <circle cx="130" cy="80" r="75" fill="url(#halftone)" opacity="0.5" />
    </svg>
  );
}
