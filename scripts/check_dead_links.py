#!/usr/bin/env python3
"""Fail the build if any internal link in the generated site is dead.

Scans every .html file under the given output directory (default: dist),
extracts internal href targets (those starting with "/"), and checks that
each resolves to a real file or directory-index in the build output.
External links (http/https/mailto/tel), in-page anchors (#...) and query
strings are ignored.

Usage:  python3 scripts/check_dead_links.py [dist_dir]
Exit:   0 = no dead links, 1 = dead links found (or dist missing).
"""
import os
import re
import sys
import glob

HREF_RE = re.compile(r'href="(/[^"]*)"')


def resolve(dist: str, link: str) -> bool:
    # Strip query/hash, keep just the path.
    path = link.split("#", 1)[0].split("?", 1)[0]
    if not path:
        return True  # pure #anchor / empty
    rel = path.lstrip("/")
    candidates = [
        os.path.join(dist, rel),                       # a real file, e.g. /rss.xml
        os.path.join(dist, rel.rstrip("/"), "index.html"),  # a routed page, e.g. /en/tools/
    ]
    return any(os.path.exists(c) for c in candidates)


def main() -> int:
    dist = sys.argv[1] if len(sys.argv) > 1 else "dist"
    if not os.path.isdir(dist):
        print(f"::error::output directory '{dist}' not found — run the build first")
        return 1

    pages = glob.glob(os.path.join(dist, "**", "*.html"), recursive=True)
    cache: dict[str, bool] = {}
    dead: dict[str, set[str]] = {}

    for page in pages:
        with open(page, encoding="utf-8") as fh:
            html = fh.read()
        for link in set(HREF_RE.findall(html)):
            if link not in cache:
                cache[link] = resolve(dist, link)
            if not cache[link]:
                src = os.path.relpath(page, dist)
                dead.setdefault(link, set()).add(src)

    print(f"Checked {len(pages)} pages, {len(cache)} unique internal links.")
    if not dead:
        print("✅ No dead internal links.")
        return 0

    print(f"❌ Found {len(dead)} dead internal link(s):")
    for link, sources in sorted(dead.items()):
        examples = ", ".join(sorted(sources)[:3])
        more = f" (+{len(sources) - 3} more)" if len(sources) > 3 else ""
        print(f"  {link}")
        print(f"      referenced by: {examples}{more}")
        print(f"::error::Dead internal link {link} (e.g. in {sorted(sources)[0]})")
    return 1


if __name__ == "__main__":
    sys.exit(main())
