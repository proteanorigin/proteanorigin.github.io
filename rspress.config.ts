import * as path from 'node:path';
import { pluginSass } from '@rsbuild/plugin-sass';
// import { pluginSitemap } from '@rspress/plugin-sitemap';
import { pluginGoogleAnalytics } from 'rsbuild-plugin-google-analytics';
import { defineConfig } from 'rspress/config';

const siteUrl = 'https://junyulol.github.io';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '峻宇茶画苑 (junyu.lol)',
  icon: '/junyu-photoroom.png',
  logoText: 'Junyu',
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
      title: 'Junyu',
      description: 'Static Site Generator',
    },
    {
      lang: 'zh-CN',
      label: '简体中文',
      title: '峻宇茶画苑',
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
        content: 'https://github.com/junyulol',
      },
    ],
    footer: {
      message: 'lang' === 'zh-CN' ? '© 2025 峻宇茶画苑版权所有。' : '© 2025 JUNYU ART Inc.',
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
