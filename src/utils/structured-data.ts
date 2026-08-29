import type { Category, Tool } from '../data/types';

/**
 * schema.org JSON-LD builders.
 *
 * A directory site lives or dies on how well search engines understand its
 * entries, and we shipped none of this. Every builder returns a plain object;
 * BaseLayout serialises whatever it is handed via its `jsonLd` prop.
 */

export type JsonLd = Record<string, unknown>;

export const SITE_NAME = 'SafeCh';

const OS_LABELS: Record<string, string> = {
  linux: 'Linux',
  windows: 'Windows',
  macos: 'macOS',
  android: 'Android',
  ios: 'iOS',
  web: 'Web-based',
  docker: 'Docker',
};

/** Tool descriptions still hold German as the internal source; prefer English. */
function toolDescription(tool: Tool): string {
  return tool.descriptionEn ?? tool.description;
}

export function organizationJsonLd(siteUrl: string): JsonLd {
  return {
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: SITE_NAME,
    url: siteUrl,
    logo: `${siteUrl}icon.png`,
  };
}

export function websiteJsonLd(siteUrl: string, homeUrl: string, lang: string, description: string): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': `${homeUrl}#website`,
    name: SITE_NAME,
    url: homeUrl,
    description,
    inLanguage: lang === 'zh' ? 'zh-CN' : 'en',
    publisher: { '@id': `${siteUrl}#organization` },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function toolJsonLd(
  tool: Tool,
  options: { url: string; lang: string; categoryNames: string[] }
): JsonLd {
  const { url, lang, categoryNames } = options;
  const operatingSystem = tool.platforms.map(p => OS_LABELS[p]).filter(Boolean);

  return {
    '@type': 'SoftwareApplication',
    '@id': `${url}#software`,
    name: tool.name,
    url,
    description: toolDescription(tool),
    inLanguage: lang === 'zh' ? 'zh-CN' : 'en',
    applicationCategory: categoryNames[0] ?? 'Utility',
    ...(categoryNames.length > 1 ? { applicationSubCategory: categoryNames.slice(1) } : {}),
    ...(operatingSystem.length ? { operatingSystem } : {}),
    license: tool.license,
    isAccessibleForFree: true,
    // Every listed tool is free and open source; stating it explicitly is what
    // makes the entry eligible for the software result treatment.
    offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
    ...(tool.website ? { installUrl: tool.website } : {}),
    ...(tool.github ? { codeRepository: tool.github } : {}),
    ...(tool.tags.length ? { keywords: tool.tags.join(', ') } : {}),
    ...(tool.lastUpdated ? { dateModified: tool.lastUpdated } : {}),
    ...(tool.addedDate ? { datePublished: tool.addedDate } : {}),
    ...(tool.replacesTools.length ? { isSimilarTo: tool.replacesTools } : {}),
  };
}

export function collectionJsonLd(options: {
  name: string;
  description: string;
  url: string;
  lang: string;
  items?: { name: string; url: string }[];
}): JsonLd {
  const { name, description, url, lang, items } = options;
  return {
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    name,
    description,
    url,
    inLanguage: lang === 'zh' ? 'zh-CN' : 'en',
    ...(items?.length
      ? {
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: items.length,
            itemListElement: items.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: item.name,
              url: item.url,
            })),
          },
        }
      : {}),
  };
}

/** Resolve a tool's category slugs to display names for applicationCategory. */
export function categoryNamesFor(tool: Tool, categories: Category[], resolve: (slug: string) => string): string[] {
  return tool.categories
    .map(slug => resolve(slug) || categories.find(c => c.slug === slug)?.name)
    .filter((name): name is string => Boolean(name));
}
