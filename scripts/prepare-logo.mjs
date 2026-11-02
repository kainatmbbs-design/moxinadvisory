import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
const original = fileURLToPath(new URL('../public/moxin-logo.png', import.meta.url));
for (const size of [160, 640]) {
  const output = fileURLToPath(new URL(`../public/moxin-logo-${size}.webp`, import.meta.url));
  await sharp(original).resize(size, size, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 88 }).toFile(output);
}
