import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { Faq } from "@/components/faq";
import { LocationCard } from "@/components/location-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { locations, site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | Corti Hearing Clinic" },
      {
        name: "description",
        content:
          "Book a hearing test at Corti Hearing Clinic — Frazer Town, Vijayanagar, or Tumkur. Call or WhatsApp +91 98440 91018.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <main id="main">
      <PageHero fade="Know more" accent="Contact" title="us" />

      <section className="py-16 md:py-24">
        <div className="site-grid grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading fade="Contact" title="Get in touch" align="left" />
            <p className="mt-8 mb-8 text-sm text-muted">
              Send us a message on WhatsApp and an audiologist will get back to
              you. Or call {site.phones.primary.display}.
            </p>
            <ContactForm />
          </div>
          <LocationCard location={locations[0]} />
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="site-grid">
          <SectionHeading fade="Branches" title="Our branches" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <LocationCard location={locations[1]} />
            <LocationCard location={locations[2]} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="site-grid">
          <SectionHeading fade="Questions" title="Frequently asked" />
          <div className="mt-12">
            <Faq />
          </div>
        </div>
      </section>
    </main>
  );
}
