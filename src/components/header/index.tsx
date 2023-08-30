import { useRouter } from 'next/router'
import Image from 'next/image'

import { Cart } from '@components/cart'

import logoSvg from '@assets/logo.svg'

import * as S from './styles'
import Link from 'next/link'

export function Header() {
  const { pathname } = useRouter()

  const showCartButton = pathname !== '/success'

  return (
    <S.HeaderContainer>
      <Link href="/">
        <Image src={logoSvg} alt="" />
      </Link>

      {showCartButton && <Cart />}
    </S.HeaderContainer>
  )
}
