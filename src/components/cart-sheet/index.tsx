import Image from 'next/image'

import { X } from 'phosphor-react'

import * as S from './styles'
import { useContext, useState } from 'react'
import { CartContext } from '@contexts/cart-context'
import axios from 'axios'

export function CartSheet() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const { cartItems, removeCartItem, cartTotal } = useContext(CartContext)

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: cartItems,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  const cartQuantity = cartItems.length

  const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotal)

  return (
    <S.CartContent>
      <S.CartClose>
        <X size={24} weight="bold" />
      </S.CartClose>
      <h2>Sacola de compras</h2>

      <section>
        {cartQuantity <= 0 && <p>Parece que seu carrinho está vazio : (</p>}

        {cartItems.map((product) => {
          return (
            <S.CartProduct key={product.id}>
              <S.CartProductImage>
                <Image src={product.imageUrl} alt="" width={100} height={93} />
              </S.CartProductImage>

              <S.CartProductDetails>
                <p>{product.title}</p>
                <strong>{product.price}</strong>
                <button onClick={() => removeCartItem(product.id)}>
                  Remover
                </button>
              </S.CartProductDetails>
            </S.CartProduct>
          )
        })}
      </section>

      <S.CartSummary>
        <S.SummaryDetails>
          <div>
            <span>Quantidade</span>
            <p>
              {cartQuantity} {cartQuantity === 1 ? 'item' : 'itens'}
            </p>
          </div>
          <div>
            <span>Valor total</span>
            <p>{formattedCartTotal}</p>
          </div>
        </S.SummaryDetails>

        <button
          onClick={handleCheckout}
          disabled={isCreatingCheckoutSession || cartQuantity <= 0}
        >
          Finalizar compra
        </button>
      </S.CartSummary>
    </S.CartContent>
  )
}
