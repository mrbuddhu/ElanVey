export function RacetrackStrip() {
  return (
    <div 
      className="w-full h-8 sm:h-11 md:h-14 border-y-2 border-black"
      style={{ 
        background: `repeating-conic-gradient(#000000 0% 25%, #FFFFFF 0% 50%) 0 0 / 28px 28px`,
      }}
      aria-hidden
    />
  );
}
