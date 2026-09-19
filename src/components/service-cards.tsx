import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site";

export function ServiceCards() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {services.map((service) => (
        <article key={service.title} className="group text-center">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={service.img}
              alt=""
              className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <Link
              to={service.to}
              className="absolute right-4 bottom-4 inline-flex h-12 items-center gap-2 rounded-pill bg-gold px-5 text-sm font-medium text-ink transition-colors hover:bg-gold-deep"
            >
              Read more
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
        </article>
      ))}
    </div>
  );
}
