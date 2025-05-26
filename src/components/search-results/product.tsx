"use client"
import { TProduct } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Product({product}: {product: TProduct}) {
  const router = useRouter()
  const handleClickProduct = () => {
    router.push(`/items/${product.id}`)
  }
  return (
    <li 
        onClick={handleClickProduct}
        className=' flex justify-between w-full hover:bg-gray-100 rounded-md p-2 cursor-pointer'
    >
        <div className=' w-1/6 relative'>
            <Image
            height={100} width={100}
            src={product.image}
            alt='Product Image'
            className=' object-contain'
        />
        </div>
        <div className=' flex flex-col justify-start w-3/6'>
            <p className=' font-bold tex-lg'>${product.price}</p>
            <p>{product.title}</p>
        </div>
        <div>
          <p className=' flex justify-start'>{product.rating.count} Vendidos</p>
        <span className=' font-semibold ml-2'>{product.rating.rate}/5</span>
        </div>
    </li>
  )
}
