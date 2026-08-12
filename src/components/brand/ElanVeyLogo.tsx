export function ElanVeyLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="14" cy="16" r="8" fill="#FFE600" />
      <ellipse
        cx="14"
        cy="16"
        rx="12"
        ry="4"
        stroke="#FFE600"
        strokeWidth="2"
        transform="rotate(-20 14 16)"
      />
      <path
        d="M22 8 L24 4 L26 8 Z"
        fill="#FFE600"
      />
      <text
        x="34"
        y="21"
        fill="#FFE600"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontWeight="800"
        fontSize="14"
      >
        Elan Vey
      </text>
    </svg>
  );
}
