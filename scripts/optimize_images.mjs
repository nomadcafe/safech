#!/usr/bin/env node
/**
 * Emit WebP + AVIF siblings for the hero artwork in public/hero/.
 *
 * The hero shipped as four full-bleed PNGs totalling ~4.9 MB — on a page whose
 * whole pitch is "lightweight and self-hostable". Modern formats cut that by
 * ~97% with no visible difference at these sizes; the PNGs stay as the <img>
 * fallback, so nothing regresses for a browser that supports neither.
 *
 * Idempotent: an output newer than its source is left alone.
 *
 * Usage:
 *     node scripts/optimize_images.mjs
 *     FORCE=true node scripts/optimize_images.mjs
 */
import { readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const HERO_DIR = path.join(process.cwd(), 'public', 'hero');
const FORCE = process.env.FORCE === 'true';

const FORMATS = [
  { ext: 'webp', options: { quality: 80 } },
  { ext: 'avif', options: { quality: 50 } },
];

async function isStale(source, target) {
  if (FORCE) return true;
  try {
    const [src, dst] = await Promise.all([stat(source), stat(target)]);
    return src.mtimeMs > dst.mtimeMs;
  } catch {
    return true; // target missing
  }
}

const entries = await readdir(HERO_DIR);
const sources = entries.filter(name => name.endsWith('.png')).sort();

let written = 0;
let skipped = 0;

for (const name of sources) {
  const source = path.join(HERO_DIR, name);
  const before = (await stat(source)).size;
  const { width, height } = await sharp(source).metadata();

  for (const { ext, options } of FORMATS) {
    const target = path.join(HERO_DIR, `${name.slice(0, -'.png'.length)}.${ext}`);
    if (!(await isStale(source, target))) {
      skipped += 1;
      continue;
    }
    const buffer = await sharp(source).toFormat(ext, options).toBuffer();
    await writeFile(target, buffer);
    written += 1;
    const saved = Math.round((1 - buffer.length / before) * 100);
    console.log(
      `${path.basename(target)}  ${width}x${height}  ` +
        `${(buffer.length / 1024).toFixed(0)} KB  (-${saved}% vs PNG)`
    );
  }
}

console.log(`\n${written} written, ${skipped} already current`);
