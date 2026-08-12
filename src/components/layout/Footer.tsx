import Link from "next/link";
import { footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ev-charcoal">
      <div className="container-content section-padding !py-16 md:!py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-display text-2xl font-bold tracking-[0.15em] text-ev-white"
            >
              ELAN VEY
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ev-muted">
              {siteConfig.tagline}. Premium creative strategy for ambitious
              brands ready to stand out.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="secondary" size="sm">
                Start a Conversation
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ev-muted">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerNavigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ev-offwhite/70 transition-colors hover:text-ev-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ev-muted">
              Connect
            </h3>
            <ul className="space-y-3 text-sm text-ev-offwhite/70">
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.phone}</li>
              {siteConfig.social.instagram.startsWith("http") && (
                <li className="pt-2">
                  <a
                    href={siteConfig.social.instagram}
                    className="transition-colors hover:text-ev-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              )}
              {siteConfig.social.linkedin.startsWith("http") && (
                <li>
                  <a
                    href={siteConfig.social.linkedin}
                    className="transition-colors hover:text-ev-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-ev-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <ul className="flex gap-6">
            {footerNavigation.legal.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-xs text-ev-muted transition-colors hover:text-ev-offwhite"
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
