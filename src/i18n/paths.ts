import { languages } from './ui';

/**
 * getStaticPaths for the `[lang]` route tree.
 *
 * Every page used to exist twice — once under src/pages/en/ and once under
 * src/pages/zh/ — with the markup byte-identical and only the copy differing.
 * A single dynamic segment renders both from one file, so adding a third
 * language becomes a matter of translating strings rather than copying twelve
 * more .astro files.
 */
export function localePaths() {
  return Object.keys(languages).map(lang => ({ params: { lang } }));
}
