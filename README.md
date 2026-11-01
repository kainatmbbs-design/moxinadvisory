# Moxin Sterling Advisory website

A static Astro and TypeScript website for **Moxin Sterling Advisory Ltd**. The source repository is `kainatmbbs-design/moxinadvisory`. No production Node.js server is needed. Hosting is separate from the Hostinger domain registration.

## Preview on Windows

1. Install **Node.js 24 LTS** from https://nodejs.org/ and **Git for Windows** from https://git-scm.com/. Restart your terminal after installing.
2. Open **Command Prompt**. Choose a folder, such as Documents:

   ```bat
   cd %USERPROFILE%\Documents
   git clone https://github.com/kainatmbbs-design/moxinadvisory.git
   cd moxinadvisory
   git switch feat/moxin-sterling-website
   npm ci
   npm run dev
   ```

3. Open the local address printed by Astro in your browser. Keep the terminal open. Press **Ctrl+C** to stop.
4. If reviewing a downloaded ZIP instead, extract it first, open Command Prompt in the extracted folder and run `npm ci` followed by `npm run dev`. You do not need the Git commands.

If PowerShell blocks `npm.ps1`, use Command Prompt or type `npm.cmd` instead of `npm`. No administrator shell or execution-policy change is necessary.

## Check and build

```bat
npm run check
npm test
npm run build
npm run preview
```

`check` runs Astro/TypeScript diagnostics. `test` checks email encoding and the configurable submission adapter. `build` creates the deployable **dist** folder. `preview` serves that built folder locally. A static host receives the contents of `dist`, not the `src` folder. Do not upload `.env` or `node_modules`.

## Edit content

- `src/config.ts`: company name, confirmed email, unconfirmed legal details, navigation and service content.
- `src/pages/index.astro`: home page and general FAQs.
- `src/pages/services/[slug].astro`: shared layout for six service pages.
- `src/pages/about.astro`, `who-we-help.astro`, `contact.astro`: other public pages.
- `src/styles/global.css`: typography, colours and responsive layouts.
- `public/`: original SVG favicon and social artwork, with a PNG social preview for sharing services.
- `docs/LAUNCH.md`: confirmed details and required launch decisions.
- `docs/DEPLOYMENT.md`: hosting, Hostinger DNS, HTTPS and canonical domain instructions.
- `docs/VALIDATION.md`: actual test results and remaining limitations.

No remote fonts, photographs, analytics, cookies or third-party scripts are included. Typography uses local system Georgia and Arial/Helvetica fallbacks. The SVG identity and architectural illustration were created for this project and require no stock-photo licence.

## Configuration and indexing

Copy `.env.example` to `.env` if you need to override settings. There are no secrets to configure in the default mode. All variables affect the built output, so rebuild after changes.

| Variable               | Default                     | Purpose                                                        |
| ---------------------- | --------------------------- | -------------------------------------------------------------- |
| `SITE_ORIGIN`          | `https://moxinadvisory.com` | Canonical URLs, Open Graph URLs and sitemap origin             |
| `PUBLIC_INDEXING`      | `false`                     | `noindex, nofollow` and a disallowing robots file until launch |
| `PUBLIC_FORM_ENDPOINT` | empty                       | Optional approved submission service, disabled by default      |

The site assumes it is served at the root of a domain. Use local preview or a root-domain static preview. A GitHub project URL under `/moxinadvisory/` is **not supported** by these root-relative links. The documented Pages setup uses the custom domain before launch. No automatic deployment runs on pushes or pull requests.

Preview indexing restrictions are not password protection. Do not put confidential data in a preview. The app privacy page remains `noindex` until its original policy has been reviewed and copied accurately.

## Enquiry behaviour

The default button is **Open email draft**. It validates fields in the browser, opens a `mailto:` draft, and keeps the text on the page. The visitor must send that draft in their email app. The site does not claim to send it or confirm delivery. A direct email link works without JavaScript.

An adapter is prepared in `src/lib/enquiry.ts`. It expects an HTTPS endpoint accepting JSON and returning `{ "ok": true }` only when the enquiry has actually been accepted. A provider must be selected and approved separately. Before enabling it:

1. Implement the selected provider's actual request/response contract.
2. Require server-side validation, length limits, rate limiting and spam protection. The included honeypot is supplementary, not a complete defence.
3. Configure the provider's allowed origins. Never put private keys in browser code or `PUBLIC_` variables.
4. Update the privacy page with the provider, hosting, legal basis, retention and transfer information.
5. Test real delivery, rejection, network failure and spam handling. Browser test mocks do not establish email delivery.

See `docs/LAUNCH.md` before making this website public. Nothing in this project verifies incorporation, professional authorisation or the domain's live configuration.
