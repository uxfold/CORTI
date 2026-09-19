import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AppointmentBanner } from "@/components/appointment-banner";
import { BrandRow } from "@/components/brand-row";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { LocationCard } from "@/components/location-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCards } from "@/components/service-cards";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { Button } from "@/components/ui/button";
import {
  checkSteps,
  hearingSigns,
  locations,
  promises,
  site,
  stats,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Corti Hearing Clinic | Effortless Hearing Starts Here" },
      {
        name: "description",
        content: site.description,
      },
    ],
  }),
});

function Home() {
  return (
    <main id="main">
      <JsonLd />
      <section className="overflow-hidden bg-paper">
        <div className="site-grid grid items-center gap-8 py-10 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Effortless Hearing
              <br />
              Starts Here
            </h1>
            <p className="mt-5 max-w-md text-muted">
              With the perfect combination of state-of-the-art technology and
              the best pre- and post-sales service. You leave your hearing
              worries with us.
            </p>
            <Button className="mt-8" size="lg" variant="outline" asChild>
              <Link to="/contact">
                Contact now
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div>
            <img
              src="/images/banner_image.png"
              alt="A smiling woman wearing a hearing aid"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="site-grid">
          <SectionHeading
            fade="Pioneers"
            title={
              <>
                Why <span className="text-gold">CORTI</span> Hearing Clinic?
              </>
            }
          />
          <p className="mx-auto mt-8 max-w-2xl text-center text-muted">
            Corti Hearing Clinic provides professional advice and high-quality
            solutions for people who may be experiencing a hearing-related
            issue. We have something to fit every lifestyle and budget.
          </p>
          <p className="mt-6 text-center text-xl font-semibold md:text-2xl">
            <span className="text-gold">Pioneers since</span> {site.since}
          </p>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-paper px-4 py-8 text-center"
              >
                <p className="text-2xl font-bold text-ink md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid items-end gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold">Signs of hearing loss</h3>
              <Button className="mt-6 hidden md:inline-flex" variant="outline" asChild>
                <Link to="/contact">
                  Contact now
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            {hearingSigns.map((sign) => (
              <figure key={sign.text} className="text-center">
                <img
                  src={sign.img}
                  alt=""
                  className="mx-auto w-full max-w-xs"
                />
                <figcaption className="mt-3 text-sm">{sign.text}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 md:hidden">
            <Button variant="outline" asChild>
              <Link to="/contact">
                Contact now
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="site-grid grid items-center gap-10 md:grid-cols-2">
          <img
            src="/images/hearloss_sec_img.png"
            alt="Audiologist fitting a hearing aid"
            className="w-full"
          />
          <div>
            <SectionHeading
              fade="Hearing loss"
              title={
                <>
                  How to check for
                  <br />
                  hearing loss?
                </>
              }
              align="left"
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {checkSteps.map((step) => (
                <div key={step.text} className="flex items-start gap-3">
                  <img src={step.icon} alt="" className="size-14 object-contain" />
                  <p className="pt-2 text-sm font-medium">{step.text}</p>
                </div>
              ))}
            </div>
            <Button className="mt-8" variant="outline" asChild>
              <Link to="/hearing-loss">
                Read more
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <AppointmentBanner />

      <section className="py-16 md:py-24">
        <div className="site-grid">
          <SectionHeading fade="Services" title="Services we provide" />
          <div className="mt-12">
            <ServiceCards />
          </div>

          <div className="mt-16 rounded-xl bg-cream p-8 md:p-12">
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <h3 className="text-3xl font-bold">Our promise</h3>
                <p className="mt-4 text-sm text-muted">
                  Speak to our audiologist to see which suits you the most and
                  discuss the variety of brands we have — and which will be
                  best suited for your hearing needs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 md:col-span-8 md:grid-cols-4">
                {promises.map((item) => (
                  <div key={item.title} className="text-center">
                    <img
                      src={item.img}
                      alt=""
                      className="mx-auto h-14 object-contain"
                    />
                    <h4 className="mt-3 font-semibold">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="site-grid">
          <SectionHeading fade="Testimonials" title="Client speaks" />
          <div className="mt-12">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="site-grid">
          <SectionHeading fade="Brands" title="Our brands" />
          <div className="mt-12">
            <BrandRow />
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="site-grid space-y-12">
          <div>
            <SectionHeading fade="Headquarters" title="Our headquarters" />
            <div className="mx-auto mt-12 max-w-4xl">
              <LocationCard location={locations[0]} />
            </div>
          </div>
          <div>
            <SectionHeading fade="Branches" title="Our branches" />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <LocationCard location={locations[1]} />
              <LocationCard location={locations[2]} />
            </div>
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
