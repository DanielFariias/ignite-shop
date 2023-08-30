import type { AppProps } from 'next/app'

import { Header } from '@components/header'

import { globalStyles } from '@styles/global'

import * as S from '@styles/pages/app'
import { CartContextProvider } from '@contexts/cart-context'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <S.Container>
      <CartContextProvider>
        <Header />

        <Component {...pageProps} />
      </CartContextProvider>
    </S.Container>
  )
}
