#!/usr/bin/env python3
"""
Download the missing tool logos into public/logos/.

Tool cards render a local `public/logos/<slug>.png` only when the file
actually exists (see src/utils/logos.ts); otherwise they fall back to a
coloured initial-letter chip. That keeps the site free of requests to
third-party logo hosts, but it also means a tool without a local PNG
never shows its real logo. This script closes that gap: it takes each
tool's `logoUrl` and stores the image locally, once, at author time.

  - Idempotent: a slug that already has a PNG is skipped.
  - Conservative: only writes files that decode as a raster image and
    stay under MAX_BYTES; anything else is reported and left alone.
  - Downloads at whatever size the host serves; run
    scripts/optimize_logos.mjs afterwards to normalise them to 128px.
  - Offline-safe: network failures are counted, never fatal.

Usage:
    python3 scripts/fetch_logos.py
    DRY_RUN=true python3 scripts/fetch_logos.py

Environment:
    REPO_ROOT   - default '.'
    DRY_RUN     - 'true' to list what would be downloaded
    MAX_BYTES   - skip anything larger (default: 2097152)
    LIMIT       - stop after N downloads (default: 0 = no limit)
"""

from __future__ import annotations

import os
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

REPO_ROOT = Path(os.environ.get("REPO_ROOT", ".")).resolve()
TOOLS_DIR = REPO_ROOT / "src" / "data" / "tools"
LOGO_DIR = REPO_ROOT / "public" / "logos"
DRY_RUN = os.environ.get("DRY_RUN", "").lower() == "true"
MAX_BYTES = int(os.environ.get("MAX_BYTES", 2_097_152))
LIMIT = int(os.environ.get("LIMIT", 0))

USER_AGENT = "safech-logo-fetcher/1.0"
TIMEOUT = 20

# Matches `slug: 'x'` / `logoUrl: 'y'` in both the hand-written TS entries
# and the AUTO_TOOLS_JSON block ("slug": "x").
SLUG_RE = re.compile(r"""["']?slug["']?\s*:\s*["']([^"']+)["']""")
LOGO_RE = re.compile(r"""["']?logoUrl["']?\s*:\s*["']([^"']+)["']""")

# A logo must decode as one of these; anything else is an error page.
SIGNATURES = (
    (b"\x89PNG\r\n\x1a\n", "png"),
    (b"\xff\xd8\xff", "jpg"),
    (b"GIF87a", "gif"),
    (b"GIF89a", "gif"),
)


def collect_tools() -> list[tuple[str, str]]:
    """Return (slug, logoUrl) pairs in file order, deduplicated by slug."""
    seen: set[str] = set()
    pairs: list[tuple[str, str]] = []
    for path in sorted(TOOLS_DIR.glob("*.ts")):
        text = path.read_text(encoding="utf-8")
        # Entries are separated by `slug:`; pair each slug with the next
        # logoUrl that appears before the following slug.
        slugs = [(m.start(), m.group(1)) for m in SLUG_RE.finditer(text)]
        logos = [(m.start(), m.group(1)) for m in LOGO_RE.finditer(text)]
        for i, (pos, slug) in enumerate(slugs):
            end = slugs[i + 1][0] if i + 1 < len(slugs) else len(text)
            url = next((u for p, u in logos if pos < p < end), None)
            if url and slug not in seen:
                seen.add(slug)
                pairs.append((slug, url))
    return pairs


def sniff(data: bytes) -> str | None:
    for signature, ext in SIGNATURES:
        if data.startswith(signature):
            return ext
    if data[:4] == b"RIFF" and data[8:12] == b"WEBP":
        return "webp"
    return None


def download(url: str) -> bytes | None:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=TIMEOUT) as response:
        return response.read(MAX_BYTES + 1)


def main() -> int:
    if not TOOLS_DIR.is_dir():
        print(f"no tools directory at {TOOLS_DIR}", file=sys.stderr)
        return 1
    LOGO_DIR.mkdir(parents=True, exist_ok=True)

    pairs = collect_tools()
    missing = [(slug, url) for slug, url in pairs if not (LOGO_DIR / f"{slug}.png").exists()]
    print(f"{len(pairs)} tools with a logoUrl, {len(missing)} without a local PNG")

    saved = skipped = failed = 0
    for slug, url in missing:
        if LIMIT and saved >= LIMIT:
            print(f"reached LIMIT={LIMIT}, stopping")
            break
        if DRY_RUN:
            print(f"would fetch {slug} <- {url}")
            saved += 1
            continue
        try:
            data = download(url)
        except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError, OSError) as err:
            print(f"  fail {slug}: {err}")
            failed += 1
            continue

        if not data:
            print(f"  skip {slug}: empty response")
            skipped += 1
            continue
        if len(data) > MAX_BYTES:
            print(f"  skip {slug}: larger than {MAX_BYTES} bytes")
            skipped += 1
            continue
        kind = sniff(data)
        if kind is None:
            print(f"  skip {slug}: not an image ({data[:16]!r})")
            skipped += 1
            continue

        # The site always requests <slug>.png; browsers sniff the real type,
        # so a JPEG/WebP/GIF stored under .png still renders. Converting is
        # left to an image pipeline if you want smaller files.
        (LOGO_DIR / f"{slug}.png").write_bytes(data)
        saved += 1
        print(f"  ok   {slug} ({kind}, {len(data)} bytes)")
        time.sleep(0.2)  # be polite to the logo hosts

    print(f"\nsaved {saved}, skipped {skipped}, failed {failed}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
