import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import * as S from '@styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { GetStaticProps } from 'next'
import { stripe } from '@lib/stripe'
import Stripe from 'stripe'
import { currencyFormatter } from '../utils/formatter'
import Link from 'next/link'

interface IHomeProps {
  products: {
    id: string
    title: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: IHomeProps) {
  console.log(products)
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.25,
      spacing: 48,
    },
  })
  return (
    <S.HomeContainer ref={sliderRef} className="keen-slider">
      {products?.map((product) => {
        console.log(product)
        return (
          <Link href={`/product/${product.id}`} key={product.id}>
            <S.Product className="keen-slider__slide">
              <Image src={product.imageUrl} alt="" width={520} height={480} />

              <footer>
                <strong>{product.title}</strong>
                <span>{product.price}</span>
              </footer>
            </S.Product>
          </Link>
        )
      })}
    </S.HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    const priceAmount = price.unit_amount || 0

    return {
      id: product.id,
      title: product.name,
      imageUrl: product.images[0],
      price: currencyFormatter.format(priceAmount / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
