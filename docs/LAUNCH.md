# Launch checklist

This branch is a reviewable website implementation. Do not enable production indexing or publish it until the relevant items below are resolved.

## Confirmed by the brief

- Requested company name: **Moxin Sterling Advisory Ltd**.
- Founder: **Mohsin Khan**.
- Contact email: **mohsikhan@yahoo.com**.
- Intended domain: **moxinadvisory.com**, registered with Hostinger; no hosting was supplied.
- Services and audiences are based on the brief. No audit, investment or insurance advice is advertised.

## Company and service review

- [ ] Confirm incorporation status, exact legal name, company number, registered office and jurisdiction. Fields are currently `null` or unverified in `src/config.ts`. Add verified company disclosures to the footer/privacy page as appropriate. Populating config alone does not render them automatically.
- [ ] Confirm which services the firm can provide and any applicable professional, registration, licensing, anti-money-laundering supervision or business disclosure requirements. No authorisation is asserted by this site.
- [ ] Review the founder introduction and all copy. No qualifications, employment achievements, years of experience, client numbers, testimonials or awards were added.
- [ ] Agree the quote and engagement process. No fixed fees, booking link, old telephone/WhatsApp number, postal address or unconfirmed domain email are published.

## Privacy and enquiries

- [ ] Retrieve and read the existing My Money policy at https://my-money-privacy.boldmole16.chatgpt.site. The environment returned an explicit network-policy denial. Paste the policy into this task or allow the saved domain in environment settings, then publish the environment configuration to permit a retry. The local page currently links to the original and does not substitute a new policy.
- [ ] Replace the local app privacy bridge only after preserving the original disclosures about local financial records, exports, Android backups, support email and deletion. Do not infer wording from this checklist. No app-store availability is claimed.
- [ ] Confirm the website data controller and contact details, lawful basis, retention period, hosting provider and any relevant international data transfers. Update website privacy before launch. App privacy remains separate.
- [ ] Test the default email-draft flow on a Windows computer and a phone with an email app. The visitor must send the message; there is no website delivery service in the default mode.
- [ ] If choosing a managed submission provider, approve it separately, implement its real contract, add server validation/rate limiting/spam protection, update privacy and test actual delivery. Do not enable the endpoint solely by filling in a URL.

## Hosting, accessibility and indexing

- [ ] Confirm GitHub Pages is available for the repository/account. No paid plan or account was created.
- [ ] Follow DEPLOYMENT.md. Preserve email DNS records. Verify domain ownership, root/www redirects and HTTPS.
- [ ] Review mobile, keyboard and screen-reader behaviour with real content. Automated checks are useful but do not certify WCAG conformance.
- [ ] Keep `PUBLIC_INDEXING=false` on previews. Enable it only after the launch review, and rebuild. Check robots, sitemap, canonical tags and social preview.
- [ ] Check production navigation, custom 404, enquiry behaviour and privacy pages after deployment. No live deployment was made in this task.

No analytics or tracking integrations are included. If adding them later, assess consent requirements before loading them.
