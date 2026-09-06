import { Button } from "@/components/ui/Button";

export function SectionOne() {
  return (
    <>
      <section className="paper-bg relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pb-32">
        <div className="container-content px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Hero Text - Left */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h1 className="hero-stagger-title font-brutal text-4xl font-bold uppercase tracking-tight text-ev-black sm:text-5xl md:text-6xl lg:text-7xl">
                Your Brand, But Make It Slap ✨
              </h1>
              <p className="hero-stagger-subtitle mt-6 max-w-xl text-lg font-bold leading-relaxed text-ev-black/80 sm:text-xl md:text-2xl">
                We turn your &quot;meh&quot; ideas into &quot;no way&quot; moments. Bold designs, viral content, and digital growth that actually hits different.
              </p>
              <div className="hero-stagger-children mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Button href="/contact" variant="primary" size="lg">
                  Let&apos;s Create Magic
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  See The Vibe
                </Button>
              </div>
            </div>

            {/* Hero Video - Right */}
            <div className="order-1 lg:order-2">
              <div className="hero-stagger-children overflow-hidden border-[3px] border-black shadow-brutal-xl md:shadow-brutal-xl">
                <video
                  className="block h-auto w-full object-cover"
                  src="/videos/ElanVeyHeroVideo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  poster="/images/sections/Section1.jpeg"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stamp-edge-bottom" aria-hidden />

      <section className="relative bg-ev-black" aria-labelledby="audience-mockup-title">
        <h2 id="audience-mockup-title" className="sr-only">
          Who is Elan Vey for?
        </h2>
        <picture className="block w-full">
          <source
            media="(max-width: 767px)"
            srcSet="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/M2-KMTcwIAz9cJayY7gfhlgLfDrCGPu7s.jpeg"
          />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/W2-IZ81j9UgMPVaODsWPCX40disIjcVol.jpeg"
            alt="Elan Vey audience overview for creators, dreamers, artists, businesses, and everyone in between"
            className="block h-auto w-full"
          />
        </picture>
      </section>
    </>
  );
}
