import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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

  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const fit = () => {
      const nav = header.querySelector<HTMLElement>("[aria-label='Primary']");
      const row = header.querySelector<HTMLElement>(".nav-row");
      const logo = row?.querySelector("a");
      if (!nav || !row || !logo) return;
      header.classList.remove("nav-force-full", "nav-force-compact");
      const available = row.clientWidth - logo.getBoundingClientRect().width - 24;
      const previous = nav.style.cssText;
      nav.style.cssText = "display:flex;position:absolute;visibility:hidden;pointer-events:none;";
      const needed = nav.scrollWidth;
      nav.style.cssText = previous;
      header.classList.add(needed > available ? "nav-force-compact" : "nav-force-full");
      if (needed <= available) setOpen(false);
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <>
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-40 bg-paper transition-shadow duration-200",
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

      <div className="nav-row site-grid flex items-center justify-between gap-4 py-3">
        <Link to="/" className="shrink-0" aria-label="Corti Hearing Clinic home">
          <img
            src="/images/logo.png"
            alt="Corti Hearing Clinic"
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <nav
          className="nav-desktop items-center gap-0.5 rounded-pill bg-ink px-1.5 py-1.5 whitespace-nowrap"
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
                  "relative px-2.5 py-2 text-[13px] font-light text-paper/90 transition-colors hover:text-gold xl:px-3.5 xl:text-sm",
                  active && "text-gold",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-2.5 bottom-1 h-0.5 rounded-pill bg-gold transition-opacity",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="ml-1 inline-flex h-10 items-center gap-1.5 rounded-pill bg-gold px-3.5 text-[13px] font-medium text-ink hover:bg-gold-deep xl:px-4 xl:text-sm"
          >
            Contact Us
            <ArrowRight className="size-3.5" />
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="nav-toggle"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-7" />
        </Button>
      </div>
    </header>
    <div
      id="mobile-menu"
      className={cn("fixed inset-0 z-[80]", !open && "hidden")}
    >
      <button
        type="button"
        data-close-menu
        className="absolute inset-0 bg-ink/60"
        aria-label="Close menu"
        onClick={() => setOpen(false)}
      />
      <div className="absolute inset-y-0 right-0 flex h-dvh w-[min(22rem,92vw)] flex-col overflow-y-auto bg-ink px-8 py-8 text-paper shadow-xl">
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
            const active = item.to === "/" ? pathname === "/" : pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                data-close-menu
                className={cn(
                  "border-b border-paper/15 py-3 text-lg",
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
    </>
  );
}
