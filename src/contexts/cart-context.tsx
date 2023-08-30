import { ReactNode, createContext, useCallback, useState } from 'react'

export interface IProduct {
  id: string
  title: string
  imageUrl: string
  price: number
  numberPrice: number
  description: string
  defaultPriceId: string
}

interface ICartContextData {
  cartItems: IProduct[]
  cartTotal: number
  addToCart: (product: IProduct) => void
  checkIfProductIsInCart: (productId: string) => boolean
  removeCartItem: (productId: string) => void
}

interface ICartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as ICartContextData)

export function CartContextProvider({ children }: ICartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([])

  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice
  }, 0)

  function addToCart(product: IProduct) {
    setCartItems((prevState) => [...prevState, product])
  }

  const checkIfProductIsInCart = useCallback(
    (productId: string) => {
      return cartItems.some((item) => item.id === productId)
    },
    [cartItems],
  )

  function removeCartItem(productId: string) {
    setCartItems((state) => state.filter((item) => item.id !== productId))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        addToCart,
        checkIfProductIsInCart,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
