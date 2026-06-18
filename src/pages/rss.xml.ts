import type { APIRoute } from 'astro';
import { allTools } from '../data/tools/index';

const site = 'https://safech.com';
const base = '';

export const GET: APIRoute = () => {
  const sortedTools = [...allTools].sort(
    (a, b) => new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()
  );

  const items = sortedTools
    .slice(0, 50)
    .map(
      (tool) => `
    <item>
      <title>${escapeXml(tool.name)}</title>
      <link>${site}${base}/en/tool/${tool.slug}/</link>
      <description>${escapeXml(tool.taglineEn || tool.tagline)}</description>
      <pubDate>${new Date(tool.addedDate).toUTCString()}</pubDate>
      <guid isPermaLink="true">${site}${base}/en/tool/${tool.slug}/</guid>
      <category>${escapeXml(tool.categories[0] ?? '')}</category>
    </item>`
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SafeCh</title>
    <description>Safe, GDPR-friendly open-source alternatives to proprietary software</description>
    <link>${site}${base}/en/</link>
    <atom:link href="${site}${base}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(rss.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
