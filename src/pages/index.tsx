import * as S from '@styles/pages/home'
import Image from 'next/image'

import shirt1 from '@assets/shirts/1.png'

export default function Home() {
  return (
    <S.HomeContainer>
      <S.Product>
        <Image src={shirt1} alt="" width={520} height={480}></Image>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>

      <S.Product>
        <Image src={shirt1} alt="" width={520} height={480}></Image>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
    </S.HomeContainer>
  )
}
