/**
 * Copy for the license overview page.
 *
 * Each card is a row of the same table — badge, name, one-line summary and the
 * permitted/required/forbidden columns — so it is modelled as data rather than
 * as 110 lines of repeated markup duplicated per language. The badge text and
 * its class are identifiers, not copy, so they are shared.
 */
export const licenseBadges = [
  { badge: 'MIT', badgeClass: 'badge-mit' },
  { badge: 'Apache-2.0', badgeClass: 'badge-apache' },
  { badge: 'GPL-3.0', badgeClass: 'badge-gpl' },
  { badge: 'AGPL-3.0', badgeClass: 'badge-agpl' },
  { badge: 'LGPL-3.0', badgeClass: 'badge-lgpl' },
  { badge: 'MPL-2.0', badgeClass: 'badge-mpl' },
  { badge: 'BSD-2/3-Clause', badgeClass: 'badge-bsd' },
] as const;

export const licenseOverviewContent = {
  en: {
    title: 'License Overview – SafeCh',
    description: 'Understand the most common open-source licenses: MIT, GPL, AGPL, Apache, MPL and more.',
    heading: '<span class="gradient-text">License Overview</span>',
    subtitle: 'Open-source licenses at a glance — what you can, must and cannot do.',
    columnLabels: ['Permitted:', 'Required:', 'Forbidden:'],
    licenses: [
      {
        name: 'MIT License',
        summary: 'The most permissive standard license. Allows almost everything as long as the copyright notice is retained.',
        columns: ['Commercial use, modification, distribution, private use', 'Include license and copyright notice', 'Author liability'],
      },
      {
        name: 'Apache License 2.0',
        summary: 'Similar to MIT but with explicit patent grant. Ideal for businesses.',
        columns: ['Commercial use, modification, distribution, patent use', 'Include license, document changes', 'Trademark use, liability'],
      },
      {
        name: 'GNU General Public License v3',
        summary: 'Copyleft license: derived works must also be published under GPL. Protects software freedom.',
        columns: ['Commercial use, modification, distribution', 'Publish source code, use same license', 'Liability, proprietary sublicensing'],
      },
      {
        name: 'GNU Affero General Public License v3',
        summary: 'Like GPL, but also for server software: if you offer the software over a network, you must provide the source code.',
        columns: ['Commercial use, modification, distribution', 'Provide source code (even for network use)', 'Liability, proprietary sublicensing'],
      },
      {
        name: 'GNU Lesser General Public License v3',
        summary: 'Weaker copyleft: the library stays free, but programs using it may be proprietary.',
        columns: ['Commercial use, linking with proprietary code', 'Publish changes to the library', 'Liability'],
      },
      {
        name: 'Mozilla Public License 2.0',
        summary: 'File-level copyleft: modified files must stay under MPL, new files can be proprietary.',
        columns: ['Commercial use, modification, mixing with proprietary code', 'Disclose modified MPL files', 'Liability, trademark use'],
      },
      {
        name: 'BSD License',
        summary: 'Very permissive, similar to MIT. The 3-Clause variant additionally prohibits using the project name for advertising.',
        columns: ['Commercial use, modification, distribution', 'Include copyright notice', 'Liability'],
      },
    ],
  },
  zh: {
    title: '许可证概览 – SafeCh',
    description: '了解最常见的开源许可证：MIT、GPL、AGPL、Apache、MPL 等。',
    heading: '<span class="gradient-text">许可证概览</span>',
    subtitle: '开源许可证一览 —— 你可以做什么、必须做什么以及不能做什么。',
    columnLabels: ['允许：', '要求：', '禁止：'],
    licenses: [
      {
        name: 'MIT 许可证',
        summary: '最宽松的标准许可证。只要保留版权声明，几乎允许一切行为。',
        columns: ['商业使用、修改、分发、私人使用', '附带许可证和版权声明', '追究作者责任'],
      },
      {
        name: 'Apache 许可证 2.0',
        summary: '与 MIT 类似，但附带明确的专利授权。非常适合企业使用。',
        columns: ['商业使用、修改、分发、专利使用', '附带许可证、记录变更', '使用商标、追究责任'],
      },
      {
        name: 'GNU 通用公共许可证 v3',
        summary: 'Copyleft 许可证：衍生作品也必须以 GPL 发布。旨在保护软件自由。',
        columns: ['商业使用、修改、分发', '公开源代码、使用相同许可证', '追究责任、专有再许可'],
      },
      {
        name: 'GNU Affero 通用公共许可证 v3',
        summary: '与 GPL 类似，但同样适用于服务器软件：如果你通过网络提供该软件，则必须提供源代码。',
        columns: ['商业使用、修改、分发', '提供源代码（即使是网络使用）', '追究责任、专有再许可'],
      },
      {
        name: 'GNU 宽通用公共许可证 v3',
        summary: '较弱的 Copyleft：库本身保持自由，但使用它的程序可以是专有的。',
        columns: ['商业使用、与专有代码链接', '公开对库的修改', '追究责任'],
      },
      {
        name: 'Mozilla 公共许可证 2.0',
        summary: '文件级 Copyleft：修改过的文件必须保持 MPL，新文件可以是专有的。',
        columns: ['商业使用、修改、与专有代码混合', '公开修改过的 MPL 文件', '追究责任、使用商标'],
      },
      {
        name: 'BSD 许可证',
        summary: '非常宽松，与 MIT 类似。3-Clause 变体额外禁止使用项目名称进行宣传。',
        columns: ['商业使用、修改、分发', '附带版权声明', '追究责任'],
      },
    ],
  },
} as const;
