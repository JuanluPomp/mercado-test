
import { TProduct } from "@/types";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest): Promise<NextResponse<{products: TProduct[]} | {error: string}>>{
    try {
        const res = await fetch('https://fakestoreapi.com/products?limit=4')
        if(!res.ok){
            return NextResponse.json({error: 'Error al obtener productos'}, {status: 404})
        }
        const products = await res.json()
        return NextResponse.json(products, {status: 200})
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'No se pudieron obtener los productos'
        return NextResponse.json({error: errorMessage}, {status: 500})
    }
}