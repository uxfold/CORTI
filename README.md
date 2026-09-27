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

## Deploy (your own hosting)

The finished website — real HTML, CSS, images, and `.htaccess` — is in **[public_html/](public_html/)**.

That folder is what you upload. Do not upload `src/` or run a Node server.

1. Back up the current `public_html` on corti.in.
2. Download this repo, or just the `public_html` folder.
3. Upload **the contents** of `public_html` (so `index.html` is directly in the host’s web root, not inside another folder).
4. Open https://corti.in and click through the menu.

The contact form opens WhatsApp. No database.

To rebuild that folder from source:

```bash
npm install
npm run build:static
```

The new files are written to `.output/public`. Copy them over `public_html/` before you upload again.

## Local development

```bash
npm install
npm run dev
```

Production source build (not what you upload):

```bash
npm run build
```

All clinic photos and the logo live in `public/images/`.

## Contact form

Enquiries open WhatsApp to `+91 98440 91018` with the visitor’s name, number, and message pre-filled — the same number the clinic already uses.
