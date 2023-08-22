import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import { Typography } from '../typography'

import cls from './input.module.scss'

import { Eye } from '@/shared/assets/icons/eye'
import { EyeClosed } from '@/shared/assets/icons/eye-closed'
import { SearchIcon } from '@/shared/assets/icons/search-icon'

export type InputPropsType = {
  label?: string
  inputTextClassName?: string
  type?: string
  error?: string
  searchInput?: boolean
  width?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputPropsType>(
  (
    {
      className,
      error,
      inputTextClassName,
      searchInput,
      value = '',
      placeholder,
      disabled,
      onChange,
      type,
      width,
      label,
      ...restProps
    },
    ref
  ) => {
    const [iconVisible, setIconVisible] = useState(type)

    const classNames = {
      input: clsx(cls.inputContainer, !!error && cls.error, className),
      label: clsx(cls.inputContainer, !!error && cls.error, className),
      inpText: clsx(cls.input, inputTextClassName),
    }
    const iconClickHandler = (e: any) => {
      e.preventDefault()
      setIconVisible(() => (iconVisible === 'password' ? 'text' : 'password'))
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      // onChangeValue?.(e.target.value)
    }

    return (
      <div className={clsx(cls.main, disabled && cls.disabled)} style={{ width }}>
        {label && (
          <div>
            <Typography className={cls.label} variant="body2">
              {label}
            </Typography>
          </div>
        )}
        <div className={classNames.input}>
          {searchInput && (
            <span
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              className={cls.icon}
            >
              <SearchIcon />
            </span>
          )}
          <input
            ref={ref}
            disabled={disabled}
            className={classNames.inpText}
            placeholder={placeholder}
            // value={value}
            type={iconVisible}
            onChange={handleChange}
            // style={error ? { color: 'var( --color-danger-300 )' } : {}}
            {...restProps}
          />
          {(type === 'password' || iconVisible === 'password') && (
            <button disabled={disabled} className={cls.fakebutton} onClick={iconClickHandler}>
              {iconVisible === 'password' ? (
                <Eye color={disabled ? 'var(--color-dark-100)' : ''} />
              ) : (
                <EyeClosed color={disabled ? 'var(--color-dark-100)' : ''} />
              )}
            </button>
          )}
        </div>
        {error && (
          <div className={cls.errorContainer}>
            <div style={{ margin: '4px 0' }}>
              <Typography style={{ color: 'var( --color-danger-300 )' }} variant="caption">
                {error}
              </Typography>
            </div>
          </div>
        )}
      </div>
    )
  }
)
