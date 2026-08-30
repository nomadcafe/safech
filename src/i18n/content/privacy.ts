/**
 * Copy for the privacy page.
 *
 * The markup around this text was byte-identical in the en and zh copies of
 * the page, so it lives in src/pages/[lang]/ now and only the strings differ.
 * `body` is raw HTML (links, inline code) and is rendered with set:html.
 */
export const privacyContent = {
  en: {
    title: 'Privacy Policy – SafeCh',
    description: 'Privacy policy for the SafeCh website.',
    heading: 'Privacy Policy',
    sections: [
      {
        heading: 'Principle',
        body: '<p class="text-sm"> This website was developed with maximum privacy in mind. We do not collect personal data, do not use cookies and do not employ any tracking tools. </p>',
      },
      {
        heading: 'Hosting',
        body: '<p class="text-sm"> This website is hosted on GitHub Pages. When visiting this website, GitHub automatically creates server log files that may contain information such as the IP address, the browser used and the time of access. For more information, see the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement</a>. </p>',
      },
      {
        heading: 'Cookies',
        body: '<p class="text-sm"> This website does not use cookies. The only local storage is the theme preference (Dark/Light Mode) in your browser\'s localStorage. This information never leaves your browser. </p>',
      },
      {
        heading: 'Analytics & Tracking',
        body: '<p class="text-sm"> This website does not use any analytics or tracking tools. No Google Analytics, no Matomo, no pixels. We don\'t know who visits this site, and that\'s intentional. </p>',
      },
      {
        heading: 'External Links',
        body: '<p class="text-sm"> This website links to external websites (tool websites, GitHub repositories). When clicking these links, the privacy policies of the respective external sites apply. All external links are marked with <code class="px-1 py-0.5 rounded text-xs font-mono" style="background: var(--color-bg-tertiary)">rel="noopener noreferrer"</code>. </p>',
      },
      {
        heading: 'Fonts',
        body: '<p class="text-sm"> All fonts (Inter, JetBrains Mono) are self-hosted and not loaded from external CDNs. No connections to Google Fonts or other font services are made. </p>',
      },
      {
        heading: 'Your Rights',
        body: '<p class="text-sm"> Since we do not collect personal data, there is no data we could delete, correct or share. If you have questions about this privacy policy, you can contact us at <a href="mailto:hello@safech.com">hello@safech.com</a>. </p>',
      },
    ],
  },
  zh: {
    title: '隐私政策 – SafeCh',
    description: 'SafeCh 网站的隐私政策。',
    heading: '隐私政策',
    sections: [
      {
        heading: '原则',
        body: '<p class="text-sm"> 本网站在开发时以最大限度保护隐私为宗旨。我们不收集个人数据，不使用 Cookie，也不采用任何跟踪工具。 </p>',
      },
      {
        heading: '托管',
        body: '<p class="text-sm"> 本网站托管于 GitHub Pages。在访问本网站时，GitHub 会自动生成服务器日志文件，其中可能包含 IP 地址、所使用的浏览器以及访问时间等信息。更多信息请参阅 <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub 隐私声明</a>。 </p>',
      },
      {
        heading: 'Cookie',
        body: '<p class="text-sm"> 本网站不使用 Cookie。唯一的本地存储是浏览器 localStorage 中的主题偏好（深色/浅色模式）。该信息绝不会离开你的浏览器。 </p>',
      },
      {
        heading: '分析与跟踪',
        body: '<p class="text-sm"> 本网站不使用任何分析或跟踪工具。没有 Google Analytics，没有 Matomo，也没有跟踪像素。我们不知道谁访问了本站点，这是有意为之。 </p>',
      },
      {
        heading: '外部链接',
        body: '<p class="text-sm"> 本网站链接到外部网站（工具网站、GitHub 仓库）。点击这些链接时，将适用相应外部站点的隐私政策。所有外部链接均带有 <code class="px-1 py-0.5 rounded text-xs font-mono" style="background: var(--color-bg-tertiary)">rel="noopener noreferrer"</code> 标记。 </p>',
      },
      {
        heading: '字体',
        body: '<p class="text-sm"> 所有字体（Inter、JetBrains Mono）均为自托管，不会从外部 CDN 加载。不会与 Google Fonts 或其他字体服务建立任何连接。 </p>',
      },
      {
        heading: '你的权利',
        body: '<p class="text-sm"> 由于我们不收集个人数据，因此没有可供我们删除、更正或共享的数据。如果你对本隐私政策有任何疑问，可以通过 <a href="mailto:hello@safech.com">hello@safech.com</a> 与我们联系。 </p>',
      },
    ],
  },
} as const;
