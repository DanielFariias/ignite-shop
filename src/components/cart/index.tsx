import * as Dialog from '@radix-ui/react-dialog'

import { CartButton } from '@components/cart-button'
import { CartSheet } from '@components/cart-sheet'
import { useContext } from 'react'
import { CartContext } from '@contexts/cart-context'

export function Cart() {
  const { cartItems } = useContext(CartContext)
  const cartQuantity = cartItems.length
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton quantity={cartQuantity} />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartSheet />
      </Dialog.Portal>
    </Dialog.Root>
  )
}
