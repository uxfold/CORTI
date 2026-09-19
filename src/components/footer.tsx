import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-cream">
      <div className="site-grid grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src="/images/logo.png" alt="Corti Hearing Clinic" className="h-14 w-auto" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            Corti Hearing Clinic provides professional advice and high-quality
            solutions for people who may be experiencing a hearing-related
            issue. Speak to our audiologist to see which brand and style suits
            you best.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 md:col-span-7">
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide uppercase">
              Quick links
            </h3>
            <ul className="space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-muted hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-muted hover:text-ink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide uppercase">
              Contact
            </h3>
            <p className="text-sm text-muted">
              <a href={`tel:${site.phones.secondary.tel}`} className="hover:text-ink">
                {site.phones.secondary.display}
              </a>
            </p>
            <p className="text-sm text-muted">
              <a href={`tel:${site.phones.primary.tel}`} className="hover:text-ink">
                {site.phones.primary.display}
              </a>
            </p>
            <h3 className="mt-6 mb-3 text-sm font-semibold tracking-wide uppercase">
              Social
            </h3>
            <div className="flex gap-2">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid size-11 place-items-center rounded-pill border border-line bg-paper text-ink hover:border-gold"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid size-11 place-items-center rounded-pill border border-line bg-paper text-ink hover:border-gold"
              >
                <Facebook className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-line py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} Corti Hearing Clinic. All rights reserved.
      </div>
    </footer>
  );
}
