import { initialState, productReducer } from "@/reducers/useProductsReducer"
import { TProduct } from "@/types"
import React, { Children, createContext, useReducer } from "react"


interface IProductContext {
    getCategoryProduct: () => void
    getAllProducts: () => void
}

export const ProductContext = createContext<IProductContext>()

export function ProductProvider({children}: {children: React.ReactNode}){
    const [] = useReducer(productReducer, initialState)
    const getAllProducts = () => {
        
    }
    
    const getCategoryProduct = () => {

    }
    
    return (
        <ProductContext.Provider
            value={
                {
                    getCategoryProduct, 
                    getAllProducts
                }
            }
        >{children}</ProductContext.Provider>
    )
}