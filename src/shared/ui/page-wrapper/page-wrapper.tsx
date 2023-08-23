import clsx from 'clsx'

import cls from './page-wrapper.module.scss'

type PaddingTopType = 'small' | 'normal'

export interface PageWrapperProps {
  children: React.ReactNode
  className?: string
  paddingTop?: PaddingTopType
  hCentered?: boolean
}

export const PageWrapper: React.FC<PageWrapperProps> = props => {
  const { children, className, paddingTop = 'normal', hCentered } = props

  return (
    <div
      className={clsx(cls.pageWrapper, className, cls[paddingTop], { [cls.hCentered]: hCentered })}
    >
      {children}
    </div>
  )
}
