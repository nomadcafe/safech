/**
 * Copy for the legal notice page.
 *
 * The markup around this text was byte-identical in the en and zh copies of
 * the page, so it lives in src/pages/[lang]/ now and only the strings differ.
 * `body` is raw HTML (links, inline code) and is rendered with set:html.
 */
export const legalNoticeContent = {
  en: {
    title: 'Legal Notice – SafeCh',
    description: 'Legal notice for the SafeCh website.',
    heading: 'Legal Notice',
    sections: [
      {
        heading: 'Information',
        body: '<p> SafeCh<br> Community Project<br> Open-source directory for free software alternatives </p>',
      },
      {
        heading: 'Contact',
        body: '<p> Email: <a href="mailto:hello@safech.com">hello@safech.com</a> </p>',
      },
      {
        heading: 'Disclaimer',
        body: '<h3 class="font-medium mt-3 mb-1" style="color: var(--color-text-primary)">Liability for Content</h3> <p class="text-sm"> The contents of this website have been created with the utmost care. However, we cannot guarantee the accuracy, completeness and timeliness of the content. </p> <h3 class="font-medium mt-3 mb-1" style="color: var(--color-text-primary)">Liability for Links</h3> <p class="text-sm"> This website contains links to external third-party websites over whose content we have no influence. The respective provider or operator is always responsible for the content of the linked pages. </p>',
      },
      {
        heading: 'Copyright',
        body: '<p class="text-sm"> The code of this website is licensed under the MIT License. The content (texts, descriptions) is licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0). </p>',
      },
    ],
  },
  zh: {
    title: '法律声明 – SafeCh',
    description: 'SafeCh 网站的法律声明。',
    heading: '法律声明',
    sections: [
      {
        heading: '信息',
        body: '<p> SafeCh<br> 社区项目<br> 自由软件替代品的开源目录 </p>',
      },
      {
        heading: '联系方式',
        body: '<p> 电子邮件：<a href="mailto:hello@safech.com">hello@safech.com</a> </p>',
      },
      {
        heading: '免责声明',
        body: '<h3 class="font-medium mt-3 mb-1" style="color: var(--color-text-primary)">内容责任</h3> <p class="text-sm"> 本网站的内容已尽最大努力制作。然而，我们无法保证内容的准确性、完整性和时效性。 </p> <h3 class="font-medium mt-3 mb-1" style="color: var(--color-text-primary)">链接责任</h3> <p class="text-sm"> 本网站包含指向外部第三方网站的链接，我们对其内容没有任何影响力。所链接页面的内容始终由相应的提供者或运营者负责。 </p>',
      },
      {
        heading: '版权',
        body: '<p class="text-sm"> 本网站的代码采用 MIT 许可证授权。内容（文本、描述）采用知识共享 署名-相同方式共享 4.0 国际许可协议（CC BY-SA 4.0）授权。 </p>',
      },
    ],
  },
} as const;
