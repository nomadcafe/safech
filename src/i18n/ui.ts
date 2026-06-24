export const languages = {
  en: 'English',
  zh: '中文',
} as const;

export const defaultLang = 'en' as const;

export const ui = {
  en: {
    // Navigation
    'nav.categories': 'Categories',
    'nav.tools': 'Tools',
    'nav.comparison': 'Comparison',
    'nav.guides': 'Guides',
    'nav.about': 'About',
    'nav.search': 'Search...',
    'nav.searchOpen': 'Open search (Ctrl+K)',
    'nav.themeToggle': 'Toggle theme',
    'nav.menuOpen': 'Open menu',
    'nav.home': 'SafeCh Home',
    'nav.mainNav': 'Main navigation',

    // Navigation hrefs (path after base, with en/ prefix)
    'nav.href.categories': 'en/categories/',
    'nav.href.tools': 'en/tools/',
    'nav.href.comparison': 'en/comparison/',
    'nav.href.guides': 'en/self-hosting/',
    'nav.href.about': 'en/about/',

    // Footer
    'footer.tagline': 'Your freedom. Your code. Your future.',
    'footer.subtitle': 'Safe, GDPR-friendly open-source alternatives to proprietary software.',
    'footer.navigation': 'Navigation',
    'footer.categories': 'Categories',
    'footer.allTools': 'All Tools',
    'footer.comparison': 'Comparison',
    'footer.selfHost': 'Self-Hosting',
    'footer.licenseOverview': 'License Overview',
    'footer.aboutUs': 'About',
    'footer.imprint': 'Legal Notice',
    'footer.privacy': 'Privacy',
    'footer.license': 'Content: CC BY-SA 4.0',

    // Footer hrefs (path after base, with en/ prefix)
    'footer.href.categories': 'en/categories/',
    'footer.href.tools': 'en/tools/',
    'footer.href.comparison': 'en/comparison/',
    'footer.href.selfHost': 'en/self-hosting/',
    'footer.href.licenseOverview': 'en/license-overview/',
    'footer.href.about': 'en/about/',
    'footer.href.imprint': 'en/legal-notice/',
    'footer.href.privacy': 'en/privacy/',

    // BaseLayout
    'layout.skipToContent': 'Skip to content',
    'layout.backToTop': 'Back to top',
    'layout.defaultDescription': 'SafeCh – Safe, GDPR-friendly open-source alternatives to proprietary software. Self-hostable, transparent, open-source. Your freedom. Your code. Your future.',

    // ToolCard
    'tool.selfHostable': 'Self-hostable',
    'tool.lastUpdated': 'Last:',
    'tool.viewDetails': 'View details →',
    'tool.months.0': 'Jan',
    'tool.months.1': 'Feb',
    'tool.months.2': 'Mar',
    'tool.months.3': 'Apr',
    'tool.months.4': 'May',
    'tool.months.5': 'Jun',
    'tool.months.6': 'Jul',
    'tool.months.7': 'Aug',
    'tool.months.8': 'Sep',
    'tool.months.9': 'Oct',
    'tool.months.10': 'Nov',
    'tool.months.11': 'Dec',

    // ToolDetail
    'detail.home': 'Home',
    'detail.website': 'Website',
    'detail.github': 'GitHub',
    'detail.difficulty': 'Difficulty',
    'detail.lastCheck': 'Last check',
    'detail.staleWarning': '⚠ Over 18 months old',
    'detail.description': 'Description',
    'detail.platforms': 'Platforms',
    'detail.replacesTools': 'Replaces the following proprietary tools',
    'detail.selfHost': 'Self-Hosting',
    'detail.selfHostText': 'can be self-hosted on your own infrastructure. Visit the official documentation for installation instructions.',
    'detail.toDocs': 'Documentation →',
    'detail.categories': 'Categories',
    'detail.tags': 'Tags',
    'detail.relatedTools': 'Similar Tools',
    'detail.backTo': '← Back to',
    'detail.restricted': 'Limited',
    'detail.archived': 'Archived',
    'detail.reason': 'Reason:',
    'detail.preview': 'Preview',

    // ToolFilters
    'filters.search': 'Search',
    'filters.searchPlaceholder': 'Tool name...',
    'filters.category': 'Category',
    'filters.allCategories': 'All categories',
    'filters.license': 'License',
    'filters.allLicenses': 'All licenses',
    'filters.sort': 'Sort',
    'filters.sortName': 'Name (A-Z)',
    'filters.sortStars': 'Popularity (Stars)',
    'filters.sortDate': 'Newest first',
    'filters.selfHostOnly': 'Self-hostable only',
    'filters.easySetup': 'Easy setup',
    'filters.dockerAvailable': 'Docker available',
    'filters.viewGrid': 'Cards',
    'filters.viewList': 'List',
    'filters.viewToggleLabel': 'View',
    'filters.clearAll': 'Clear filters',
    'filters.activeCount': 'active',

    // SearchModal
    'search.placeholder': 'Search tools, categories or proprietary software...',
    'search.hint': 'Start typing to find tools and categories...',
    'search.noResults': 'No results for',
    'search.buildOnly': 'Search is only available in build mode.',
    'search.label': 'Search',

    // MaintenanceBadge
    'maintenance.active': '✓ Actively maintained',
    'maintenance.maintained': '✓ Maintained',
    'maintenance.slow': '⚡ Slowly maintained',
    'maintenance.restricted': '⚠ Limited',
    'maintenance.archived': '✗ Archived',

    // CategoryCard
    'category.replaces': 'Replaces:',
    'category.tools': 'Tools',

    // ToolGrid
    'grid.noTools': 'No tools found.',

    // Category page
    'catPage.home': 'Home',
    'catPage.categories': 'Categories',
    'catPage.replaces': 'Replaces:',
    'catPage.openSourceTools': 'Open Source Tools',

    // Difficulty labels
    'difficulty.einfach': '● Easy',
    'difficulty.mittel': '●● Medium',
    'difficulty.fortgeschritten': '●●● Advanced',

    // Tool/Category path prefixes
    'path.tool': 'en/tool',
    'path.category': 'en/category',
  },

  zh: {
    // Navigation
    'nav.categories': '分类',
    'nav.tools': '工具',
    'nav.comparison': '对比',
    'nav.guides': '指南',
    'nav.about': '关于',
    'nav.search': '搜索...',
    'nav.searchOpen': '打开搜索 (Ctrl+K)',
    'nav.themeToggle': '切换主题',
    'nav.menuOpen': '打开菜单',
    'nav.home': 'SafeCh 首页',
    'nav.mainNav': '主导航',

    // Navigation hrefs (path after base, with zh/ prefix)
    'nav.href.categories': 'zh/categories/',
    'nav.href.tools': 'zh/tools/',
    'nav.href.comparison': 'zh/comparison/',
    'nav.href.guides': 'zh/self-hosting/',
    'nav.href.about': 'zh/about/',

    // Footer
    'footer.tagline': '你的自由。你的代码。你的未来。',
    'footer.subtitle': '安全、符合欧盟 GDPR 的专有软件开源替代品。',
    'footer.navigation': '导航',
    'footer.categories': '分类',
    'footer.allTools': '全部工具',
    'footer.comparison': '对比',
    'footer.selfHost': '自托管',
    'footer.licenseOverview': '许可证概览',
    'footer.aboutUs': '关于',
    'footer.imprint': '法律声明',
    'footer.privacy': '隐私政策',
    'footer.license': '内容：CC BY-SA 4.0',

    // Footer hrefs (path after base, with zh/ prefix)
    'footer.href.categories': 'zh/categories/',
    'footer.href.tools': 'zh/tools/',
    'footer.href.comparison': 'zh/comparison/',
    'footer.href.selfHost': 'zh/self-hosting/',
    'footer.href.licenseOverview': 'zh/license-overview/',
    'footer.href.about': 'zh/about/',
    'footer.href.imprint': 'zh/legal-notice/',
    'footer.href.privacy': 'zh/privacy/',

    // BaseLayout
    'layout.skipToContent': '跳转到内容',
    'layout.backToTop': '返回顶部',
    'layout.defaultDescription': 'SafeCh — 安全、符合欧盟 GDPR 的开源软件替代品。可自托管、透明、开源。你的自由。你的代码。你的未来。',

    // ToolCard
    'tool.selfHostable': '可自托管',
    'tool.lastUpdated': '更新：',
    'tool.viewDetails': '查看详情 →',
    'tool.months.0': '1月',
    'tool.months.1': '2月',
    'tool.months.2': '3月',
    'tool.months.3': '4月',
    'tool.months.4': '5月',
    'tool.months.5': '6月',
    'tool.months.6': '7月',
    'tool.months.7': '8月',
    'tool.months.8': '9月',
    'tool.months.9': '10月',
    'tool.months.10': '11月',
    'tool.months.11': '12月',

    // ToolDetail
    'detail.home': '首页',
    'detail.website': '官网',
    'detail.github': 'GitHub',
    'detail.difficulty': '难度',
    'detail.lastCheck': '最近检查',
    'detail.staleWarning': '⚠ 超过 18 个月未更新',
    'detail.description': '简介',
    'detail.platforms': '平台',
    'detail.replacesTools': '可替代以下专有工具',
    'detail.selfHost': '自托管',
    'detail.selfHostText': '可以部署在你自己的基础设施上。请访问官方文档获取安装指南。',
    'detail.toDocs': '查看文档 →',
    'detail.categories': '分类',
    'detail.tags': '标签',
    'detail.relatedTools': '相似工具',
    'detail.backTo': '← 返回',
    'detail.restricted': '受限',
    'detail.archived': '已归档',
    'detail.reason': '原因：',
    'detail.preview': '预览',

    // ToolFilters
    'filters.search': '搜索',
    'filters.searchPlaceholder': '工具名称...',
    'filters.category': '分类',
    'filters.allCategories': '全部分类',
    'filters.license': '许可证',
    'filters.allLicenses': '全部许可证',
    'filters.sort': '排序',
    'filters.sortName': '名称 (A-Z)',
    'filters.sortStars': '热度 (Stars)',
    'filters.sortDate': '最新优先',
    'filters.selfHostOnly': '仅可自托管',
    'filters.easySetup': '易于安装',
    'filters.dockerAvailable': '提供 Docker',
    'filters.viewGrid': '卡片',
    'filters.viewList': '列表',
    'filters.viewToggleLabel': '视图',
    'filters.clearAll': '清除筛选',
    'filters.activeCount': '已启用',

    // SearchModal
    'search.placeholder': '搜索工具、分类或专有软件...',
    'search.hint': '开始输入即可查找工具和分类...',
    'search.noResults': '没有结果：',
    'search.buildOnly': '搜索仅在构建模式下可用。',
    'search.label': '搜索',

    // MaintenanceBadge
    'maintenance.active': '✓ 积极维护',
    'maintenance.maintained': '✓ 持续维护',
    'maintenance.slow': '⚡ 维护缓慢',
    'maintenance.restricted': '⚠ 受限',
    'maintenance.archived': '✗ 已归档',

    // CategoryCard
    'category.replaces': '替代：',
    'category.tools': '工具',

    // ToolGrid
    'grid.noTools': '未找到工具。',

    // Category page
    'catPage.home': '首页',
    'catPage.categories': '分类',
    'catPage.replaces': '替代：',
    'catPage.openSourceTools': '开源工具',

    // Difficulty labels
    'difficulty.einfach': '● 简单',
    'difficulty.mittel': '●● 中等',
    'difficulty.fortgeschritten': '●●● 进阶',

    // Tool/Category path prefixes
    'path.tool': 'zh/tool',
    'path.category': 'zh/category',
  },
} as const;

