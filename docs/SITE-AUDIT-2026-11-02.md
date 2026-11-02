# Website audit — 2 November 2026

## Verified

- Astro code check: 27 files, no errors/warnings/hints.
- Existing enquiry suite: 2 tests passed.
- Static production build: 14 HTML pages plus robots and sitemap.
- Existing Chromium suite: 13 normal pages at 375, 768 and 1440px; no horizontal overflow or page errors. Menu, keyboard FAQ, enquiry email draft, mocked submission adapter, local links and no-JavaScript fallback passed.
- axe-core 4.10.3: no WCAG 2 A/AA or 2.1 AA violations detected across six representative page types at mobile and desktop widths. This is automated checking, not a certification.
- npm audit: zero reported vulnerabilities after updating Astro to 7.4.4, Sharp to 0.35.5 and the checker to 0.9.12. The Node runtime requirement is now >=22.23.4; Node 24 in this workspace is compatible.

## Improvements made

- Production pages were still noindex with robots blocking crawling. Indexing now defaults on; robots permits crawling and advertises the sitemap. Explicit PUBLIC_INDEXING=false still disables it for staging. The deployment workflow fallback and .env.example now agree. The 404 page remains noindex.
- Added AccountingService structured data with confirmed business identity, address, telephone, logo and service area. No unverified rating metadata is included.
- Kept the original 1,539,861-byte logo unchanged and added generated WebP variants: 7,790 bytes at 160px and 41,668 bytes at 640px. Responsive image markup selects a suitable file. Browsers may reuse a larger cached variant, so these are file sizes rather than a guaranteed network saving per session. Logo preparation runs before development/build with a direct pinned Sharp dependency.
- Prepared ClientReviews.astro and src/data/client-reviews.ts for owner-supplied genuine testimonials and a verified Google Business Profile. With no verified data supplied, the section is hidden; no ratings, review counts, names or quotes have been invented. Google rating display requires a source profile, rating, review count and checked date. No promise is made that Google will show review stars in search results.

## Remaining information and limits

- Owner must provide the Google Business Profile/Maps link and genuine client quotes/attribution with permission to publish. Existing records contain none.
- Contact form opens an email draft; it does not send email from the website. WhatsApp and tel/mailto links are verified as links, not proof of message delivery or mailbox ownership.
- Privacy/controller, retention and engagement disclosures still need the owner's confirmation as described on the existing privacy page.
- Evidence is from the local production build. Public-domain access and Google search indexing outcomes have not been independently verified. No Lighthouse score or ranking guarantee is claimed.
- Source changes are saved separately from the current gh-pages deployment; publication is a separate action.

Machine-readable accessibility and SEO evidence is in SITE-AUDIT-2026-11-02.json.
