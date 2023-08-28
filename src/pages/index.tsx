import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import shirt1 from '@assets/shirts/1.png'

import * as S from '@styles/pages/home'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.25,
      spacing: 48,
    },
  })
  return (
    <S.HomeContainer ref={sliderRef} className="keen-slider">
      <S.Product className="keen-slider__slide">
        <Image src={shirt1} alt="" width={520} height={480}></Image>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>

      <S.Product className="keen-slider__slide">
        <Image src={shirt1} alt="" width={520} height={480}></Image>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>

      <S.Product className="keen-slider__slide">
        <Image src={shirt1} alt="" width={520} height={480}></Image>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>

      <S.Product className="keen-slider__slide">
        <Image src={shirt1} alt="" width={520} height={480}></Image>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>

      <S.Product className="keen-slider__slide">
        <Image src={shirt1} alt="" width={520} height={480}></Image>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
    </S.HomeContainer>
  )
}
