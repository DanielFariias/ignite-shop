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

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  variants: {
    color: {
      gray: {
        backgroundColor: '$gray800',
        color: '$gray500',

        '&:not(:disabled):hover': {
          backgroundColor: '$gray700',
        },
      },
      green: {
        backgroundColor: '$green500',
        color: '$white',

        '&:not(:disabled):hover': {
          backgroundColor: '$green300',
        },
      },
    },

    size: {
      medium: {
        width: '3rem',
        height: '3rem',

        svg: {
          fontSize: 24,
        },
      },
      large: {
        width: '3.5rem',
        height: '3.5rem',

        svg: {
          fontSize: 30,
        },
      },
    },
  },

  defaultVariants: {
    color: 'gray',
    size: 'medium',
  },
})
