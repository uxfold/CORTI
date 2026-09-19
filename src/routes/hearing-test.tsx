import { createFileRoute } from "@tanstack/react-router";
import { AppointmentBanner } from "@/components/appointment-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { hearingTests, therapies } from "@/lib/site";

export const Route = createFileRoute("/hearing-test")({
  component: HearingTestPage,
  head: () => ({
    meta: [
      { title: "Hearing Tests | Corti Hearing Clinic" },
      {
        name: "description",
        content:
          "PTA, OAE, BERA, VEMP, ECochG, and impedance audiometry, plus speech therapy and tinnitus assessment at Corti Hearing Clinic.",
      },
    ],
  }),
});

function HearingTestPage() {
  return (
    <main id="main">
      <PageHero fade="Hearing" accent="Hearing" title="test" />

      <section className="py-16 md:py-24">
        <div className="site-grid grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeading
              fade="Hearing test"
              title="Hearing tests done at Corti"
              align="left"
            />
            <p className="mt-8 text-muted">
              All three centres are equipped with international-standard
              diagnostic equipment and NOAH Link technology. Tests are quick,
              painless, and interpreted by experienced audiologists.
            </p>
          </div>
          <img
            src="/images/hearingtest/side_img.png"
            alt="Hearing test in clinic"
            className="w-full"
          />
        </div>

        <div className="site-grid mt-16 grid gap-6 md:grid-cols-2">
          {hearingTests.map((test) => (
            <article
              key={test.code}
              className="flex gap-5 rounded-lg border border-line bg-paper p-6"
            >
              <img
                src={test.img}
                alt=""
                className="size-16 shrink-0 object-contain"
              />
              <div>
                <p className="text-xs font-semibold tracking-widest text-gold uppercase">
                  {test.code}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{test.title}</h3>
                <p className="mt-2 text-sm text-muted">{test.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="site-grid">
          <SectionHeading fade="Therapy" title="Therapy and assessment" />
          <ul className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            {therapies.map((item) => (
              <li
                key={item}
                className="rounded-lg bg-paper px-6 py-5 text-center text-lg font-semibold"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AppointmentBanner />
    </main>
  );
}
