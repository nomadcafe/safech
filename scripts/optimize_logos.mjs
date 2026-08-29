#!/usr/bin/env node
/**
 * Normalise public/logos/*.png to a sensible display size.
 *
 * fetch_logos.py stores whatever the upstream host serves, which ranges from
 * a 1.5 KB favicon to a 674 KB press-kit render. Cards show these at 28 px and
 * the detail page at 56 px, so anything past 128 px is pure transfer cost.
 *
 * Idempotent: an image already within MAX_DIM and already PNG is left alone,
 * so re-running after a fetch only touches the new arrivals.
 *
 * Usage:
 *     node scripts/optimize_logos.mjs
 *     DRY_RUN=true node scripts/optimize_logos.mjs
 */
import { readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const LOGO_DIR = path.join(process.cwd(), 'public', 'logos');
const DRY_RUN = process.env.DRY_RUN === 'true';
const MAX_DIM = Number(process.env.MAX_DIM ?? 128); // 2x the largest render (56 px)
const MAX_BYTES = Number(process.env.MAX_BYTES ?? 32 * 1024);

const files = (await readdir(LOGO_DIR)).filter(name => name.endsWith('.png')).sort();

let touched = 0;
const undecodable = [];
let bytesBefore = 0;
let bytesAfter = 0;

for (const name of files) {
  const file = path.join(LOGO_DIR, name);
  const before = (await stat(file)).size;
  const image = sharp(file);

  let meta;
  try {
    meta = await image.metadata();
  } catch {
    // Not decodable — an SVG or an error page saved under a .png name. The
    // browser will not render it either, so surface it instead of crashing.
    undecodable.push(name);
    continue;
  }

  const oversized = (meta.width ?? 0) > MAX_DIM || (meta.height ?? 0) > MAX_DIM;
  // fetch_logos.py stores JPEG/WebP payloads under a .png name; browsers sniff
  // the real type, but re-encoding keeps the directory honest.
  const misnamed = meta.format !== 'png';
  // A 128 px icon has no business weighing this much — usually 16-bit colour
  // depth or an uncompressed alpha channel. Re-encode it too.
  const bloated = before > MAX_BYTES;
  if (!oversized && !misnamed && !bloated) continue;

  const buffer = await image
    .resize({ width: MAX_DIM, height: MAX_DIM, fit: 'inside', withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();

  // Never trade a smaller file for a bigger one.
  if (buffer.length >= before && !misnamed) continue;

  bytesBefore += before;
  bytesAfter += buffer.length;
  touched += 1;
  if (!DRY_RUN) await writeFile(file, buffer);
  console.log(
    `${name}  ${meta.width}x${meta.height} ${meta.format} ${(before / 1024).toFixed(0)} KB` +
      ` -> ${MAX_DIM}px png ${(buffer.length / 1024).toFixed(0)} KB`
  );
}

if (undecodable.length) {
  console.log(
    `\n${undecodable.length} file(s) are not decodable images and were left alone:`
  );
  for (const name of undecodable) console.log(`  ${name}`);
}

const saved = bytesBefore - bytesAfter;
console.log(
  `\n${touched} of ${files.length} logos rewritten` +
    (touched ? `, ${(saved / 1024 / 1024).toFixed(2)} MB saved` : '') +
    (DRY_RUN ? ' (dry run, nothing written)' : '')
);
