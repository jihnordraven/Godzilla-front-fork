import { CSSProperties, FC } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import { Typography } from '../typography'

import style from './select.module.scss'

import { ArrowDownIcon } from '@/shared/assets/icons/arrow-down'

export type Option = { label: string; value: string }

type ConditionalMultipleProps = {
  multiple?: true
  value: string
  onChange: (value: string) => void
}

type CommonProps = {
  className?: string
  disabled?: boolean
  secondary?: boolean
  name?: string
  placeholder?: string
  required?: boolean
  variant?: 'primary' | 'pagination'
  options: Array<Option>
  portal?: boolean
  errorMessage?: string
  label?: string
  width?: CSSProperties['width']
  rootClassName?: string
}
export type SelectProps = CommonProps & ConditionalMultipleProps
// need styling
export const Select: FC<SelectProps> = ({
  variant = 'primary',
  placeholder,
  value,
  disabled,
  className,
  onChange,
  secondary,
  errorMessage,
  options,
  label,
  rootClassName,
  width,
}) => {
  const showError = !!errorMessage && errorMessage.length > 0
  const classNames = {
    root: rootClassName,
    trigger: clsx(
      style.trigger,
      style[variant],
      showError && style.error,
      secondary && style.secondary,
      className
    ),
    icon: clsx(style.icon, style[variant]),
    item: clsx(style.item, style[variant]),
    content: clsx(style.content, style[variant]),
    label: clsx(style.label, disabled && style.disabled),
  }
  const withoutPlaceholder = variant === 'pagination' ? value : 'Select Box'
  const rootStyles = { width }

  return (
    <div className={classNames.root}>
      <Typography variant={'body2'} as="label" className={classNames.label}>
        {label}
      </Typography>
      <SelectRadix.Root disabled={disabled} onValueChange={onChange}>
        <SelectRadix.Trigger className={classNames.trigger} style={rootStyles}>
          <SelectRadix.Value placeholder={placeholder || withoutPlaceholder}>
            {value}
          </SelectRadix.Value>
          <SelectRadix.Icon className={classNames.icon}>
            <ArrowDownIcon size={variant === 'pagination' ? 16 : 24} />
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content className={classNames.content} position={'popper'}>
            {options.map(option => (
              <SelectRadix.Item value={option.value} className={classNames.item} key={option.value}>
                {option.label}
              </SelectRadix.Item>
            ))}
          </SelectRadix.Content>
        </SelectRadix.Portal>
        {showError && <Typography variant={'error'}>{errorMessage}</Typography>}
      </SelectRadix.Root>
    </div>
  )
}
