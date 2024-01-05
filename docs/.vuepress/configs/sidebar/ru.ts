import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarRu: SidebarConfig = [
  {
    text: 'Введение',
    link: '/ru/guide/intro.md',
  },
  {
    text: 'Классы Bridge',
    collapsible: true,
    children: [
      {
        text: 'Содержание',
        link: '/ru/guide/bridge/main.md',
      },
      {
        text: 'Bridge',
        link: '/ru/guide/bridge/bridge.md',
      },
      {
        text: 'BridgeContent класс',
        link: '/ru/guide/bridge/bridgecontent.md',
      }
    ],
  },
]
/*

export const sidebarRu: SidebarConfig = {
  'bridge/': [
    {
      text: 'Bridge',
      collapsible: true,
      children: [
        'intro.md',
      ],
    },
  ],
}
*/
