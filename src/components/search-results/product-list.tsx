
import React from 'react'
import Product from './product'
import { TProduct } from '@/types'

export default async  function ProductList() {
  const baseUrl = process.env.BASE_URL_DEV
  const res = await fetch(`${baseUrl}/api/items`)
  const products = await res.json() as TProduct[]
  return (
    <div className=' container mx-auto rounded-md bg-white'>
        <ul
            className=' p-2 space-y-6 mx-4'
        >
            {products.map(product => (
                <Product
                  key={product.id}
                  product={product}
                />
            ))}
        </ul>
        
    </div>
  )
}
