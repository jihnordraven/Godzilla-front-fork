import { SidebarItemType } from '../../model/types/sidebar-link'
import { SidebarLink } from '../sidebar-link/sidebar-link'

import cls from './sidebar-link-group.module.scss'

interface SidebarLinkGroupProps {
  linkGroup: SidebarItemType[]
}

export const SidebarLinkGroup: React.FC<SidebarLinkGroupProps> = props => {
  const { linkGroup } = props

  return (
    <div className={cls.sidebarLinkGroup}>
      {linkGroup.map(link => (
        <SidebarLink key={link.text} {...link} />
      ))}
    </div>
  )
}
