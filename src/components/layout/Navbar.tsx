"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import { ElanVeyLogo } from "@/components/brand/ElanVeyLogo";

function PillHeader() {
  return (
    <div className="pill-nav w-full max-w-lg">
      <Link href="/" className="flex items-center gap-2">
        <ElanVeyLogo className="h-7 w-auto md:h-8" />
        <span className="text-ev-neon-yellow" aria-hidden>
          ◆
        </span>
      </Link>
      <Link href="/subscription" className="subscribe-btn">
        Subscribe Now
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
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled && !menuOpen
            ? "bg-ev-black/90 py-3 backdrop-blur-xl"
            : "bg-transparent py-4 md:py-5"
        }`}
      >
        <nav
          className="container-content relative flex items-center justify-center px-5 md:px-8 lg:justify-between lg:px-12"
          aria-label="Main navigation"
        >
          {/* Mobile: pill header matching mockup */}
          <div className="w-full max-w-md lg:hidden">
            <PillHeader />
          </div>

          <button
            type="button"
            className="absolute right-5 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
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

          {/* Desktop: full nav */}
          <Link
            href="/"
            className="hidden font-display text-lg font-bold tracking-[0.15em] text-ev-white transition-opacity hover:opacity-80 lg:block lg:text-xl"
            onClick={() => setMenuOpen(false)}
          >
            ELAN VEY
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-underline text-sm font-medium text-ev-offwhite/80 transition-colors hover:text-ev-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link href="/subscription" className="subscribe-btn !px-6 !py-2.5">
              Subscribe Now
            </Link>
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
        <div className="flex flex-1 flex-col justify-center px-8 pt-20">
          <ul className="space-y-6">
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
                  className={`font-brutal block text-4xl uppercase text-ev-neon-yellow transition-all duration-500 ${
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
            className={`mt-12 transition-all duration-500 ${
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
