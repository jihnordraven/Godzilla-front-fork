import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'

import { Typography } from '../typography'

import cls from './checkbox.module.scss'

import { Check } from '@/shared/assets/icons/check'

export type CheckboxProps = {
  className?: string
  checked?: boolean
  onValueChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
  position?: 'left'
  errorMessage?: string
}

export const CheckboxItem = ({
  checked,
  onValueChange,
  disabled,
  required,
  position,
  className,
  label,
  id,
  errorMessage,
}: CheckboxProps) => {
  const classNames = {
    container: clsx(cls.container, className),
    buttonWrapper: clsx(
      cls.buttonWrapper,
      disabled && cls.disabled,
      position === 'left' && cls.left
    ),
    root: cls.root,
    indicator: cls.indicator,
    label: clsx(cls.label, disabled && cls.disabled),
  }

  return (
    <>
      <div className={classNames.container}>
        <LabelRadix.Root asChild>
          <Typography className={cls.wrap} as={'label'} variant="body2">
            <div className={classNames.buttonWrapper}>
              <CheckboxRadix.Root
                className={classNames.root}
                checked={checked}
                onCheckedChange={onValueChange}
                disabled={disabled}
                required={required}
                id={id}
              >
                {checked && (
                  <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
                    <Check disabled={disabled ? disabled : false} />
                  </CheckboxRadix.Indicator>
                )}
              </CheckboxRadix.Root>
            </div>
            {label}
          </Typography>
        </LabelRadix.Root>
      </div>
      {errorMessage && (
        <Typography variant="body2" className={cls.errorMessage}>
          {errorMessage}
        </Typography>
      )}
    </>
  )
}