// English category translations
export const categoryTranslations: Record<string, { name: string; description: string; replaces: string }> = {
  // NOTE: This is the English map (kept as-is). Chinese map: categoryTranslationsZh below.
  'betriebssysteme': {
    name: 'Operating Systems',
    description: 'Free and open-source operating systems as alternatives to proprietary systems like Windows and macOS. From desktop Linux distributions to specialized systems.',
    replaces: 'Windows, macOS',
  },
  'buerosoftware': {
    name: 'Office Software',
    description: 'Open-source office applications for word processing, spreadsheets and presentations. Full-featured alternatives to Microsoft Office and Google Docs.',
    replaces: 'Microsoft Office, Google Docs',
  },
  'browser': {
    name: 'Browsers',
    description: 'Privacy-friendly open-source web browsers that respect your privacy. Powerful alternatives to Chrome and Edge without tracking.',
    replaces: 'Chrome, Edge',
  },
  'email-clients': {
    name: 'Email Clients',
    description: 'Free email programs for desktop and mobile devices. Secure and feature-rich alternatives to Outlook and Apple Mail.',
    replaces: 'Outlook, Apple Mail',
  },
  'email-server': {
    name: 'Email Servers & Services',
    description: 'Self-hostable email servers and privacy-friendly email services. Independent alternatives to Gmail Server and Microsoft Exchange.',
    replaces: 'Gmail Server, Exchange',
  },
  'cloud-speicher': {
    name: 'Cloud Storage & Sync',
    description: 'Self-hosted cloud storage and synchronization solutions. Keep full control over your data instead of using Google Drive, Dropbox or OneDrive.',
    replaces: 'Google Drive, Dropbox, OneDrive',
  },
  'passwort-manager': {
    name: 'Password Managers',
    description: 'Secure open-source password managers for storing and managing your credentials. Trusted alternatives to LastPass and 1Password.',
    replaces: 'LastPass, 1Password',
  },
  'kommunikation': {
    name: 'Communication & Chat',
    description: 'Encrypted and privacy-friendly messengers and chat platforms. Secure alternatives to WhatsApp, Slack and Microsoft Teams.',
    replaces: 'WhatsApp, Slack, Teams',
  },
  'videokonferenzen': {
    name: 'Video Conferencing',
    description: 'Open-source video conferencing solutions for meetings and webinars. Privacy-friendly alternatives to Zoom, Google Meet and Teams.',
    replaces: 'Zoom, Google Meet, Teams',
  },
  'kalender': {
    name: 'Calendar & Contacts',
    description: 'Free calendar and contact management with open standards like CalDAV and CardDAV. Independent alternatives to Google Calendar and iCloud.',
    replaces: 'Google Calendar, iCloud',
  },
  'suchmaschinen': {
    name: 'Search Engines',
    description: 'Privacy-friendly search engines that do not track your queries. Independent alternatives to Google and Bing.',
    replaces: 'Google, Bing',
  },
  'social-media': {
    name: 'Social Media',
    description: 'Decentralized and free social networks in the Fediverse and beyond. Ad-free alternatives to Twitter/X, Instagram, Facebook, YouTube and Reddit.',
    replaces: 'Twitter/X, Instagram, Facebook, YouTube, Reddit',
  },
  'code-hosting': {
    name: 'Code Hosting & Git',
    description: 'Self-hostable Git platforms for source code management and collaboration. Powerful alternatives to GitHub, Bitbucket and Azure DevOps.',
    replaces: 'GitHub, Bitbucket, Azure DevOps',
  },
  'ci-cd': {
    name: 'CI/CD Pipelines',
    description: 'Open-source solutions for Continuous Integration and Continuous Deployment. Automated build and deployment pipelines as alternatives to GitHub Actions, Jenkins and CircleCI.',
    replaces: 'GitHub Actions, Jenkins, CircleCI',
  },
  'container': {
    name: 'Containers & Orchestration',
    description: 'Free container runtimes and orchestration tools for modern application deployment. Open alternatives to Docker Hub and Kubernetes EKS.',
    replaces: 'Docker Hub, Kubernetes EKS',
  },
  'datenbanken': {
    name: 'Databases',
    description: 'Powerful open-source database systems for relational and NoSQL use cases. Proven alternatives to Oracle and Microsoft SQL Server.',
    replaces: 'Oracle, MSSQL',
  },
  'cms': {
    name: 'CMS & Website Builders',
    description: 'Open-source content management systems and website builders for every need. Flexible alternatives to WordPress.com, Squarespace and Wix.',
    replaces: 'WordPress.com, Squarespace, Wix',
  },
  'e-commerce': {
    name: 'E-Commerce',
    description: 'Free online shop systems and e-commerce platforms for self-hosting. Powerful alternatives to Shopify and Magento Commerce.',
    replaces: 'Shopify, Magento Commerce',
  },
  'analytics': {
    name: 'Web Analytics',
    description: 'Privacy-compliant web analytics tools without cookies and tracking. GDPR-friendly alternatives to Google Analytics and Mixpanel.',
    replaces: 'Google Analytics, Mixpanel',
  },
  'monitoring': {
    name: 'Monitoring & Observability',
    description: 'Open-source monitoring and observability platforms for infrastructure and applications. Comprehensive alternatives to Datadog, New Relic and PagerDuty.',
    replaces: 'Datadog, New Relic, PagerDuty',
  },
  'vpn': {
    name: 'VPN Solutions',
    description: 'Free VPN solutions for secure and encrypted network connections. Transparent alternatives to NordVPN and ExpressVPN.',
    replaces: 'NordVPN, ExpressVPN',
  },
  'firewall': {
    name: 'Firewall & Network Security',
    description: 'Open-source firewall and network security solutions for businesses and individuals. Powerful alternatives to Cisco and proprietary solutions.',
    replaces: 'Cisco, proprietary',
  },
  'ki-ml': {
    name: 'AI & Machine Learning',
    description: 'Open AI models and machine learning frameworks for text, images and more. Transparent alternatives to ChatGPT API, Midjourney and DALL-E.',
    replaces: 'ChatGPT API, Midjourney, DALL-E',
  },
  'notizen': {
    name: 'Notes & Knowledge Management',
    description: 'Free note-taking and knowledge management apps for personal and team use. Privacy-friendly alternatives to Notion, Evernote and Obsidian.',
    replaces: 'Notion, Evernote, Obsidian',
  },
  'projektmanagement': {
    name: 'Task & Project Management',
    description: 'Open-source tools for task and project management with Kanban, Gantt and more. Versatile alternatives to Asana, Monday, Jira and Trello.',
    replaces: 'Asana, Monday, Jira, Trello',
  },
  'video-audio': {
    name: 'Video & Audio Editing',
    description: 'Professional open-source tools for video and audio editing and production. Creative alternatives to Adobe Premiere, Final Cut and Audition.',
    replaces: 'Adobe Premiere, Final Cut, Audition',
  },
  'bildbearbeitung': {
    name: 'Image Editing & Design',
    description: 'Free image editing and design tools for designers and creatives. Powerful alternatives to Adobe Photoshop, Illustrator and Figma.',
    replaces: 'Adobe Photoshop, Illustrator, Figma',
  },
  'zeiterfassung': {
    name: 'Time Tracking',
    description: 'Open-source time tracking tools for freelancers and teams. Simple and transparent alternatives to Harvest, Toggl and Clockify Pro.',
    replaces: 'Harvest, Toggl, Clockify Pro',
  },
  'erp': {
    name: 'ERP Systems',
    description: 'Comprehensive open-source ERP systems for enterprise resource planning. Cost-effective alternatives to SAP Business One and Oracle ERP.',
    replaces: 'SAP Business One, Oracle ERP',
  },
  'crm': {
    name: 'CRM Systems',
    description: 'Free CRM systems for customer relationship management and sales. Flexible alternatives to Salesforce and HubSpot.',
    replaces: 'Salesforce, HubSpot',
  },
  'wiki': {
    name: 'Wiki & Documentation',
    description: 'Open-source wiki and documentation platforms for teams and organizations. Collaborative alternatives to Confluence, Notion and GitBook.',
    replaces: 'Confluence, Notion, GitBook',
  },
  'backup': {
    name: 'Backup Solutions',
    description: 'Reliable open-source backup tools for data and system backups. Secure alternatives to Backblaze and Acronis.',
    replaces: 'Backblaze, Acronis',
  },
  'dns-adblock': {
    name: 'DNS & Ad-Blocking',
    description: 'Self-hosted DNS servers and ad blockers for your network. Privacy-friendly alternatives to Google DNS and commercial filtering solutions.',
    replaces: 'Google DNS, commercial filters',
  },
  'objekt-speicher': {
    name: 'Object & File Storage',
    description: 'S3-compatible open-source object storage and distributed file systems. Self-hosted alternatives to Amazon S3 and Google Cloud Storage.',
    replaces: 'Amazon S3, Google Cloud Storage',
  },
  'medienserver': {
    name: 'Media Servers',
    description: 'Free media servers for your movie, series and music collection. Feature-rich alternatives to Plex Premium and Emby.',
    replaces: 'Plex Premium, Emby',
  },
  'dev-tools': {
    name: 'Development Tools & IDEs',
    description: 'Open-source development environments and programming tools for software developers. Powerful alternatives to JetBrains Suite and Visual Studio.',
    replaces: 'JetBrains Suite, Visual Studio',
  },
  'backend-frameworks': {
    name: 'API & Backend Frameworks',
    description: 'Open-source backend frameworks and API platforms for modern web applications. Self-hostable alternatives to Firebase and Supabase Pro.',
    replaces: 'Firebase, Supabase Pro',
  },
  'ssg': {
    name: 'Static Site Generators',
    description: 'Fast open-source static site generators for performant websites. Developer-friendly alternatives to Webflow and Framer.',
    replaces: 'Webflow, Framer',
  },
  'karten': {
    name: 'Map Services',
    description: 'Free map services and geodata platforms based on OpenStreetMap. Independent alternatives to Google Maps API and Mapbox.',
    replaces: 'Google Maps API, Mapbox',
  },
  'fotos': {
    name: 'Photo Management',
    description: 'Self-hosted photo management and gallery solutions for private photo collections. Privacy-friendly alternatives to Google Photos, iCloud Photos and Amazon Photos.',
    replaces: 'Google Photos, iCloud Photos, Amazon Photos',
  },
  'email-aliasing': {
    name: 'Email Aliasing & Masking',
    description: 'Services that generate disposable email aliases to hide your real address and stop spam and tracking. Open-source alternatives to Apple Hide My Email and Firefox Relay.',
    replaces: 'Hide My Email, Firefox Relay',
  },
  '2fa-authenticator': {
    name: 'Two-Factor Authenticators',
    description: 'Open-source TOTP/2FA authenticator apps with encrypted backups and no account lock-in. Privacy-friendly alternatives to Google Authenticator and Authy.',
    replaces: 'Google Authenticator, Authy',
  },
  'file-encryption': {
    name: 'File Encryption',
    description: 'Open-source tools to encrypt files, folders and cloud storage with strong, audited cryptography. Independent alternatives to BitLocker and proprietary archive encryption.',
    replaces: 'BitLocker, 7-Zip encryption',
  },
  'privacy-frontends': {
    name: 'Privacy Frontends',
    description: 'Lightweight, ad-free alternative front-ends that let you browse YouTube, Reddit and other platforms without tracking, accounts or JavaScript. Self-hostable proxies for the big platforms.',
    replaces: 'YouTube, Reddit, X/Twitter',
  },
  'secure-sharing': {
    name: 'Secure Sharing & Pastebins',
    description: 'Encrypted, ephemeral file-sharing and pastebin tools for sending data without handing it to a third party. Privacy-friendly alternatives to WeTransfer and Pastebin.',
    replaces: 'WeTransfer, Pastebin',
  },
  'metadata-removal': {
    name: 'Metadata Removal',
    description: 'Tools that strip hidden metadata such as EXIF location data, author names and timestamps from photos and documents before you share them. Protect yourself from accidental data leaks.',
    replaces: 'manual EXIF editing',
  },
};

