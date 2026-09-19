import { SectionHeading } from "@/components/section-heading";

export function PageHero({
  fade,
  accent,
  title,
}: {
  fade: string;
  accent: string;
  title: string;
}) {
  return (
    <section className="border-b border-line bg-cream py-16 md:py-24">
      <div className="site-grid">
        <SectionHeading fade={fade} accent={accent} title={title} />
      </div>
    </section>
  );
}
