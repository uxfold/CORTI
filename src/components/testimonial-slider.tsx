import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/lib/site";
import { cn } from "@/lib/utils";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  return (
    <div className="mx-auto max-w-3xl">
      <figure className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left">
        <img
          src={item.img}
          alt=""
          className="size-28 shrink-0 rounded-full object-cover md:size-36"
        />
        <div>
          <figcaption className="text-lg font-semibold">{item.name}</figcaption>
          <blockquote className="mt-2 text-sm leading-relaxed text-muted md:text-base">
            “{item.quote}”
          </blockquote>
          <div className="mt-3 flex justify-center gap-1 text-gold md:justify-start">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-gold" />
            ))}
          </div>
        </div>
      </figure>

      <div className="mt-8 flex items-center justify-center gap-2">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() =>
            setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
          }
          className="grid size-11 place-items-center rounded-pill bg-gold text-ink"
        >
          <ChevronLeft className="size-5" />
        </button>
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            aria-label={`Show ${t.name}`}
            onClick={() => setIndex(i)}
            className={cn(
              "grid size-11 place-items-center rounded-pill text-sm font-medium",
              i === index ? "bg-gold text-ink" : "bg-mist text-ink",
            )}
          >
            {i + 1}
          </button>
        ))}
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() =>
            setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))
          }
          className="grid size-11 place-items-center rounded-pill bg-gold text-ink"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
