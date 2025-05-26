import ProductList from '@/components/search-results/product-list'
import React from 'react'

export default function Items() {
    return (

        <div className=" container mx-auto flex justify-center">
            <div className=" flex flex-col space-y-2 w-3/4">
                <span>Catrgorias y rutas</span>
                <ProductList />
            </div>
        </div>

    )
}
