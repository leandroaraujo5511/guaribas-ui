import { styled } from '../../styles'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$md',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '85vh',
  padding: 25,
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: '$2',
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: '$black',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '$gray500',
    borderRadius: '$md',
  },

  '&:focus': { outline: 'none' },

  variants: {
    size: {
      sm: {
        width: '$64',
      },
      md: {
        width: '$125',
      },
      lg: {
        width: '$200',
      },
      xl: {
        width: '$280',
      },
    },
  },
  '@media (max-width: 400px)': {
    width: '$64',
  },

  '@media (max-width: 600px)': {
    width: '$125',
  },
  '@media (max-width: 800px)': {
    width: '$200',
  },
})

export const ContainerTitle = styled('div', {
  margin: '-25px 0',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
})

export const ButtonClose = styled(X, {
  fontSize: '$md',
  fontWeight: '$bold',
  color: '$gray200',

  '&:hover': {
    color: '$gray400',
  },
})

export const ButtonFooter = styled('div', {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'flex-end',
})

export const ContentMain = styled('div', {})
