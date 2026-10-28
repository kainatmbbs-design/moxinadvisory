# Deployment and the Hostinger domain

These are instructions for a later, deliberate launch. No domain settings or live deployments were changed during implementation.

## Free static hosting

GitHub Pages is a suitable free option **if this repository is public** on GitHub Free. Private-repository Pages availability depends on the account's plan. Check Settings → Pages before proceeding; do not buy hosting automatically. Domain registration at Hostinger does not include website hosting. The domain may stay registered with Hostinger while GitHub hosts the website.

The included `.github/workflows/deploy.yml` is manual-only, restricted to `main`, and requires typing `PUBLISH`. Pushing this branch or opening a pull request does not deploy the site. The separate validation workflow only checks code.

1. Review the implementation and complete [LAUNCH.md](LAUNCH.md). Review and merge the PR yourself when ready.
2. In the repository, open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Verify domain ownership using GitHub's **Settings → Pages → Add a domain** instructions. Add only the exact verification TXT record GitHub gives you. Keep it afterwards to protect against domain takeover.
4. In the repository's Pages settings, set the **Custom domain** to `moxinadvisory.com` **before pointing DNS at GitHub**. It may show a DNS check warning until the records are configured. The GitHub Actions deployment method stores the custom domain in Pages settings; it does not require a CNAME source file.
5. Configure the DNS records below at the domain's authoritative DNS provider. If Hostinger manages its nameservers, use the domain's DNS editor in hPanel. Labels can vary by product. If another provider manages DNS, edit there instead.
6. Under **Settings → Secrets and variables → Actions → Variables**, set `SITE_ORIGIN` to `https://moxinadvisory.com`. Leave `PUBLIC_INDEXING` unset or `false` until content and privacy review are complete.
7. Go to **Actions → Publish website to GitHub Pages → Run workflow**, choose `main`, and enter `PUBLISH`. This publishes the site. Review the job output and deployment URL.
8. Once DNS and certificate issuance succeed, enable **Enforce HTTPS** under Pages. Test root and www addresses in a private browser window.
9. After the launch checklist is complete, set `PUBLIC_INDEXING` to `true` and rerun the workflow. Inspect page source for `index, follow`, check `/robots.txt`, and check `/sitemap.xml` uses your chosen canonical origin.

For a preview before DNS changes, use the local development or production preview commands. Alternatively upload `dist` to a root-domain static preview host you choose, with `PUBLIC_INDEXING=false`. Do not launch a broken GitHub project-path preview. This implementation deliberately uses domain-root links, not `/moxinadvisory/` links.

## DNS records

Export or screenshot **all existing records first**. Preserve MX records, SPF TXT records, DKIM records, DMARC records, domain verification records and mail-related hostnames. Do not change nameservers or reset the DNS zone. Changing website hosting must not remove email configuration. The confirmed Yahoo mailbox does not establish what domain email records already exist.

For the root domain, GitHub's official instructions list these four IPv4 addresses. Recheck the linked official documentation immediately before editing:

| Type  | Host/name | Value                       |
| ----- | --------- | --------------------------- |
| A     | @         | 185.199.108.153             |
| A     | @         | 185.199.109.153             |
| A     | @         | 185.199.110.153             |
| A     | @         | 185.199.111.153             |
| CNAME | www       | kainatmbbs-design.github.io |

Only replace conflicting **website** records at `@` or `www` after understanding what they serve. A CNAME value has no `https://` and no repository path. Do not create a wildcard record. If existing AAAA records point elsewhere, review them so IPv6 visitors do not reach old hosting; either use GitHub's currently documented IPv6 records or remove obsolete website-only AAAA records. Do not guess addresses.

DNS may take up to 24 hours to propagate. In Windows PowerShell, inspect:

```powershell
Resolve-DnsName moxinadvisory.com -Type A
Resolve-DnsName www.moxinadvisory.com -Type CNAME
Resolve-DnsName moxinadvisory.com -Type MX
```

Compare with the intended records and the preserved email records. Check the Pages settings DNS result. If HTTPS remains pending, read GitHub's HTTPS troubleshooting guidance and inspect conflicting records or CAA restrictions before changing anything further. Never disable certificate verification.

## Root or www as canonical

The current build uses **https://moxinadvisory.com**. With both root and www configured, GitHub Pages redirects the alternative to the custom domain selected in Pages settings. Confirm this in a browser and inspect canonical tags on several pages.

To choose www instead, set Pages' custom domain and `SITE_ORIGIN` to `https://www.moxinadvisory.com`, rebuild and deploy. Keep both DNS variants configured. Verify both redirect behaviour and HTTPS. Do not merely change the canonical tag while leaving hosting redirects inconsistent.

## Official sources

Reviewed from the official repositories on 28 October 2026 because the documentation websites were blocked by the environment's network policy:

- [Astro: deploy to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) ([official source](https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/deploy/github.mdx)).
- [GitHub: managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) ([official source](https://github.com/github/docs/blob/main/content/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site.md)).
- [GitHub: verify a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).
- [GitHub: HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).

No DNS lookup or live hosting test was used to claim the domain is connected. Those checks belong to the launch steps above.
