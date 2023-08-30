import { styled } from '@styles/index'

export const CartButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 6,
  position: 'relative',
  cursor: 'pointer',

  transition: 'all 0.2s ease-in-out',

  marginLeft: 'auto',

  width: '3rem',
  height: '3rem',

  backgroundColor: '$gray800',
  color: '$gray500',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$gray700',
  },
})
