// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Actuator Docs',
  favicon: 'img/Logo Icon_color.png',

  // Set the production url of your site here
  // url: 'https://docs.actuator.finance',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/',

  // url: 'https://actuator-finance.github.io',
  // baseUrl: '/Actuator-Docs/',

  url: 'https://docs.actuator.finance',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'actuator-finance', // Usually your GitHub org/user name.
  projectName: 'Actuator-Docs', // Usually your repo name.
  // projectName: 'actuator-docs.github.io',

  trailingSlash: false,

  onBrokenLinks: 'throw',
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
          sidebarPath: './sidebars.js',
          routeBasePath: '/', 
        },
        blog: false, 
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Actuator Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Logo Icon_color.png',
        },
        items: [
          {
            href: 'https://github.com/actuator-finance/Actuator-Docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/actuatorfinance',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/actuatorfinance',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@ActuatorFinance',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/actuator-finance',
              },
              {
                label: 'Mail',
                href: 'mailto:actuatorfinance@proton.me',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Actuator Finance, LLC.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
