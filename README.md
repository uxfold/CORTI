# Corti Hearing Clinic

Official website for **Corti Hearing Clinic** — hearing tests, hearing aids, and therapy in Bengaluru (Frazer Town, Vijayanagar) and Tumkur.

- GitHub: [github.com/uxfold/CORTI](https://github.com/uxfold/CORTI)
- Current live site: [corti.in](https://corti.in)

This is a modern recreation of the original clinic website: same copy, photography, logo, and gold-and-black identity, with clearer type, a working WhatsApp contact form, maps, SEO, and a mobile-first layout.

## Pages

- Home
- About us
- Hearing loss
- Hearing aids
- Hearing test
- Testimonials
- Contact

## Clinics

| Centre | Address | Phone |
| --- | --- | --- |
| Frazer Town (HQ) | No 114, Tawakkal Chambers, MM Road, Pulikeshi Nagar, Bengaluru 560005 | +91 98440 91018 |
| Vijayanagar | CHBS Layout, Stage 2, Vijayanagar, Bengaluru 560040 | +91 98440 91018 |
| Tumkur | 1st Cross, M.G. Road, Tumkur 572101 | +91 98864 83257 |

Hours: Monday–Saturday, 10:00 AM – 6:30 PM

## Deploy (new hosting)

Easiest path is **Vercel**: import the `uxfold/CORTI` GitHub repo, leave the build command as `npm run build`, and publish.

Any other Node host that can run a Vite / TanStack Start app will also work.

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

All clinic photos and the logo live in `public/images/`.

## Contact form

Enquiries open WhatsApp to `+91 98440 91018` with the visitor’s name, number, and message pre-filled — the same number the clinic already uses.
