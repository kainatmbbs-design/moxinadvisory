# Desktop hero office illustration

The homepage's large logo graphic was replaced with an AI-generated illustrative accounting workspace. It is not represented as a photograph of the firm's actual office, staff or clients. The MSA logo remains in the header. The original generated image is retained as public/accounting-office.png and in /workspace/generated_images/exec-ba612524-1d79-40db-bea2-43df364b1a4b.png.

Prebuild generates responsive WebP assets using Sharp. The 800px variant is 81,836 bytes; the larger variant is 122,866 bytes. The source is 1122px wide, so the requested 1400px conversion is capped at the original width and declared as 1122w in srcset. CSS controls the desktop crop without altering the original image.

A desktop-only picture source supplies the office image; the mobile fallback is an inline SVG and the panel stays hidden on phones. Browser checks with fresh contexts confirmed no photo download at 375px, successful photo loading at 768/1024/1440px, no horizontal overflow, retained header logo and six client reviews. Astro check and the 15-page build passed. Updated desktop and mobile previews are in docs/screenshots.

This change is saved on the source branch and has not been published to gh-pages.
