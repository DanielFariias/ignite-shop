import type { AppProps } from 'next/app'

import { Header } from '@components/header'

import { globalStyles } from '@styles/global'
import * as S from '@styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <S.Container>
      <Header />

      <Component {...pageProps} />
    </S.Container>
  )
}
