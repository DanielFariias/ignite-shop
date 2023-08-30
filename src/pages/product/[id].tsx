import * as S from '@styles/pages/product'
import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '@lib/stripe'
import { currencyFormatter } from '../../utils/formatter'
import Stripe from 'stripe'
import Image from 'next/image'
import { useContext } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { CartContext, IProduct } from '@contexts/cart-context'

interface IProductProps {
  product: IProduct
}

export default function Product({ product }: IProductProps) {
  const { isFallback } = useRouter()

  const { addToCart, checkIfProductIsInCart } = useContext(CartContext)

  if (isFallback) {
    return <p>Carregando...</p>
  }

  const productIsAlreadyInCart = checkIfProductIsInCart(product.id)

  return (
    <>
      <Head>
        <title>{product.title} | Ignite Shop</title>
      </Head>

      <S.ProductContainer>
        <S.ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </S.ImageContainer>

        <S.ProductDetails>
          <h1>{product.title}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            disabled={productIsAlreadyInCart}
            onClick={() => addToCart(product)}
          >
            {productIsAlreadyInCart
              ? 'Produto já está no carrinho'
              : 'Adicionar a sacola'}
          </button>
        </S.ProductDetails>
      </S.ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.id as string

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  const priceAmount = price.unit_amount || 0

  return {
    props: {
      product: {
        id: product.id,
        title: product.name,
        imageUrl: product.images[0],
        price: currencyFormatter.format(priceAmount / 100),
        description: product.description,
        defaultPriceId: price.id,
        numberPrice: priceAmount / 100,
      },
    },
    revalidate: 60 * 60 * 24, // 1 hours
  }
}
