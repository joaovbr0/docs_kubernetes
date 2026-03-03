// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kubernetes Production',
  tagline: 'Guia completo de implementação Kubernetes para ambiente de produção',
  favicon: 'img/favicon.ico',

  url: 'https://joaovbr0.github.io',
  baseUrl: '/docs_kubernetes/',

  organizationName: 'joaovbr0',
  projectName: 'docs_kubernetes',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Kubernetes Production',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentação',
          },
          {
            href: 'https://kubernetes.io/docs',
            label: 'Kubernetes Docs',
            position: 'right',
          },
          {
            href: 'https://github.com/joaovbr0/docs_kubernetes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              { label: 'Introdução', to: '/' },
              { label: 'Docker', to: '/docker/build' },
              { label: 'Kubernetes', to: '/kubernetes/namespace' },
            ],
          },
          {
            title: 'Links Úteis',
            items: [
              { label: 'kubernetes.io', href: 'https://kubernetes.io/docs' },
              { label: 'GitHub', href: 'https://github.com/joaovbr0/docs_kubernetes' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kubernetes Production Docs. Feito com Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'yaml', 'docker'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
