import { createFileRoute } from "@tanstack/react-router";
import { AppointmentBanner } from "@/components/appointment-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { aboutHighlights, values } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | Corti Hearing Clinic" },
      {
        name: "description",
        content:
          "Corti Hearing Clinic has provided world-class hearing care in Bengaluru and Tumkur since 2006. Our vision, mission, and values.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <main id="main">
      <PageHero fade="Know more" accent="About" title="us" />

      <section className="py-16 md:py-24">
        <div className="site-grid grid items-center gap-10 md:grid-cols-2">
          <img
            src="/images/about/sideimage-1.png"
            alt="Audiologist with a patient"
            className="w-full rounded-lg"
          />
          <div>
            <SectionHeading fade="Corti" title="Why us?" align="left" />
            <p className="mt-8 text-muted">
              The philosophy behind Corti is to develop a world-class
              integrated hearing-care delivery system and improve the standard
              of dispensing and service for the hearing impaired. With a
              presence in Bangalore, Corti has centres in Frazer Town,
              Vijayanagar, and Tumkur. All these centres are equipped with the
              world’s best diagnostic equipment and NOAH Link technology, as
              per international standards.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="site-grid grid gap-8 md:grid-cols-2">
          <article className="rounded-xl bg-paper p-8 text-center md:p-12">
            <img
              src="/images/about/vision.png"
              alt=""
              className="mx-auto h-16 object-contain"
            />
            <SectionHeading fade="Vision" title="Our vision" className="mt-4" />
            <p className="mt-6 text-muted">
              Each person we serve will engage fully in life and achieve their
              maximum potential.
            </p>
          </article>
          <article className="rounded-xl bg-paper p-8 text-center md:p-12">
            <img
              src="/images/about/mission.png"
              alt=""
              className="mx-auto h-16 object-contain"
            />
            <SectionHeading fade="Mission" title="Our mission" className="mt-4" />
            <p className="mt-6 text-muted">
              To have the most satisfied customers in hearing care. To delight
              and serve.
            </p>
          </article>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="site-grid grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeading fade="Values" title="Our values" align="left" />
            <ul className="mt-8 space-y-5">
              {values.map((value) => (
                <li key={value.title}>
                  <p className="font-semibold text-gold">— {value.title}</p>
                  <p className="mt-1 text-sm text-muted">{value.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/images/about/sideimage-2.png"
            alt="Hearing care consultation"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="site-grid">
          <SectionHeading fade="The best" title="We are the best" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {aboutHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-lg bg-paper p-8 text-center"
              >
                <img
                  src={item.img}
                  alt=""
                  className="mx-auto h-16 object-contain"
                />
                <h3 className="mt-5 text-lg font-semibold uppercase">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AppointmentBanner dark />
    </main>
  );
}
