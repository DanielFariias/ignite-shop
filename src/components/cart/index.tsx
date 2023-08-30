import * as Dialog from '@radix-ui/react-dialog'

import { CartButton } from '@components/cart-button'
import { CartSheet } from '@components/cart-sheet'

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartSheet />
      </Dialog.Portal>
    </Dialog.Root>
  )
}
