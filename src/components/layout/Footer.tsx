import Image from "next/image";
import Link from "next/link";
import { footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="section-dark border-t-[3px] border-white">
      <div className="container-content section-padding !py-16 md:!py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <img
                src="/images/Logo_text.png"
                alt="Elan Vey"
                className="h-48 w-auto md:h-64 object-contain drop-shadow-[3px_3px_0_rgba(0,0,0,1)]"
              />
            </Link>
            <p className="mt-3 max-w-sm text-sm font-bold leading-relaxed text-white/70">
              {siteConfig.tagline}. Friendly creative help for everyone —
              individuals, small shops, and all your big ideas.
            </p>
            <div className="mt-4">
              <Button href="/contact" variant="primary" size="sm">
                Start a Conversation
              </Button>
            </div>
          </div>

          <div>
            <h3
              className="mb-4 font-brutal text-xs uppercase tracking-[0.25em] text-ev-neon-yellow"
              style={{ textShadow: "1.5px 1.5px 0 #cc0044, 3px 3px 0 #660022" }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerNavigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block font-brutal uppercase text-xs tracking-[0.1em] text-white/80 transition-all hover:text-ev-neon-yellow hover:-translate-y-[1px]"
                    style={{ textShadow: "1px 1px 0 #660022, 2px 2px 0 #330011" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-4 font-brutal text-xs uppercase tracking-[0.25em] text-ev-neon-yellow"
              style={{ textShadow: "1.5px 1.5px 0 #cc0044, 3px 3px 0 #660022" }}
            >
              Connect
            </h3>
            <ul className="space-y-3 text-sm font-bold text-white/80">
              <li
                className="font-brutal uppercase tracking-[0.05em] text-xs"
                style={{ textShadow: "1px 1px 0 #006688, 2px 2px 0 #003344" }}
              >
                {siteConfig.contact.email}
              </li>
              <li
                className="font-brutal uppercase tracking-[0.05em] text-xs"
                style={{ textShadow: "1px 1px 0 #006688, 2px 2px 0 #003344" }}
              >
                {siteConfig.contact.phone}
              </li>
              {siteConfig.social.instagram.startsWith("http") && (
                <li className="pt-2">
                  <a
                    href={siteConfig.social.instagram}
                    className="inline-block font-brutal uppercase tracking-[0.08em] text-xs transition-all hover:text-ev-neon-yellow hover:-translate-y-[1px]"
                    style={{ textShadow: "1px 1px 0 #660022, 2px 2px 0 #330011" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram: elan.vey
                  </a>
                </li>
              )}
              {siteConfig.social.facebook.startsWith("http") && (
                <li>
                  <a
                    href={siteConfig.social.facebook}
                    className="inline-block font-brutal uppercase tracking-[0.08em] text-xs transition-all hover:text-ev-neon-yellow hover:-translate-y-[1px]"
                    style={{ textShadow: "1px 1px 0 #660022, 2px 2px 0 #330011" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook: elan.vey
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t-[3px] border-white/20 pt-8 md:flex-row md:items-center">
          <p
            className="text-xs font-brutal uppercase tracking-[0.1em] text-white/50"
            style={{ textShadow: "1px 1px 0 rgba(0,0,0,0.8)" }}
          >
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <ul className="flex gap-6">
            {footerNavigation.legal.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-block font-brutal uppercase tracking-[0.08em] text-[10px] text-white/50 transition-all hover:text-ev-neon-yellow hover:-translate-y-[1px]"
                  style={{ textShadow: "1px 1px 0 #330011" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
