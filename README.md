# Koaz Counselling — static site

A static HTML/CSS/JS rebuild of koazcounselling.co.uk, ready to deploy on Cloudflare Pages.

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub/GitLab repo (or use direct upload).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git** (or **Upload assets** for a quick drag-and-drop deploy).
3. Build settings: none needed — this is plain HTML/CSS/JS.
   - Build command: *(leave empty)*
   - Build output directory: `/`
4. Deploy. Cloudflare gives you a `*.pages.dev` URL immediately.
5. Add your custom domain (`koazcounselling.co.uk`) under **Custom domains** once you're ready to go live, and update DNS to point at Cloudflare.

## Before going live — replace these placeholders

- **Photos**: the original site's photography isn't included (can't be copied over). Add real photos to `/assets/` (e.g. `/assets/team/krystle.jpg`, an office/interior shot) and swap them into `index.html` where the CSS circles/leaf placeholders are.
- **`assets/og-image.jpg`**: a 1200×630 image used when the site is shared on social media — currently referenced but not created.
- **`terms.html`** and **`privacy.html`**: filled with placeholder text — replace with your real policies.
- **Canonical domain**: all SEO tags assume `https://www.koazcounselling.co.uk/`. If you deploy to a different domain, update the `<link rel="canonical">`, Open Graph `og:url`, and `sitemap.xml`.

## SEO already built in

- Unique `<title>` and meta description per page
- Open Graph + Twitter card tags
- `schema.org` JSON-LD structured data (MedicalBusiness / counselling practice)
- Semantic headings (`h1` → `h2` → `h3`), `<nav>`, `<main>`, `<footer>`
- `robots.txt` + `sitemap.xml`
- Fast static load (no framework, no render-blocking JS)
- Mobile-responsive layout

## Structure

```
index.html      Home page (all sections)
terms.html      Placeholder terms & support page
privacy.html    Placeholder privacy policy page
styles.css      All styling (single stylesheet)
script.js       Footer year + voice-strip highlight cycling
robots.txt
sitemap.xml
_headers        Cloudflare Pages caching/security headers
assets/         Icons and images
```
