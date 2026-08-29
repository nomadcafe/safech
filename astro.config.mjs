import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // On a self-hosted deploy, point 'site' at your own domain so the sitemap
  // and RSS URLs come out absolute and correct.
  site: 'https://safech.com',
  base: '/',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    icon(),
    sitemap({
      // The apex is a noindex language-redirect stub and the 404s are error
      // pages; neither belongs in a sitemap we ask Google to crawl.
      filter: page => !/\/(404)\/$/.test(page) && new URL(page).pathname !== '/',
    }),
  ],
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
