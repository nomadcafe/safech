import { ui, defaultLang, categoryTranslations, categoryTranslationsZh } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const base = import.meta.env.BASE_URL;
  let pathname = url.pathname;
  if (pathname.startsWith(base)) {
    pathname = pathname.slice(base.length);
  }
  if (pathname.startsWith('zh/') || pathname === 'zh') {
    return 'zh';
  }
  return 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] || (ui[defaultLang] as Record<string, string>)[key] || key;
  };
}

export function getHomeHref(lang: Lang): string {
  const base = import.meta.env.BASE_URL;
  if (lang === 'zh') return `${base}zh/`;
  return `${base}en/`;
}

// Category translation map per language
function getCategoryMap(lang: Lang): Record<string, { name: string; description: string; replaces: string }> | null {
  if (lang === 'zh') return categoryTranslationsZh;
  return categoryTranslations;
}

export function getCategoryName(slug: string, lang: Lang): string {
  const map = getCategoryMap(lang);
  return map && map[slug] ? map[slug].name : '';
}

export function getCategoryDescription(slug: string, lang: Lang): string {
  const map = getCategoryMap(lang);
  return map && map[slug] ? map[slug].description : '';
}

export function getCategoryReplaces(slug: string, lang: Lang): string {
  const map = getCategoryMap(lang);
  return map && map[slug] ? map[slug].replaces : '';
}

// en and zh share the same ASCII slugs, so switching is just swapping the language prefix
export function getLocalizedPath(url: URL, targetLang: Lang): string {
  const base = import.meta.env.BASE_URL;
  let pathname = url.pathname;

  if (pathname.startsWith(base)) {
    pathname = pathname.slice(base.length);
  }

  // Remove trailing slash for processing
  if (pathname.endsWith('/') && pathname.length > 1) {
    pathname = pathname.slice(0, -1);
  }

  const currentLang = getLangFromUrl(url);
  if (currentLang === targetLang) return url.pathname;

  // Drop the current language prefix, keep the rest, then prefix the target language
  const segments = pathname.split('/').filter(Boolean);
  const rest = segments[0] === currentLang ? segments.slice(1) : segments;
  const path = rest.length > 0 ? rest.join('/') + '/' : '';
  return `${base}${targetLang}/${path}`;
}
