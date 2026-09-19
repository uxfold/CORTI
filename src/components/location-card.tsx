import { Clock, MapPin, Phone } from "lucide-react";
import type { locations } from "@/lib/site";

type Location = (typeof locations)[number];

export function LocationCard({
  location,
  compact = false,
}: {
  location: Location;
  compact?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-paper">
      <div className="p-6">
        <p className="text-xs font-medium tracking-widest text-gold uppercase">
          {location.kind}
        </p>
        <h3 className="mt-1 text-2xl font-semibold">{location.name}</h3>
        <p className="mt-3 flex gap-2 text-sm text-muted">
          <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
          {location.address}
        </p>
        <p className="mt-2 flex gap-2 text-sm text-muted">
          <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
          {location.hours}
        </p>
        <div className="mt-2 flex flex-col gap-1 text-sm">
          {location.phones.map((phone) => (
            <a
              key={phone.tel}
              href={`tel:${phone.tel}`}
              className="inline-flex items-center gap-2 font-medium hover:text-gold"
            >
              <Phone className="size-4 text-gold" />
              {phone.display}
            </a>
          ))}
        </div>
      </div>
      <iframe
        title={`Map of Corti Hearing Clinic, ${location.name}`}
        src={location.map}
        className={compact ? "h-40 w-full border-0" : "h-56 w-full border-0"}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </article>
  );
}
