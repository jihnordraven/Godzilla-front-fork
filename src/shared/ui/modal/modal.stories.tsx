import { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import type { Meta } from '@storybook/react'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Modal, ModalType } from '@/shared/ui/modal/modal'
import { ModalControl } from '@/shared/ui/modal/modal-control'
import { Typography } from '@/shared/ui/typography'

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Modal>

const commonArgs = {
  children: (
    <>
      <Typography variant={'body2'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Typography>
      <Input type={'text'} label={'Input'} placeholder={'Input'} />
      <Input type={'password'} label={'Input'} placeholder={'Input'} />
      <Input searchInput type={'search'} label={'Input'} placeholder={'Input'} />
    </>
  ),
  open: true,
}

export const DefaultModal = {
  render: (args: ModalType) => {
    const [open, setOpen] = useState(false)

    const handleModalClosed = () => {
      setOpen(false)
    }
    const handleModalOpened = () => {
      setOpen(true)
    }

    return (
      <>
        <Button onClick={handleModalOpened}>Open modal</Button>
        <Modal {...args} isOpen={open} onOpenChange={handleModalClosed}>
          <Typography variant={'body2'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Modal>
      </>
    )
  },
  args: {
    ...commonArgs,
    title: 'Default modal',
  },
}

export const ModalWithTwoButton = {
  render: (args: ModalType) => {
    const [open, setOpen] = useState(false)
    const handleModalClosed = () => {
      setOpen(false)
    }
    const handleModalOpened = () => {
      setOpen(true)
    }

    const onClickDataHandler = () => {
      console.log('value')
      handleModalClosed()
    }

    return (
      <>
        <Button onClick={handleModalOpened}>Open modal</Button>
        <Modal {...args} isOpen={open} onOpenChange={handleModalClosed}>
          <div>
            <Typography variant="subtitle1">
              {'Do you really want to remove'}
              <Typography style={{ fontWeight: '900' }} as="span">
                {'Ivan'}
              </Typography>
            </Typography>
            <Typography variant="subtitle1">{'All cards will be deleted.'}</Typography>
          </div>

          <ModalControl
            closedModal={handleModalClosed}
            onSubmit={onClickDataHandler}
            title={'Save'}
          />
        </Modal>
      </>
    )
  },
  args: {
    ...commonArgs,
    title: 'With One Button',
  },
}
export const ModalWithOneButton = {
  render: (args: ModalType) => {
    const [open, setOpen] = useState(false)
    const handleModalClosed = () => {
      setOpen(false)
    }
    const handleModalOpened = () => {
      setOpen(true)
    }

    const onClickDataHandler = () => {
      console.log('value')
      handleModalClosed()
    }

    return (
      <>
        <Button onClick={handleModalOpened}>Open modal</Button>
        <Modal {...args} isOpen={open} onOpenChange={handleModalClosed}>
          <div>
            <Typography variant="subtitle1">
              {'Do you really want to remove'}
              <Typography style={{ fontWeight: '900' }} as="span">
                {'Ivan'}
              </Typography>
            </Typography>
            <Typography variant="subtitle1">{'All cards will be deleted.'}</Typography>
          </div>
          <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
            <Dialog.Close asChild>
              <Button variant="primary">Save changes</Button>
            </Dialog.Close>
          </div>
        </Modal>
      </>
    )
  },
  args: {
    ...commonArgs,
    title: 'With One Button',
  },
}
