/**
 * Unbiased Fisher-Yates sample of at most `count` items.
 *
 * Used for the homepage "different on every visit" sections: we ship a small
 * pool of candidates instead of all 639 tools, then the client picks the six it
 * shows. (`[...arr].sort(() => Math.random() - 0.5)` is not a uniform shuffle,
 * which matters now that only the first slice survives.)
 */
export function sample<T>(items: readonly T[], count: number): T[] {
  const pool = [...items];
  const size = Math.min(count, pool.length);
  for (let i = 0; i < size; i++) {
    const j = i + Math.floor(Math.random() * (pool.length - i));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, size);
}
