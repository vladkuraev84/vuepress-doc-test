import { createRequire } from 'node:module'
import process from 'node:process'
// import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from '@vuepress/cli'
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
// import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
// import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
// import { shikiPlugin } from '@vuepress/plugin-shiki'
import { defaultTheme } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils'
import {
  head,
  // navbarEn,
  // navbarRu,
  sidebarEn,
  sidebarRu,
} from './configs/index.ts'
import {searchPlugin} from "@vuepress/plugin-search";
import {registerComponentsPlugin} from "@vuepress/plugin-register-components";

const __dirname = getDirname(import.meta.url)
const require = createRequire(import.meta.url)
const isProd = process.env.NODE_ENV === 'production'
const base = <"/" | `/${string}/`>process.env["BASE"] || "/";


export default defineUserConfig({
  // set site base to default value
  /*base: '/',*/

  base,

  // extra tags in `<head>`
  head,

  // site-level locales config
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'NextForm',
      description: 'Form constructor',
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'NextForm',
      description: 'Конструктор Формы',
    },
  },

  // configure default theme
  theme: defaultTheme({
    logo: '/images/hero.png',
    // repo: 'dddocs',
    // docsDir: 'docs',

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'English',
        // navbar
        // navbar: navbarEn,
        // sidebar
        sidebar: sidebarEn,
        // page meta
        editLinkText: 'Edit this page on GitHub',
      },

      /**
       * Russian locale config
       */
      '/ru/': {
        // navbar
        // navbar: navbarRu,
        selectLanguageName: 'Русский',
        selectLanguageText: 'Русский',
        selectLanguageAriaLabel: 'Heccrbq',
        // sidebar
        sidebar: sidebarRu,
        // page meta
        editLinkText: 'Перейти на гитхаб',
        lastUpdatedText: 'Последний текст',
        contributorsText: 'Участники текста',
        // custom containers
        tip: 'Совет',
        warning: 'Внимание',
        danger: 'Опасно',
        // 404 page
        notFound: [
          '1',
          '2?',
          '3',
          '4',
        ],
        backToHome: 'Вернуться назад',
        // a11y
        openInNewWindow: 'Открыть в новом окне',
        toggleColorMode: 'Переключить цвет темы',
        toggleSidebar: 'Переключатель боковой панели',
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      // git: isProd,
      // use shiki plugin in production mode instead
      // prismjs: !isProd,
    },
  }),

  // configure markdown
  markdown: {
    importCode: {
      handleImportPath: (importPath) => {
        // handle @vuepress packages import path
        if (importPath.startsWith('@vuepress/')) {
          const packageName = importPath.match(/^(@vuepress\/[^/]*)/)![1]
          return importPath
            .replace(
              packageName,
              path.dirname(require.resolve(`${packageName}/package.json`)),
            )
            .replace('/src/', '/lib/')
            .replace(/hotKey\.ts$/, 'hotKey.d.ts')
        }
        return importPath
      },
    },
  },

  // use plugins
  plugins: [
    searchPlugin({
      // options
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    /*docsearchPlugin({
      appId: '34YFD9IUQ2',
      apiKey: '9a9058b8655746634e01071411c366b8',
      indexName: 'vuepress',
      searchParameters: {
        facetFilters: ['tags:v2'],
      },
      locales: {
        '/ru/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    }),
    googleAnalyticsPlugin({
      // we have multiple deployments, which would use different id
      id: process.env.DOCS_GA_ID ?? '',
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    // only enable shiki plugin in production mode
    isProd
      ? shikiPlugin({
          langs: ['bash', 'diff', 'json', 'md', 'ts', 'vue'],
          theme: 'dark-plus',
        })
      : [],*/
  ],
})
