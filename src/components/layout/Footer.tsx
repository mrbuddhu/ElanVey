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
            <Link
              href="/"
              className="font-brutal text-2xl uppercase text-ev-neon-yellow"
              style={{ textShadow: "3px 3px 0 #000" }}
            >
              Elan Vey
            </Link>
            <p className="mt-4 max-w-sm text-sm font-bold leading-relaxed text-white/70">
              {siteConfig.tagline}. Friendly creative help for everyone —
              individuals, small shops, and all your big ideas.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary" size="sm">
                Start a Conversation
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-brutal text-xs uppercase tracking-[0.2em] text-ev-neon-pink">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerNavigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-bold text-white/70 transition-colors hover:text-ev-neon-yellow"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-brutal text-xs uppercase tracking-[0.2em] text-ev-neon-pink">
              Connect
            </h3>
            <ul className="space-y-3 text-sm font-bold text-white/70">
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.phone}</li>
              {siteConfig.social.instagram.startsWith("http") && (
                <li className="pt-2">
                  <a
                    href={siteConfig.social.instagram}
                    className="transition-colors hover:text-ev-neon-yellow"
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
                    className="transition-colors hover:text-ev-neon-yellow"
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
          <p className="text-xs font-bold text-white/50">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <ul className="flex gap-6">
            {footerNavigation.legal.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-xs font-bold text-white/50 transition-colors hover:text-ev-neon-yellow"
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
