"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";

function PillHeader({
  menuOpen,
  onToggleMenu,
}: {
  menuOpen: boolean;
  onToggleMenu: () => void;
}) {
  return (
    <div className="pill-nav w-full max-w-lg">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/Logo_text.png"
          alt="Elan Vey"
          width={120}
          height={40}
          className="h-8 w-auto md:h-10 object-contain"
          priority
        />
      </Link>

      <div className="flex items-center gap-2 md:gap-3">
        <button
          type="button"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={onToggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${
              menuOpen
                ? "translate-y-[3.5px] rotate-45 bg-ev-white"
                : "bg-ev-black"
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${
              menuOpen
                ? "-translate-y-[3.5px] -rotate-45 bg-ev-white"
                : "bg-ev-black"
            }`}
          />
        </button>

        <Link
          href="/subscription"
          className="subscribe-btn hidden md:inline-flex"
        >
          Subscribe Now
        </Link>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled && !menuOpen ? "py-3 md:py-4" : "py-4 md:py-5"
        }`}
      >
        <nav
          className="container-content relative flex items-center justify-center px-5 md:px-8 lg:justify-center lg:px-12"
          aria-label="Main navigation"
        >
          {/* Mobile: pill header with hamburger inside */}
          <div className="w-full max-w-md lg:hidden">
            <PillHeader
              menuOpen={menuOpen}
              onToggleMenu={() => setMenuOpen(!menuOpen)}
            />
          </div>

          {/* Desktop: floating pill-style navbar */}
          <div className="hidden lg:block w-full max-w-5xl">
            <div className="pill-nav w-full">
              <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                <Image
                  src="/images/Logo_text.png"
                  alt="Elan Vey"
                  width={140}
                  height={48}
                  className="h-8 w-auto md:h-9 object-contain"
                  priority
                />
              </Link>

              <ul className="flex items-center gap-6 xl:gap-8">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-brutal uppercase text-xs tracking-[0.15em] text-white transition-all relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-ev-neon-yellow after:transition-all hover:after:w-full"
                      style={{ textShadow: "1.5px 1.5px 0 #cc0044, 3px 3px 0 #660022" }}
                    >
                      <span className="hover:text-ev-neon-yellow transition-colors inline-block hover:-translate-y-[1px]">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/subscription"
                className="subscribe-btn !px-6 !py-2.5 flex-shrink-0 !shadow-none"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-ev-black transition-all duration-500 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-1 flex-col justify-center overflow-y-auto px-8 py-20">
          <ul className="space-y-4 sm:space-y-6">
            {navigation.map((item, i) => (
              <li
                key={item.href}
                className="overflow-hidden"
                style={{
                  transitionDelay: menuOpen ? `${i * 50}ms` : "0ms",
                }}
              >
                <Link
                  href={item.href}
                  className={`font-brutal block text-3xl uppercase text-ev-neon-yellow transition-all duration-500 sm:text-4xl ${
                    menuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ textShadow: "3px 3px 0 #000" }}
                  onClick={() => setMenuOpen(false)}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={`mt-10 shrink-0 transition-all duration-500 sm:mt-12 ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: menuOpen ? "350ms" : "0ms" }}
          >
            <Link
              href="/subscription"
              className="subscribe-btn block w-full py-4 text-center text-base"
              onClick={() => setMenuOpen(false)}
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