// Chinese category translations
export const categoryTranslationsZh: Record<string, { name: string; description: string; replaces: string }> = {
  'betriebssysteme': {
    name: '操作系统',
    description: '免费开源的操作系统，作为 Windows、macOS 等专有系统的替代品。涵盖从桌面 Linux 发行版到各类专用系统。',
    replaces: 'Windows, macOS',
  },
  'buerosoftware': {
    name: '办公软件',
    description: '用于文字处理、电子表格和演示文稿的开源办公套件。功能完整，可替代 Microsoft Office 和 Google Docs。',
    replaces: 'Microsoft Office, Google Docs',
  },
  'browser': {
    name: '浏览器',
    description: '注重隐私的开源网页浏览器，尊重你的隐私。无追踪，是 Chrome 和 Edge 的强大替代品。',
    replaces: 'Chrome, Edge',
  },
  'email-clients': {
    name: '邮件客户端',
    description: '适用于桌面和移动设备的免费邮件程序。安全且功能丰富，可替代 Outlook 和 Apple Mail。',
    replaces: 'Outlook, Apple Mail',
  },
  'email-server': {
    name: '邮件服务器与服务',
    description: '可自托管的邮件服务器与注重隐私的邮件服务。独立自主，可替代 Gmail 服务器和 Microsoft Exchange。',
    replaces: 'Gmail Server, Exchange',
  },
  'cloud-speicher': {
    name: '云存储与同步',
    description: '自托管的云存储与同步方案。完全掌控你的数据，而非依赖 Google Drive、Dropbox 或 OneDrive。',
    replaces: 'Google Drive, Dropbox, OneDrive',
  },
  'passwort-manager': {
    name: '密码管理器',
    description: '安全的开源密码管理器，用于存储和管理你的凭据。值得信赖，可替代 LastPass 和 1Password。',
    replaces: 'LastPass, 1Password',
  },
  'kommunikation': {
    name: '通讯与聊天',
    description: '加密且注重隐私的即时通讯与聊天平台。安全可靠，可替代 WhatsApp、Slack 和 Microsoft Teams。',
    replaces: 'WhatsApp, Slack, Teams',
  },
  'videokonferenzen': {
    name: '视频会议',
    description: '用于会议和网络研讨会的开源视频会议方案。注重隐私，可替代 Zoom、Google Meet 和 Teams。',
    replaces: 'Zoom, Google Meet, Teams',
  },
  'kalender': {
    name: '日历与联系人',
    description: '基于 CalDAV、CardDAV 等开放标准的免费日历与联系人管理。独立自主，可替代 Google Calendar 和 iCloud。',
    replaces: 'Google Calendar, iCloud',
  },
  'suchmaschinen': {
    name: '搜索引擎',
    description: '注重隐私、不追踪你查询记录的搜索引擎。独立自主，可替代 Google 和 Bing。',
    replaces: 'Google, Bing',
  },
  'social-media': {
    name: '社交媒体',
    description: '去中心化的免费社交网络，覆盖 Fediverse 及更多平台。无广告，可替代 Twitter/X、Instagram、Facebook、YouTube 和 Reddit。',
    replaces: 'Twitter/X, Instagram, Facebook, YouTube, Reddit',
  },
  'code-hosting': {
    name: '代码托管与 Git',
    description: '可自托管的 Git 平台，用于源代码管理与协作。功能强大，可替代 GitHub、Bitbucket 和 Azure DevOps。',
    replaces: 'GitHub, Bitbucket, Azure DevOps',
  },
  'ci-cd': {
    name: 'CI/CD 流水线',
    description: '用于持续集成与持续部署的开源方案。自动化构建与部署流水线，可替代 GitHub Actions、Jenkins 和 CircleCI。',
    replaces: 'GitHub Actions, Jenkins, CircleCI',
  },
  'container': {
    name: '容器与编排',
    description: '面向现代应用部署的免费容器运行时与编排工具。开放替代 Docker Hub 和 Kubernetes EKS。',
    replaces: 'Docker Hub, Kubernetes EKS',
  },
  'datenbanken': {
    name: '数据库',
    description: '强大的开源数据库系统，适用于关系型和 NoSQL 场景。久经考验，可替代 Oracle 和 Microsoft SQL Server。',
    replaces: 'Oracle, MSSQL',
  },
  'cms': {
    name: 'CMS 与建站工具',
    description: '满足各类需求的开源内容管理系统与建站工具。灵活多样，可替代 WordPress.com、Squarespace 和 Wix。',
    replaces: 'WordPress.com, Squarespace, Wix',
  },
  'e-commerce': {
    name: '电子商务',
    description: '可自托管的免费在线商店系统与电商平台。功能强大，可替代 Shopify 和 Magento Commerce。',
    replaces: 'Shopify, Magento Commerce',
  },
  'analytics': {
    name: '网站分析',
    description: '无 Cookie、无追踪、符合隐私规范的网站分析工具。友好合规，可替代 Google Analytics 和 Mixpanel。',
    replaces: 'Google Analytics, Mixpanel',
  },
  'monitoring': {
    name: '监控与可观测性',
    description: '面向基础设施与应用的开源监控与可观测性平台。全面完善，可替代 Datadog、New Relic 和 PagerDuty。',
    replaces: 'Datadog, New Relic, PagerDuty',
  },
  'vpn': {
    name: 'VPN 方案',
    description: '用于安全加密网络连接的免费 VPN 方案。透明可信，可替代 NordVPN 和 ExpressVPN。',
    replaces: 'NordVPN, ExpressVPN',
  },
  'firewall': {
    name: '防火墙与网络安全',
    description: '面向企业与个人的开源防火墙与网络安全方案。功能强大，可替代 Cisco 等专有方案。',
    replaces: 'Cisco, proprietary',
  },
  'ki-ml': {
    name: 'AI 与机器学习',
    description: '面向文本、图像等的开放 AI 模型与机器学习框架。透明开放，可替代 ChatGPT API、Midjourney 和 DALL-E。',
    replaces: 'ChatGPT API, Midjourney, DALL-E',
  },
  'notizen': {
    name: '笔记与知识管理',
    description: '面向个人与团队的免费笔记与知识管理应用。注重隐私，可替代 Notion、Evernote 和 Obsidian。',
    replaces: 'Notion, Evernote, Obsidian',
  },
  'projektmanagement': {
    name: '任务与项目管理',
    description: '支持看板、甘特图等的开源任务与项目管理工具。功能多样，可替代 Asana、Monday、Jira 和 Trello。',
    replaces: 'Asana, Monday, Jira, Trello',
  },
  'video-audio': {
    name: '视频与音频剪辑',
    description: '面向视频与音频剪辑和制作的专业开源工具。富有创意，可替代 Adobe Premiere、Final Cut 和 Audition。',
    replaces: 'Adobe Premiere, Final Cut, Audition',
  },
  'bildbearbeitung': {
    name: '图像处理与设计',
    description: '面向设计师与创作者的免费图像处理与设计工具。功能强大，可替代 Adobe Photoshop、Illustrator 和 Figma。',
    replaces: 'Adobe Photoshop, Illustrator, Figma',
  },
  'zeiterfassung': {
    name: '时间跟踪',
    description: '面向自由职业者与团队的开源时间跟踪工具。简洁透明，可替代 Harvest、Toggl 和 Clockify Pro。',
    replaces: 'Harvest, Toggl, Clockify Pro',
  },
  'erp': {
    name: 'ERP 系统',
    description: '面向企业资源规划的全面开源 ERP 系统。性价比高，可替代 SAP Business One 和 Oracle ERP。',
    replaces: 'SAP Business One, Oracle ERP',
  },
  'crm': {
    name: 'CRM 系统',
    description: '面向客户关系管理与销售的免费 CRM 系统。灵活多变，可替代 Salesforce 和 HubSpot。',
    replaces: 'Salesforce, HubSpot',
  },
  'wiki': {
    name: 'Wiki 与文档',
    description: '面向团队与组织的开源 Wiki 与文档平台。便于协作，可替代 Confluence、Notion 和 GitBook。',
    replaces: 'Confluence, Notion, GitBook',
  },
  'backup': {
    name: '备份方案',
    description: '可靠的开源备份工具，用于数据与系统备份。安全稳妥，可替代 Backblaze 和 Acronis。',
    replaces: 'Backblaze, Acronis',
  },
  'dns-adblock': {
    name: 'DNS 与广告拦截',
    description: '面向你网络的自托管 DNS 服务器与广告拦截器。注重隐私，可替代 Google DNS 和各类商业过滤方案。',
    replaces: 'Google DNS, commercial filters',
  },
  'objekt-speicher': {
    name: '对象与文件存储',
    description: '兼容 S3 的开源对象存储与分布式文件系统。可自托管，替代 Amazon S3 和 Google Cloud Storage。',
    replaces: 'Amazon S3, Google Cloud Storage',
  },
  'medienserver': {
    name: '媒体服务器',
    description: '面向你的影视与音乐收藏的免费媒体服务器。功能丰富，可替代 Plex Premium 和 Emby。',
    replaces: 'Plex Premium, Emby',
  },
  'dev-tools': {
    name: '开发工具与 IDE',
    description: '面向软件开发者的开源开发环境与编程工具。功能强大，可替代 JetBrains 套件和 Visual Studio。',
    replaces: 'JetBrains Suite, Visual Studio',
  },
  'backend-frameworks': {
    name: 'API 与后端框架',
    description: '面向现代 Web 应用的开源后端框架与 API 平台。可自托管，替代 Firebase 和 Supabase Pro。',
    replaces: 'Firebase, Supabase Pro',
  },
  'ssg': {
    name: '静态站点生成器',
    description: '面向高性能网站的快速开源静态站点生成器。对开发者友好，可替代 Webflow 和 Framer。',
    replaces: 'Webflow, Framer',
  },
  'karten': {
    name: '地图服务',
    description: '基于 OpenStreetMap 的免费地图服务与地理数据平台。独立自主，可替代 Google Maps API 和 Mapbox。',
    replaces: 'Google Maps API, Mapbox',
  },
  'fotos': {
    name: '照片管理',
    description: '面向私人照片收藏的自托管照片管理与相册方案。注重隐私，可替代 Google Photos、iCloud Photos 和 Amazon Photos。',
    replaces: 'Google Photos, iCloud Photos, Amazon Photos',
  },
  'email-aliasing': {
    name: '邮箱别名与隐藏',
    description: '生成一次性邮箱别名，隐藏真实邮箱地址，阻挡垃圾邮件和追踪。开源方案，可替代 Apple Hide My Email 和 Firefox Relay。',
    replaces: 'Hide My Email, Firefox Relay',
  },
  '2fa-authenticator': {
    name: '两步验证器',
    description: '开源的 TOTP/两步验证器应用，支持加密备份、无账号绑定。注重隐私，可替代 Google Authenticator 和 Authy。',
    replaces: 'Google Authenticator, Authy',
  },
  'file-encryption': {
    name: '文件加密',
    description: '使用经过审计的强加密算法，对文件、文件夹及云存储进行加密的开源工具。独立可控，可替代 BitLocker 及专有压缩包加密。',
    replaces: 'BitLocker, 7-Zip encryption',
  },
  'privacy-frontends': {
    name: '隐私前端',
    description: '轻量、无广告的替代前端，让你无需追踪、账号或 JavaScript 即可浏览 YouTube、Reddit 等平台。可自托管的平台代理。',
    replaces: 'YouTube, Reddit, X/Twitter',
  },
  'secure-sharing': {
    name: '安全分享与 Pastebin',
    description: '加密、阅后即焚的文件分享与 Pastebin 工具，无需把数据交给第三方。注重隐私，可替代 WeTransfer 和 Pastebin。',
    replaces: 'WeTransfer, Pastebin',
  },
  'metadata-removal': {
    name: '元数据清除',
    description: '在分享前清除照片和文档中隐藏的元数据，如 EXIF 位置信息、作者姓名和时间戳，避免意外泄露隐私。',
    replaces: 'manual EXIF editing',
  },
};
