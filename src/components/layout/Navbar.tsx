"use client";

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
    <div className="pill-nav w-full px-3 py-1.5 flex items-center justify-between gap-1.5 sm:gap-3 box-border">
      {/* Left: Logo */}
      <Link href="/" className="flex items-center shrink-0">
        <img
          src="/images/Logo_text.png"
          alt="Elan Vey"
          className="h-6 sm:h-8 w-auto object-contain max-w-[120px] sm:max-w-[150px]"
        />
      </Link>

      {/* Center: Menu Option */}
      <button
        type="button"
        className="flex items-center gap-1.5 rounded-full px-2 py-1 text-[11px] sm:text-xs font-brutal uppercase tracking-wider text-black hover:bg-black/10 transition-colors shrink-0"
        onClick={onToggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span className="font-extrabold">MENU</span>
        <div className="flex flex-col gap-1 w-3.5">
          <span
            className={`block h-0.5 w-full rounded-full transition-all duration-300 ${
              menuOpen
                ? "translate-y-[2px] rotate-45 bg-black"
                : "bg-black"
            }`}
          />
          <span
            className={`block h-0.5 w-full rounded-full transition-all duration-300 ${
              menuOpen
                ? "-translate-y-[2px] -rotate-45 bg-black"
                : "bg-black"
            }`}
          />
        </div>
      </button>

      {/* Right: Subscribe Button */}
      <Link
        href="/subscription"
        className="subscribe-btn text-[11px] sm:text-xs inline-flex items-center justify-center shrink-0 whitespace-nowrap leading-none !px-3 !py-1"
      >
        <span>Subscribe</span>
      </Link>
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
        className={`fixed left-0 right-0 top-0 z-50 flex justify-center transition-all duration-500 ${
          scrolled && !menuOpen ? "py-2.5 sm:py-3" : "py-3 sm:py-4"
        }`}
      >
        <nav
          className="w-full max-w-7xl px-2 sm:px-6 flex items-center justify-center overflow-visible"
          aria-label="Main navigation"
        >
          {/* Mobile: pill header with hamburger inside */}
          <div className="w-full max-w-[calc(100vw-1.5rem)] sm:max-w-md lg:hidden mx-auto">
            <PillHeader
              menuOpen={menuOpen}
              onToggleMenu={() => setMenuOpen(!menuOpen)}
            />
          </div>

          {/* Desktop: floating pill-style navbar */}
          <div className="hidden lg:block w-full max-w-7xl">
            <div className="pill-nav w-full">
              <Link href="/" className="flex items-center flex-shrink-0">
                <img
                  src="/images/Logo_text.png"
                  alt="Elan Vey"
                  className="h-16 w-auto md:h-20 object-contain"
                />
              </Link>

              <ul className="flex items-center gap-1 xl:gap-2">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="nav-pill-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/subscription"
                className="subscribe-btn !px-6 !py-2.5 flex-shrink-0"
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
        </div>
      </div>
    </>
  );
}
