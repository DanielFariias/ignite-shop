import { useRouter } from 'next/router'
import React from 'react'

export default function Product() {
  const { query } = useRouter()

  console.log(query)

  return <div>Product</div>
}
