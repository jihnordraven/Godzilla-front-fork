import cls from './header.module.scss'

import { Blank } from '@/shared/ui/blank'

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.appLogo}>Inctagram</div>
      <div className={cls.menuContainer}>
        <Blank width={24} height={24} />
        <Blank width={163} height={36} />
      </div>
    </header>
  )
}
