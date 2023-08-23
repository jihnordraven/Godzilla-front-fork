import { sidebarLinkList } from '../model/const/sidebar-link-props'

import { SidebarLinkGroup } from './sidebar-link-group/sidebar-link-group'
import cls from './sidebar.module.scss'

import { getLoginRoute } from '@/shared/consts/route-paths'
import { ActiveLink } from '@/shared/ui/active-link'
import { Blank } from '@/shared/ui/blank'

export const Sidebar = (props: any) => {
  return (
    <aside className={cls.sidebar}>
      {sidebarLinkList.map((linkGroup, index) => (
        <SidebarLinkGroup linkGroup={linkGroup} key={index} />
      ))}
      <div className={cls.sidebarFooter}>
        <Blank />
        <ActiveLink href={getLoginRoute()}>Log in</ActiveLink>
      </div>
    </aside>
  )
}
