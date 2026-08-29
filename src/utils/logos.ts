import fs from 'node:fs';
import path from 'node:path';

/**
 * Which tool logos actually exist in public/logos/ — resolved once at build time.
 *
 * Without this check every tool got an <img src="/logos/{slug}.png">, and the
 * ~275 tools that have no local file produced a 404 plus a fallback request to
 * github.com / avatars.githubusercontent.com. Both are avoidable on a site that
 * promises no third-party calls, so a missing logo now renders the local
 * initial-letter placeholder directly.
 *
 * Run `python3 scripts/fetch_logos.py` to download the missing ones.
 */
const logoDir = path.join(process.cwd(), 'public', 'logos');

let availableLogos: Set<string>;
try {
  availableLogos = new Set(
    fs
      .readdirSync(logoDir)
      .filter(file => file.endsWith('.png'))
      .map(file => file.slice(0, -'.png'.length))
  );
} catch {
  availableLogos = new Set();
}

export function hasLocalLogo(slug: string): boolean {
  return availableLogos.has(slug);
}
