import { sidebarLinkList } from '../model/const/sidebar-link-props'

import { SidebarLink } from './sidebar-link/sidebar-link'
import { SidebarLinkGroup } from './sidebar-link-group/sidebar-link-group'
import cls from './sidebar.module.scss'

import { getLoginRoute } from '@/shared/consts/route-paths'
import { Blank } from '@/shared/ui/blank'

export const Sidebar = () => {
  return (
    <aside className={cls.sidebar}>
      {sidebarLinkList.map((linkGroup, index) => (
        <SidebarLinkGroup linkGroup={linkGroup} key={index} />
      ))}
      <div className={cls.sidebarFooter}>
        <SidebarLink Icon={Blank} path={getLoginRoute()} text="Log in" />
      </div>
    </aside>
  )
}
