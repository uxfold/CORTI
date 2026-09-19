import { locations, site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.name,
    url: "https://corti.in",
    telephone: site.phones.primary.display,
    image: "/images/logo.png",
    foundingDate: String(site.since),
    medicalSpecialty: "Audiology",
    openingHours: "Mo-Sa 10:00-18:30",
    sameAs: [site.social.instagram, site.social.facebook],
    address: {
      "@type": "PostalAddress",
      streetAddress: "No 114, Tawakkal Chambers, MM Road, Frazer Town",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560005",
      addressCountry: "IN",
    },
    department: locations.map((loc) => ({
      "@type": "MedicalClinic",
      name: `${site.name} — ${loc.name}`,
      telephone: loc.phones[0].display,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address,
        addressCountry: "IN",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
