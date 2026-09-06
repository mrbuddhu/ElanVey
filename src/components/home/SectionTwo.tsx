import { OrbitalRings } from "@/components/brand/SectionGraphics";

export function SectionTwo() {
  return (
    <section className="relative overflow-hidden bg-ev-black py-20 md:py-28 lg:py-36">
      <OrbitalRings />
      <div className="container-content relative px-5 md:px-8 lg:px-12">
        <p className="outline-hero-text mx-auto max-w-5xl text-center text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          And everyone
          <br />
          in between.
        </p>
      </div>
    </section>
  );
}
