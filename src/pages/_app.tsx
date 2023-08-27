import type { AppProps } from 'next/app'

import { globalStyles } from '@styles/global'

import logoSvg from '@assets/logo.svg'
import * as S from '@styles/pages/app'
import Image from 'next/image'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <S.Container>
      <S.Header>
        <Image src={logoSvg} alt="" />
      </S.Header>

      <Component {...pageProps} />
    </S.Container>
  )
}
