import Link from 'next/link'

import { SidebarItemType } from '../../model/types/sidebar-link'

import cls from './sidebar-link.module.scss'

export const SidebarLink: React.FC<SidebarItemType> = props => {
  const { path, text, Icon } = props

  return (
    <div className={cls.sidebarLink}>
      <Icon />
      <Link href={path}>{text}</Link>
    </div>
  )
}
