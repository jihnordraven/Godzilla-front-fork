import { SidebarItemType } from '../../model/types/sidebar-link'

import cls from './sidebar-link.module.scss'

import { ActiveLink } from '@/shared/ui/active-link'

export const SidebarLink: React.FC<SidebarItemType> = props => {
  const { path, text, Icon } = props

  return (
    <ActiveLink className={cls.sidebarLink} href={path}>
      <Icon />
      {text}
    </ActiveLink>
  )
}
