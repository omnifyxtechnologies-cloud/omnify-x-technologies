# Omnify X Technologies — Corporate Website

Official website of **Omnify X Technologies**: e-commerce services, business consultancy and upcoming ventures.

**Stack:** Next.js (App Router, static export) · React · TypeScript · Tailwind CSS v4 · Lucide Icons · Framer Motion · self-hosted Montserrat font

## Pages
Home · About · E-commerce · Consultancy · Ventures · Contact · Privacy Policy · Terms & Conditions · custom 404

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build
```bash
npm run build      # outputs a fully static site to ./out
npm run preview    # serve ./out locally
```

## Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/omnify-x-technologies.git
git push -u origin main
```

## Deploy on Cloudflare Pages (free)
1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select the `omnify-x-technologies` repository.
3. Build settings:
   - Framework preset: **Next.js (Static HTML Export)** (or None)
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variable: `NODE_VERSION` = `22`
4. Save and Deploy. Every push to `main` redeploys automatically.
5. **Custom domain:** project → *Custom domains* → add `omnifyxtechnologies.online` (and `www`).

Also works on Vercel, Netlify and GitHub Pages (static export).

## Contact form
Static hosting has no server, so the form works in one of two honest modes:
- **No endpoint set (default):** validates, then opens the visitor's email app with the message pre-filled, and tells them it has *not* been sent until they press Send.
- **With an endpoint:** create a free form at [Formspree](https://formspree.io) (or similar), then set
  `NEXT_PUBLIC_FORM_ENDPOINT` in Cloudflare (*Settings → Environment variables*) and redeploy. The form then POSTs JSON and only shows "Message sent" on a successful response.

See `.env.example`.

## Project structure
```
src/
  app/            routes (page.tsx per page), layout, sitemap, robots, 404
  components/     Header, Footer, Hero & other sections, ContactForm, ui/ primitives
  lib/            site.ts (contact details, nav) · services.ts (all service content)
public/brand/     logo-full.png, logo-mark.png (cropped from the original logo, unmodified artwork)
```
Edit contact details in `src/lib/site.ts` and service copy in `src/lib/services.ts`.

## Replacing visuals with photos
The venture cards use vector visuals. To use photography instead, drop images into `public/images/` and swap the visual component in `src/components/VentureCards.tsx`.

## Notes
- Privacy Policy and Terms are sensible starting drafts; have them reviewed for your business before relying on them.
- Update the canonical domain via `NEXT_PUBLIC_SITE_URL`.
