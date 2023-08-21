import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import styles from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary' | 'outlined' | 'link'
  fullWidth?: boolean
  className?: string
} & ComponentPropsWithoutRef<T>
export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const { variant = 'primary', fullWidth, className, as: Component = 'button', ...rest } = props
  const classNames = clsx(styles[variant], fullWidth && styles.fullWidth, className)

  return <Component className={classNames} {...rest} />
}
