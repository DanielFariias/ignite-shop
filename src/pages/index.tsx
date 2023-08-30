import { MouseEvent, useContext } from 'react'

import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import Stripe from 'stripe'
import useEmblaCarousel from 'embla-carousel-react'

import { stripe } from '@lib/stripe'

import { CartButton } from '@components/cart-button'

import { CartContext, IProduct } from '@contexts/cart-context'

import { currencyFormatter } from '@utils/formatter'

import * as S from '@styles/pages/home'

interface IHomeProps {
  products: IProduct[]
}

export default function Home({ products }: IHomeProps) {
  const { addToCart, checkIfProductIsInCart } = useContext(CartContext)

  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  })

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct,
  ) {
    e.preventDefault()
    addToCart(product)
  }

  console.log('oi')

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
                        <div>
                          <strong>{product.title}</strong>
                          <span>{product.price}</span>
                        </div>

                        <CartButton
                          color="green"
                          size="large"
                          disabled={checkIfProductIsInCart(product.id)}
                          onClick={(e) => handleAddToCart(e, product)}
                        />
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
      numberPrice: priceAmount / 100,
      description: product.description,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
