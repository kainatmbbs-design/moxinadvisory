import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
// Run after `npm run build`. This is a noindex preview at the repository subpath.
// Production custom-domain builds should use the unmodified Astro output instead.
const prefix = '/moxinadvisory';
function visit(directory) {
  for (const entry of readdirSync(directory, {withFileTypes: true})) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) visit(path);
    else if (entry.name.endsWith('.html')) {
      let html = readFileSync(path, 'utf8');
      html = html.replace(/\b(href|src|action)="\/(?!\/)/g, `$1="${prefix}/`);
      html = html.replace(/<meta name="robots" content="[^"]*"\s*\/?>/g, '<meta name="robots" content="noindex, nofollow">');
      writeFileSync(path, html);
    }
  }
}
visit('dist');
writeFileSync('dist/.nojekyll', '');
writeFileSync('dist/robots.txt', 'User-agent: *\nDisallow: /\n');
console.log('Prepared noindex GitHub Pages preview under /moxinadvisory/.');
