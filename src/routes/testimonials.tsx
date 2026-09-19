import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { testimonials } from "@/lib/site";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Testimonials | Corti Hearing Clinic" },
      {
        name: "description",
        content:
          "What Corti Hearing Clinic patients say about our audiologists, pricing, and after-sales care in Bengaluru.",
      },
    ],
  }),
});

function TestimonialsPage() {
  return (
    <main id="main">
      <PageHero fade="Testimonials" accent="Client" title="speaks" />

      <section className="py-16 md:py-24">
        <div className="site-grid space-y-8">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex flex-col gap-6 rounded-lg border border-line bg-paper p-6 md:flex-row md:p-10"
            >
              <img
                src={item.img}
                alt=""
                className="size-24 shrink-0 rounded-full object-cover md:size-32"
              />
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <div className="mt-2 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold" />
                  ))}
                </div>
                <p className="mt-4 text-muted">“{item.quote}”</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
