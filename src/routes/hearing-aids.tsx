import { createFileRoute } from "@tanstack/react-router";
import { AppointmentBanner } from "@/components/appointment-banner";
import { BrandRow } from "@/components/brand-row";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { hearingAidTypes } from "@/lib/site";

export const Route = createFileRoute("/hearing-aids")({
  component: HearingAidsPage,
  head: () => ({
    meta: [
      { title: "Hearing Aids | Corti Hearing Clinic" },
      {
        name: "description",
        content:
          "Digital hearing aids in BTE, RIC, ITE, and ITC styles from Widex, Signia, Phonak, Starkey, and Oticon. Fitted at Corti Hearing Clinic.",
      },
    ],
  }),
});

function HearingAidsPage() {
  return (
    <main id="main">
      <PageHero fade="Hearing" accent="Hearing" title="aids" />

      <section className="py-16 md:py-24">
        <div className="site-grid grid items-center gap-10 md:grid-cols-2">
          <img
            src="/images/hearingaid/hearing-aid.png"
            alt="In-the-ear hearing aid"
            className="w-full"
          />
          <div>
            <SectionHeading
              fade="Hearing aid"
              title="What is a hearing aid?"
              align="left"
            />
            <p className="mt-8 text-muted">
              A hearing aid is an electronic device built to improve hearing
              by making sound audible to persons with hearing loss. Three
              essential components of a hearing aid are the microphone,
              amplifier, and speaker.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="site-grid grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeading
              fade="Hearing aids"
              title="Digital hearing aid"
              align="left"
            />
            <p className="mt-8 text-muted">
              Digital hearing aids are more common. They have all the features
              of analog programmable aids, but they convert sound waves into
              digital signals and produce an exact duplication of sound.
              Microchips in digital hearing aids analyse speech and other
              environmental sounds and store multiple program settings.
            </p>
          </div>
          <figure className="text-center">
            <img
              src="/images/hearingaid/digital-hearing-aid.png"
              alt="Digital hearing aid"
              className="mx-auto w-full max-w-md"
            />
            <figcaption className="mt-4 text-sm font-semibold tracking-wide uppercase">
              Digital hearing aid
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="site-grid">
          <SectionHeading fade="Hearing aids" title="Types of hearing aids" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hearingAidTypes.map((type) => (
              <article
                key={type.title}
                className="overflow-hidden rounded-lg border border-line bg-paper text-center"
              >
                <img
                  src={type.img}
                  alt={type.title}
                  className="aspect-square w-full object-contain p-6"
                />
                <h3 className="bg-gold px-4 py-3 text-sm font-semibold">
                  {type.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="site-grid">
          <SectionHeading fade="Brands" title="Fitted with leading brands" />
          <p className="mx-auto mt-8 max-w-2xl text-center text-muted">
            We dispense and service Widex, Signia, Phonak, Starkey, and
            Oticon. Your audiologist will match a device to your loss,
            lifestyle, and budget — with a genuine warranty and after-sales
            care.
          </p>
          <div className="mt-12">
            <BrandRow />
          </div>
        </div>
      </section>

      <AppointmentBanner />
    </main>
  );
}
