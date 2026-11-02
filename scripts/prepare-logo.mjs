import sharp from 'sharp';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const original = fileURLToPath(new URL('../public/moxin-logo.png', import.meta.url));
for (const size of [160, 640]) {
  const output = fileURLToPath(new URL(`../public/moxin-logo-${size}.webp`, import.meta.url));
  await sharp(original).resize(size, size, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 88 }).toFile(output);
}

// Keep the supplied photograph unchanged and generate a lightweight web version.
const founder = fileURLToPath(new URL('../public/founder.png', import.meta.url));
if (existsSync(founder)) {
  const output = fileURLToPath(new URL('../public/founder-860.webp', import.meta.url));
  await sharp(founder).resize(860, 860, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 88 }).toFile(output);
}
