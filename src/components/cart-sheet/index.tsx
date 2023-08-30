import Image from 'next/image'

import { X } from 'phosphor-react'

import shirt1 from '@assets/shirts/2.png'

import * as S from './styles'

export function CartSheet() {
  return (
    <S.CartContent>
      <S.CartClose>
        <X size={24} weight="bold" />
      </S.CartClose>
      <h2>Sacola de compras</h2>

      <section>
        {/* <p>Parece que seu carrinho está vazio : (</p> */}

        <S.CartProduct>
          <S.CartProductImage>
            <Image src={shirt1.src} alt="" width={100} height={93} />
          </S.CartProductImage>

          <S.CartProductDetails>
            <p>Rocketseat Ignite Lab React Native 1</p>
            <strong>R$ 129,90</strong>
            <button>Remover</button>
          </S.CartProductDetails>
        </S.CartProduct>
      </section>

      <S.CartSummary>
        <S.SummaryDetails>
          <div>
            <span>Quantidade</span>
            <p>1 item</p>
          </div>
          <div>
            <span>Valor total</span>
            <p>R$ 23,00</p>
          </div>
        </S.SummaryDetails>

        <button>Finalizar compra</button>
      </S.CartSummary>
    </S.CartContent>
  )
}
