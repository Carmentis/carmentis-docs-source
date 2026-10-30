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

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    '@docusaurus/theme-live-codeblock',
    '@docusaurus/theme-mermaid',
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          operator: {
            specPath: 'openapi/prepared/operator.json',
            outputDir: 'docs/build/reference/operator-api',
            sidebarOptions: {groupPathsBy: 'tag'},
          },
          indexer: {
            specPath: 'openapi/prepared/indexer.json',
            outputDir: 'docs/build/reference/indexer-api',
            sidebarOptions: {groupPathsBy: 'tag'},
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {from: '/how-to/get-carmentis-desk', to: '/use/install-desk'},
         {from: '/how-to/interact-with-desk', to: '/build/reference/desk-json-rpc'},
          {from: '/how-to/operator', to: '/operate/operator'},
          {from: '/how-to/deploy-operator', to: '/operate/operator'},
          {from: '/how-to/deploy-node', to: '/operate/node/replicator'},
          {from: '/how-to/deploy-node/replicator', to: '/operate/node/replicator'},
          {from: '/how-to/deploy-node/validator', to: '/operate/node/validator'},
          {from: '/how-to/develop-your-application/getting-started', to: '/build/quickstart'},
          {from: '/tutorial/demo-applications/file-sign', to: '/resources/demo-applications'},
          {from: '/demo-applications', to: '/resources/demo-applications'},
        ],
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: './sidebars.ts',
          docItemComponent: '@theme/ApiItem',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

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
          href: 'https://carmentis.io',
        },
        items: [
          {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Documentation'},
          {to: 'https://assets.carmentis.io/whitepaper.pdf', label: 'Whitepaper', position: 'right'},
          {to: 'https://assets.carmentis.io/token-economy.pdf', label: 'Token Economy', position: 'right'},
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
                to: '/',
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
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
    }),
};

export default config;
