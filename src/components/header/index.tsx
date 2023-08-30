import Image from 'next/image'

import logoSvg from '@assets/logo.svg'

import * as S from './styles'
import { Cart } from '@components/cart'

export function Header() {
  return (
    <S.HeaderContainer>
      <Image src={logoSvg} alt="" />

      <Cart />
    </S.HeaderContainer>
  )
}
