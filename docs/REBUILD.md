# Moxin Sterling Advisory rebuild

The new navy, white and gold design includes a new homepage, service cards, business audience sections, founder introduction, FAQs and contact invitation. Existing service and information routes are retained and restyled. Confirmed contact details:

- contact@moxinadvisory.com
- 07343 043092; international tel link +447343043092
- 15 Pen Castell, Bangor, LL57 1NX

The public display name is Moxin Sterling Advisory. No unconfirmed Limited company designation, qualifications, testimonials or pricing have been added.

## Logo asset

The owner uploaded the original 1254 × 1254 PNG to GitHub. It is stored unchanged at `public/moxin-logo.png` and displayed by `BrandImage.astro` in the header and homepage. The temporary typographic mark has been removed.

## Validation

Run `ASTRO_TELEMETRY_DISABLED=1 npm run check`, `npm test`, and `ASTRO_TELEMETRY_DISABLED=1 npm run build`. Start preview on port 4321, then run `python3 scripts/browser-check.py` with Python Playwright and Chromium installed. Browser checks cover 13 normal pages at 375, 768 and 1440 pixels, menu behaviour, FAQ keyboard control, enquiry draft and adapter, local links, JavaScript errors and no-JavaScript fallback. Generated output also includes the 404 page.

## Contact behaviour

The enquiry form opens an email draft addressed to contact@moxinadvisory.com. Visitors must send it in their email app. No server-side submission provider is configured; no claim of email delivery has been made. The owner must ensure the mailbox exists and can receive messages.

## Publication

This rebuild is prepared separately from the published gh-pages version. The original logo is integrated. Review before replacing production. The existing custom domain is moxinadvisory.com. Keep the CNAME and .nojekyll when deploying static output. Search indexing remains in its existing disabled setting. The website privacy page still identifies legal and retention details needing confirmation.

## Colourful design refresh

A subsequent refresh introduces deep plum, lilac, lime and coral, bold homepage headings, rounded service/audience cards and a practical perspective section linking to existing service information. The original MSA logo and confirmed contact details are retained. JW Hinks was supplied as visual direction, but direct access to that site was denied by the environment's network policy; this design does not claim to reproduce its layout or content.

## Screenshot-led blue and teal refinement

Updated the design using the owner's JW Hinks screenshots as visual direction: blue/teal/white palette, restrained line icons, simple sections and a direct contact/location block using the confirmed Bangor address. No reference-site testimonials, memberships or accreditations are copied.

Decorative numbering is removed from the homepage services, principles, business audience and process, and from the service listing page. The stylesheet is consolidated into one maintained design rather than accumulating theme overrides.

Mobile removes the oversized hero logo panel (the original logo stays in the header), uses compact service icons and suppresses decorative lower-page graphics. WhatsApp becomes an accessible icon button on phones to reduce content overlap; the contact-page text link is retained.

Checks: Astro check and 14-page build passed; existing browser suite passed on all 13 normal pages at 375, 768 and 1440 pixels. Additional checks on home, services, about and contact passed at 320, 375, 390, 430, 768 and 1440 pixels: no horizontal overflow, no standalone decorative numbering, original header logo loaded and WhatsApp visible. Updated desktop and mobile preview images are in docs/screenshots. Publication remains separate from this source update.
