import * as Dialog from '@radix-ui/react-dialog'
import React, {
  ComponentProps,
  Dispatch,
  RefAttributes,
  SetStateAction,
} from 'react'
import { Button } from '../Button'
import { Text } from '../Text'
import {
  DialogContent,
  ContainerTitle,
  ButtonClose,
  ButtonFooter,
  ContentMain,
} from './styles'

export interface ModalProps
  extends ComponentProps<typeof DialogContent & RefAttributes<HTMLDivElement>> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  title?: string
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  children?: React.ReactNode
  action?: boolean
  onButtonOk: (...args: any[]) => any
  onButtonCancel: (...args: any[]) => any
}

export function Modal({
  title,
  open,
  setOpen,
  children,
  size = 'md',
  action,
  onButtonCancel,
  onButtonOk,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <DialogContent size={size}>
          {!!title && (
            <Dialog.Title>
              <ContainerTitle>
                <Text as={'h2'} size="xl">
                  {title}
                </Text>
                <Dialog.Close asChild>
                  <ButtonClose />
                </Dialog.Close>
              </ContainerTitle>
            </Dialog.Title>
          )}
          <ContentMain>{children}</ContentMain>
          {action && (
            <ButtonFooter>
              <Button
                variant={'tertiary'}
                size="sm"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button size="sm" onClick={() => onButtonOk}>
                OK
              </Button>
            </ButtonFooter>
          )}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

Modal.displayName = 'Modal'
