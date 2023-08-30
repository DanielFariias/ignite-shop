import { CartButton } from '@components/cart-button'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import * as S from './styles'

import shirt1 from '@assets/shirts/2.png'
import Image from 'next/image'

export function Cart() {
  console.log(shirt1)
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <S.CartContent>
          <S.CartClose>
            <X size={24} weight="bold" />
          </S.CartClose>
          <h2>Sacola de compras</h2>

          <S.CartProduct>
            <S.CartProductImage>
              <Image src={shirt1.src} alt="" width={100} height={93} />
            </S.CartProductImage>

            <S.CartProductDetails>
              <h3>Camiseta branca</h3>
              <strong>R$ 129,90</strong>
              <button>Remover</button>
            </S.CartProductDetails>
          </S.CartProduct>
        </S.CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
