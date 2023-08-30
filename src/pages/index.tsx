import Image from 'next/image'

import * as S from '@styles/pages/home'

import { GetStaticProps } from 'next'
import { stripe } from '@lib/stripe'
import Stripe from 'stripe'
import { currencyFormatter } from '../utils/formatter'
import Link from 'next/link'
import Head from 'next/head'
import useEmblaCarousel from 'embla-carousel-react'

interface IHomeProps {
  products: {
    id: string
    title: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: IHomeProps) {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <div style={{ overflow: 'hidden', width: '100%' }}>
        <S.HomeContainer>
          <div className="embla" ref={emblaRef}>
            <S.SliderContainer className="embla__container container">
              {products?.map((product) => {
                return (
                  <Link
                    href={`/product/${product.id}`}
                    key={product.id}
                    prefetch={false}
                  >
                    <S.Product className="embla__slide">
                      <Image
                        src={product.imageUrl}
                        alt=""
                        width={520}
                        height={480}
                      />

                      <footer>
                        <strong>{product.title}</strong>
                        <span>{product.price}</span>
                      </footer>
                    </S.Product>
                  </Link>
                )
              })}
            </S.SliderContainer>
          </div>
        </S.HomeContainer>
      </div>
    </>
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
