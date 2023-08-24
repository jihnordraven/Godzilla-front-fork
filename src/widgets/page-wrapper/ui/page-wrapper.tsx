import { useMemo } from 'react'

import clsx from 'clsx'

import cls from './page-wrapper.module.scss'

type PaddingTopType = 'small' | 'normal' | 'big'

export interface PageWrapperProps {
  children: React.ReactNode
  className?: string
  paddingTop?: PaddingTopType
  hCentered?: boolean
  vCentered?: boolean
}

export const PageWrapper: React.FC<PageWrapperProps> = props => {
  const { children, className, paddingTop = 'big', hCentered, vCentered } = props

  const mods: Record<string, boolean | undefined> = useMemo(
    () => ({
      [cls.vCentered]: vCentered,
      [cls.hCentered]: hCentered,
    }),
    [hCentered, vCentered]
  )

  const extraClasses: (string | undefined)[] = useMemo(
    () => [className, cls[paddingTop]],
    [className, paddingTop]
  )

  return <div className={clsx(cls.pageWrapper, extraClasses, mods)}>{children}</div>
}
