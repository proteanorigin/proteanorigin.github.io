import * as path from 'node:path';
import { pluginSass } from '@rsbuild/plugin-sass';
// import { pluginSitemap } from '@rspress/plugin-sitemap';
import { pluginGoogleAnalytics } from 'rsbuild-plugin-google-analytics';
import { defineConfig } from 'rspress/config';

const siteUrl = 'https://proteanorigin.github.io';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '易象元 (protean origin)',
  icon: '/junyu-photoroom.png',
  logoText: 'Junyu Tea',
  logo: {
    light: '/junyu-photoroom.png',
    dark: '/junyu-photoroom.png',
  },
  lang: 'en-US',
  locales: [
    {
      lang: 'en-US',
      // 导航栏切换语言的标签
      label: 'English',
      title: 'Protean Origin',
      description: 'Static Site Generator',
    },
    {
      lang: 'zh-CN',
      label: '简体中文',
      title: '易象元',
      description: '静态网站生成器',
    },
  ],
  themeConfig: {
    // locales: [
    //   {
    //     lang: 'en',
    //     outlineTitle: 'ON THIS Page',
    //   },
    //   {
    //     lang: 'zh',
    //     outlineTitle: '大纲',
    //   },
    // ],
    socialLinks: [
      {
        icon: 'x',
        mode: 'link',
        content: 'https://x.com/gowiden',
      },
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/proteanorigin',
      },
    ],
    footer: {
      message: 'lang' === 'zh-CN' ? '© 2025 易象元 版权所有。' : '© 2025 PROTEAN ORIGIN Inc.',
    },
  },
  plugins: [
    // pluginSitemap({
    //   siteUrl,
    // }),
  ],
  builderConfig: {
    plugins: [
      pluginSass(),
      pluginGoogleAnalytics({ id: 'G-VZZF6670CZ' }),
    ],
  },
});
