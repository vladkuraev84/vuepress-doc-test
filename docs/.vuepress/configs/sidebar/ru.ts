import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarRu: SidebarConfig = [
  {
    text: 'Введение',
    link: '/ru/main.md',
  },
  {
    text: 'Классы Bridge',
    collapsible: true,
    children: [
      {
        text: 'Содержание',
        link: '/ru/bridge/main.md',
      },
      {
        text: 'Bridge',
        link: '/ru/bridge/bridge.md',
      },
      {
        text: 'BridgeContent класс',
        link: '/ru/bridge/bridgecontent.md',
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
        'main.md',
      ],
    },
  ],
}
*/
