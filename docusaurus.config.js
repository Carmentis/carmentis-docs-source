// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Carmentis - Documentation',
  tagline: 'Fair Contract Execution Protocol',
  favicon: '/img/carmentis-logo-color.png',

  // Set the production url of your site here
  url: 'https://docs.carmentis.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'carmentis', // Usually your GitHub org/user name.
  projectName: 'carmentis-docs', // Usually your repo name.
  deploymentBranch: 'main', // The branch of your docs repo that you are publishing to GitHub pages
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
        //    'https://github.com/carmentis/carmentis-docs-source/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
   //   image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Carmentis',
        logo: {
          alt: 'Carmentis logo',
          src: 'img/carmentis-logo-color.png',
          srcDark: 'img/carmentis-logo-color.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/carmentis',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/carmentis',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/carmentis',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/carmentis',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Carmentis SAS`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'php',
          'csharp',
          'bash',
          'powershell',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-deleted-line',
            line: 'highlight-deleted-lines',
            block: {start: 'highlight-deleted-start', end: 'highlight-deleted-end'},
          },
          {
            className: 'code-block-added-line',
            line: 'highlight-added-lines',
            block: {start: 'highlight-added-start', end: 'highlight-added-end'},
          },
        ],
      },
    }),
};

export default config;
