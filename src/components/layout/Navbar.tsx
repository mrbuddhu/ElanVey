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
    <div className="pill-nav w-full max-w-2xl">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center">
          <img
            src="/images/Logo_text.png"
            alt="Elan Vey"
            className="h-16 w-auto md:h-20 object-contain"
          />
        </Link>

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
          className="subscribe-btn inline-flex md:hidden"
        >
          <span>Subscribe</span>
        </Link>

        <Link
          href="/subscription"
          className="subscribe-btn inline-flex hidden md:flex"
        >
          <span>Subscribe Now</span>
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
