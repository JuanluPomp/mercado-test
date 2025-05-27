
"use client"
import React, { useEffect, useState } from 'react'
import Product from './product'
import { TProduct } from '@/types'
import { useSearchParams } from 'next/navigation'

export default  function ProductList() {
  const [products, setProducts] = useState<TProduct[]>([])

  const params = useSearchParams()
  const search = params.get('search')
  useEffect(() => {
    if(search){
      console.log(search)
      const url = `/api/items?search=${search}`
      const resProducts = fetch(url)
          .then(res => res.json())
          .then((data: {products: TProduct[]}) => {
            setProducts(data.products)
          })
      console.log(resProducts)
    }
  }, [search])
  return (
    <div className=' container mx-auto rounded-md bg-white'>
        <ul
            className=' p-2 space-y-6 mx-4'
        >
            {products && products.map(product => (
                <Product
                  key={product.id}
                  product={product}
                />
            ))}
        </ul>
        
    </div>
  )
}
