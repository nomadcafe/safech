import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Bei eigenem Deploy: 'site' auf die eigene Domain setzen (für korrekte Sitemap/RSS-URLs)
  site: 'https://safech.com',
  base: '/',
  trailingSlash: 'always',
  integrations: [tailwind(), icon(), sitemap()],
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
