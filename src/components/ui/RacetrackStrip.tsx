export function RacetrackStrip() {
  return (
    <div 
      className="w-full h-10 sm:h-12 md:h-14"
      style={{ 
        background: `repeating-conic-gradient(#000 0% 25%, #fff 0% 50%) 0 0 / 28px 28px`,
      }}
      aria-hidden
    />
  );
}
