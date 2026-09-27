import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-paper/95 backdrop-blur-sm transition-shadow duration-200",
        scrolled && "shadow-[0_8px_24px_-16px_rgba(12,12,12,0.35)]",
      )}
    >
      <div className="hidden border-b border-line md:block">
        <div className="site-grid flex items-center justify-end gap-5 py-2 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-gold" />
            Frazer Town, Pulikeshi Nagar, Bengaluru
          </span>
          <span className="text-gold">|</span>
          <a
            href={`tel:${site.phones.primary.tel}`}
            className="inline-flex items-center gap-1.5 hover:text-ink"
          >
            <Phone className="size-3.5 text-gold" />
            {site.phones.primary.display}
          </a>
          <span className="text-gold">|</span>
          <a
            href={`tel:${site.phones.secondary.tel}`}
            className="hover:text-ink"
          >
            {site.phones.secondary.display}
          </a>
        </div>
      </div>

      <div className="site-grid flex items-center justify-between gap-4 py-3">
        <Link to="/" className="shrink-0" aria-label="Corti Hearing Clinic home">
          <img
            src="/images/logo.png"
            alt="Corti Hearing Clinic"
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <nav
          className="hidden items-center rounded-pill bg-ink px-2 py-1.5 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative px-4 py-2 text-sm font-light text-paper/90 transition-colors hover:text-gold",
                  active && "text-gold",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-5 bottom-1 h-0.5 rounded-pill bg-gold transition-opacity",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="ml-1 inline-flex h-10 items-center gap-2 rounded-pill bg-gold px-4 text-sm font-medium text-ink hover:bg-gold-deep"
          >
            Contact Us
            <ArrowRight className="size-3.5" />
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-7" />
        </Button>
      </div>

      <div
        id="mobile-menu"
        className={cn("fixed inset-0 z-50 lg:hidden", !open && "hidden")}
      >
        <button
          type="button"
          data-close-menu
          className="absolute inset-0 bg-ink/50"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
        <div className="absolute inset-y-0 right-0 flex w-[min(20rem,88vw)] flex-col bg-ink px-8 py-8 text-paper shadow-xl">
          <div className="mb-8 flex items-center justify-between">
            <img src="/images/logo.png" alt="" className="h-10 rounded-md bg-paper p-1" />
            <button
              type="button"
              data-close-menu
              onClick={() => setOpen(false)}
              className="grid size-11 place-items-center text-paper"
              aria-label="Close menu"
            >
              <X className="size-7" />
            </button>
          </div>
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  data-close-menu
                  className={cn(
                    "border-b border-paper/10 py-3 text-lg",
                    active ? "text-gold" : "text-paper",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              data-close-menu
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-pill bg-gold text-sm font-medium text-ink"
            >
              Contact Us
              <ArrowRight className="size-4" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
