import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function AppointmentBanner({ dark = false }: { dark?: boolean }) {
  return (
    <section className={dark ? "bg-cream py-12 md:py-16" : "py-12 md:py-16"}>
      <div className="site-grid">
        <div className="flex flex-col items-center justify-between gap-6 rounded-xl bg-ink px-6 py-10 text-center text-paper md:flex-row md:px-12 md:text-left">
          <h3 className="text-2xl font-bold tracking-tight md:text-4xl">
            Book your appointment now
          </h3>
          <Button variant="gold" size="lg" asChild>
            <a href={`tel:${site.phones.primary.tel}`}>
              <Phone className="size-4" />
              {site.phones.primary.display}
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
