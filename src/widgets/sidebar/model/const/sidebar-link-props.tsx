import { SidebarItemType } from '../types/sidebar-link'

import {
  getCreateRoute,
  getFavoritesRoute,
  getHomeRoute,
  getMessengerRoute,
  getProfileRoute,
  getSearchRoute,
  getStatisticRoute,
} from '@/shared/consts/route-paths'
import { Blank } from '@/shared/ui/blank'

export const sidebarLinkList: SidebarItemType[][] = [
  [
    {
      path: getHomeRoute(),
      text: 'Home',
      Icon: Blank,
      authOnly: true,
    },
    {
      path: getCreateRoute(),
      text: 'Create',
      Icon: Blank,
      authOnly: true,
    },
    {
      path: getProfileRoute(),
      text: 'My Profile',
      Icon: Blank,
      authOnly: true,
    },
    {
      path: getMessengerRoute(),
      text: 'Messenger',
      Icon: Blank,
      authOnly: true,
    },
    {
      path: getSearchRoute(),
      text: 'Search',
      Icon: Blank,
      authOnly: true,
    },
  ],
  [
    {
      path: getFavoritesRoute(),
      text: 'Favorites',
      Icon: Blank,
      authOnly: true,
    },
    {
      path: getStatisticRoute(),
      text: 'Statistic',
      Icon: Blank,
      authOnly: true,
    },
  ],
]
