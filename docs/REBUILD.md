# Moxin Sterling Advisory rebuild

The new navy, white and gold design includes a new homepage, service cards, business audience sections, founder introduction, FAQs and contact invitation. Existing service and information routes are retained and restyled. Confirmed contact details:

- contact@moxinadvisory.com
- 07343 043092; international tel link +447343043092
- 15 Pen Castell, Bangor, LL57 1NX

The public display name is Moxin Sterling Advisory. No unconfirmed Limited company designation, qualifications, testimonials or pricing have been added.

## Logo asset

The image shown in chat was visible but its original file was not exposed to the execution workspace. A temporary typographic MSA mark is used. Save the original logo as `public/moxin-logo.png` and rebuild: `BrandImage.astro` automatically uses it in the header and homepage. Do not represent the temporary mark as the supplied original logo.

## Validation

Run `ASTRO_TELEMETRY_DISABLED=1 npm run check`, `npm test`, and `ASTRO_TELEMETRY_DISABLED=1 npm run build`. Start preview on port 4321, then run `python3 scripts/browser-check.py` with Python Playwright and Chromium installed. Browser checks cover 13 normal pages at 375, 768 and 1440 pixels, menu behaviour, FAQ keyboard control, enquiry draft and adapter, local links, JavaScript errors and no-JavaScript fallback. Generated output also includes the 404 page.

## Contact behaviour

The enquiry form opens an email draft addressed to contact@moxinadvisory.com. Visitors must send it in their email app. No server-side submission provider is configured; no claim of email delivery has been made. The owner must ensure the mailbox exists and can receive messages.

## Publication

This rebuild is prepared separately from the published gh-pages version. Add the original logo and review before replacing production. The existing custom domain is moxinadvisory.com. Keep the CNAME and .nojekyll when deploying static output. Search indexing remains in its existing disabled setting. The website privacy page still identifies legal and retention details needing confirmation.
