"use client"
import { TProduct } from '@/types'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function ProductDetail() {
    const [product, setProduct] = useState<TProduct>()
    const params = useParams()
    const id = params.id
    useEffect(() => {
            fetch(`/api/items/${id}`)
            .then(res => res.json())
            .then((data: TProduct) => {
                setProduct(data)
            })
    }, [id])
    useEffect(() => {
        console.log(product)
    }, [product])
    return (
        <div className=' flex h-[80vh] bg-white rounded-md shadow-md shadow-gray-300'>
            <section className=' flex flex-col w-2/3 m-4 space-y-4'>
                <div className=' h-2/3 w-full relative'>
                   {product?.image && 
                     <Image
                        fill
                        src={product?.image ?? ''}
                        alt='Product Image'
                        className=' object-contain'
                    />
                   }
                </div>

                <p>{product?.description}</p>
            </section>
            <aside className=' w-1/3 m-4'>
                <div className=' flex flex-col '>
                    <p>Estado - Nuevo <span>${product?.rating.count} vendidos</span></p>
                    <h1 className=' text-xl font-semibold'>{product?.title}</h1>
                    <h2 className=' text-3xl font-semibold'>$ {product?.price}</h2>
                    <label> Cantidad</label>
                    <input 
                        defaultValue={1}
                        className='  border border-slate-300 px-1 rounded-md w-1/3 py-0.5 bg-white shadow shadow-gray-300 cursor-pointer'
                        placeholder='Cantidad'
                        type="number" 
                    />
                    <button
                        className='  border border-gray-300 mt-5 text-center rounded-md max-w-full font-bold py-1.5 bg-white shadow shadow-gray-300 cursor-pointer'
                    > Agregar al carrito</button>
                    <button
                        className=' bg-sky-600 border border-gray-300 mt-2 text-center rounded-md max-w-full text-white py-1.5 font-semibold shadow shadow-gray-300 cursor-pointer'
                    > Comprar</button>
                </div>
            </aside>
        </div>
    )
}
