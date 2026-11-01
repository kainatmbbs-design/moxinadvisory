# Validation record

Validated in the managed cloud environment on 28 October 2026 with Node.js 24.19.0, npm 11.9.0 and Astro 5.18.2 (resolved in `package-lock.json`).

## Passed

- Frozen dependency installation: `npm ci`.
- `npm run check`: zero errors, warnings or hints.
- `npm run build`: static output, 14 HTML pages including the custom 404, plus robots and sitemap endpoints.
- `npm test`: two individual tests executed in normal Node execution. Email encoding preserves all input fields; the adapter rejects HTTP URLs, HTTP errors, invalid JSON and responses without explicit acceptance, and accepts `{ok:true}`.
- Chromium: all 13 normal pages at **375px, 768px and 1440px**, one H1 each, no horizontal overflow or uncaught page errors.
- Mobile menu opens, closes with Escape, and navigates to Services. Focus returns to the toggle after Escape.
- FAQ opens using keyboard Enter.
- Service query parameter preselects the contact service.
- Required fields use native browser validation. Email-draft action produces an honest status and preserves entered text. Direct email links use the confirmed Yahoo address.
- All local links and fragment destinations resolve.
- Mocked form-service rejection and ambiguous responses preserve the enquiry and show an error; explicit acceptance shows success. This validates the adapter UI, not actual delivery.
- axe-core WCAG A/AA checks passed on six representative page types after correcting a low-contrast paragraph on the navy home section. This is not a full accessibility audit.
- With JavaScript disabled, mobile navigation stays visible and the form explains the direct-email alternative.
- Screenshots captured in `docs/screenshots/`: home at all three widths and contact at desktop width. Mobile and desktop screenshots were visually reviewed.

The first headless email-draft check exposed a navigation issue: assigning `window.location` could replace the page in a browser without a mail handler. The action now opens the draft through a separate browsing context and preserves the form page. The browser check then passed.

## Limits and launch requirements

- No production deployment, DNS changes, HTTPS provisioning or live domain verification performed.
- No real email delivery service is configured. Opening a draft does not send email. An actual mail-client handoff must still be checked on the owner's computer and phone.
- My Money policy fetch denied by network policy (HTTP 403 at CONNECT). The existing policy is linked, not rewritten. Its disclosures remain unverified until the owner supplies the policy or access is enabled.
- Website privacy needs confirmed legal/controller, hosting, retention and lawful-basis details before launch.
- Browser checks are not a WCAG certification. Screen-reader and wider device testing remain recommended. No Lighthouse score is claimed.
- Official Astro and GitHub Pages instructions were read from their official GitHub source repositories. Documentation website access was blocked.
- GitHub Git access works. GitHub API access is blocked in this environment; draft PR creation depends on enabling it. See the final handover for the actual push/PR result.

## Reproduce

```text
npm ci
npm run check
npm test
npm run build
npm run preview
```

In this managed environment, set `ASTRO_TELEMETRY_DISABLED=1` for Astro commands because the default home configuration directory is not writable. Normal Windows installations do not require that setting. The managed sandbox also requires approved execution for network installation, browser launch and binding the preview port.

Optional browser regression checks are saved in `scripts/browser-check.py`. With Python and Playwright installed, run `python -m pip install playwright`, `python -m playwright install chromium`, start `npm run preview`, then run `python scripts/browser-check.py` in a second terminal. `SITE_TEST_URL` overrides the default local origin and `CHROMIUM_PATH` can select a system Chromium executable. These are developer tools, not production dependencies.
