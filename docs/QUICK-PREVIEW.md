# Online preview without Codex environment publication

The generated `gh-pages` branch contains a noindex static preview at the repository subpath. No domain or main-branch change is needed.

1. Open https://github.com/kainatmbbs-design/moxinadvisory/settings/pages while signed in as the repository owner.
2. Under **Build and deployment**, choose **Deploy from a branch** as Source.
3. Choose branch **gh-pages** and folder **/(root)**, then click **Save**.
4. Wait for GitHub's Pages deployment to finish (usually a few minutes). Use the address shown by GitHub, expected to be https://kainatmbbs-design.github.io/moxinadvisory/ .

Leave Custom domain empty for this preview. Do not merge the draft PR merely to enable this. The preview is public, but its pages request no search indexing. All existing launch checklist limitations still apply.

To update the preview from the source branch:

```text
npm ci
npm run build
node scripts/prepare-pages-preview.mjs
```

Copy the contents of `dist` to the `gh-pages` publishing branch and commit/push. The publishing branch contains generated output, not application source. For the eventual custom-domain launch, follow DEPLOYMENT.md and use the ordinary Astro build rather than this preview post-processing step.
