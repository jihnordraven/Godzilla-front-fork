import { ComponentProps, FC, ReactElement, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { Typography } from '../typography'

import cls from './modal.module.scss'

import { CloseModal } from '@/shared/assets/icons/close-modal-icon'

/**
 * @typedef {Object} ModalType
 * @property {React.ReactNode} [children] - The content to be displayed within the modal.
 * @property {string} [title] - The title of the modal.
 * @property {(value: boolean) => void} [onOpenChange] - A function to handle the modal open state change.
 * @property {boolean} isOpen - Indicates whether the modal is currently open.
 * @property {() => JSX.Element} [renderActionButton] - A function returning JSX for rendering the action button.
 * @property {() => JSX.Element} [renderCancelButton] - A function returning JSX for rendering the cancel button.
 * @property {React.ComponentProps<"div">} - Additional props to be applied to the wrapping div element.
 */

/**
 * Modal component that displays a dialog overlay.
 *
 * @param {ModalType} props - The props for configuring the modal.
 * @returns {JSX.Element} The JSX element representing the modal.
 */
/**

 * How to use.
 * Place inside the children in the form tag the content of the modal with the button ModalControl or renderActionButton,
 */
export type ModalType = {
  children?: ReactNode
  title?: string
  onOpenChange?: (value: boolean) => void
  isOpen: boolean
  renderActionButton?: () => ReactElement
  // renderCancelButton?: () => ReactElement
} & ComponentProps<'div'>

export const Modal: FC<ModalType> = ({ children, title, onOpenChange, isOpen }) => {
  return (
    <Dialog.Root onOpenChange={onOpenChange} open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={cls.DialogOverlay} />
        <Dialog.Content className={cls.DialogContent}>
          <div className={cls.header}>
            <Dialog.Title>
              <Typography variant={'h2'}>{title}</Typography>
            </Dialog.Title>
            <Dialog.Close className={cls.IconButton} aria-label={'Close'}>
              <CloseModal />
            </Dialog.Close>
          </div>
          <div className={cls.content}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
