import { createFileRoute } from "@tanstack/react-router";
import { AppointmentBanner } from "@/components/appointment-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCards } from "@/components/service-cards";
import { checkSteps, hearingSigns } from "@/lib/site";

export const Route = createFileRoute("/hearing-loss")({
  component: HearingLossPage,
  head: () => ({
    meta: [
      { title: "Hearing Loss | Corti Hearing Clinic" },
      {
        name: "description",
        content:
          "Signs of hearing loss, how to check for it, and how Corti Hearing Clinic can help across Bengaluru and Tumkur.",
      },
    ],
  }),
});

function HearingLossPage() {
  return (
    <main id="main">
      <PageHero fade="Hearing" accent="Hearing" title="loss" />

      <section className="py-16 md:py-24">
        <div className="site-grid">
          <p className="mx-auto max-w-3xl text-center text-muted">
            Hearing loss is one of the most common disabilities in the present
            world. Hearing ability empowers us to lead our daily activities
            without limitations, and to socialise in both professional and
            personal life. It has been observed that 1 in every 4 children in
            India suffers from induced hearing loss, and 2 in every 4 people
            aged 65 to 70. This rises to 1 in 2 people over 75.
          </p>

          <div className="mt-16 grid items-start gap-10 md:grid-cols-2">
            <SectionHeading
              fade="Hearing loss"
              title={
                <>
                  Signs of
                  <br />
                  hearing loss
                </>
              }
              align="left"
            />
            <ul className="space-y-4">
              {hearingSigns.map((sign) => (
                <li
                  key={sign.text}
                  className="border-l-4 border-gold bg-cream py-4 pl-5 text-sm md:text-base"
                >
                  {sign.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="site-grid grid items-center gap-10 md:grid-cols-2">
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
          </div>
          <img
            src="/images/hearloss-sideimage.png"
            alt="Hearing evaluation"
            className="w-full"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="site-grid">
          <SectionHeading fade="Services" title="Services we provide" />
          <div className="mt-12">
            <ServiceCards />
          </div>
        </div>
      </section>

      <AppointmentBanner dark />
    </main>
  );
}
