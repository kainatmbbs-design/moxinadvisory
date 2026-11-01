# Professional accountancy design update

The existing Astro website now uses forest green, warm ivory and muted gold, updated homepage headings, framed service cards and a more prominent contact invitation. Shared colours apply across existing pages; existing contact details, enquiry behaviour and routes are preserved.

Validated on 1 November 2026:

- `ASTRO_TELEMETRY_DISABLED=1 npm run check`: no errors, warnings or hints.
- `npm test`: existing enquiry test passed.
- `ASTRO_TELEMETRY_DISABLED=1 npm run build`: all 14 pages built.
- `python3 scripts/browser-check.py`: 13 normal pages at 375, 768 and 1440 pixels, no overflow or page errors; navigation, keyboard FAQ, email draft, mocked contact adapter, internal links and no-JavaScript fallback passed.
- Refreshed screenshots in `docs/screenshots/`; mobile homepage visually inspected.

This records local validation, not a production deployment. The `gh-pages` branch contains published output with a CNAME for moxinadvisory.com. The source repository's deploy workflow is manual and requires the source on main. Review the existing deployment settings before publishing. Direct domain verification and GitHub API requests are currently blocked by the environment network policy.
