# Pricing and spacing update

Owner requested starting prices, simple Self Assessment at £100–£250/return, lower bookkeeping fees, annual accounts and Corporation Tax at £550–£1,300/year, with the remaining suggested ranges unchanged. Implemented bookkeeping at £20–£35/hour and led with lower starting fees (£30/month sole trader, £90/month limited company). All seven service ranges are in src/data/pricing.ts; the pricing page, homepage preview, services link, header/footer navigation and sitemap use the new pricing route.

The pricing page describes guide fees, case-by-case package scope, no automatic double charging, and total payable confirmed in the quote including applicable VAT/software. VAT registration and whether the business intends these figures to include VAT/software have not been confirmed; no tax status has been invented.

Reduced general section spacing and hero padding. Updated founder introduction on About, leaving the previously removed homepage founder section absent. The owner subsequently uploaded the original photograph. Identical duplicate uploads were consolidated into public/founder.png; the original is preserved unchanged. A lightweight public/founder-860.webp is generated before builds and used on the About page.

Validation: Astro check passed with no errors/warnings/hints; 15-page build passed; existing browser suite passed on 14 normal pages at 375, 768 and 1440 pixels. Pricing assertions verified 3 package cards and all 7 fees at six widths (320, 375, 430, 768, 1024 and 1440). Pricing-page automated WCAG A/AA checks passed on phone and desktop. Source is saved separately from production; no publication claimed.
