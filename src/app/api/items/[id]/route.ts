import { TProduct } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}: {params: Promise<{id: string}>})
: Promise<NextResponse<{product: TProduct} | {error: string}>> {
    try {
        const {id} = await params
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        if(!res.ok){
            return NextResponse.json({error: 'Error al obtener producto'}, {status: 404})
        }
        const product = await res.json()
        return NextResponse.json(product, {status: 200})
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : ''
        return NextResponse.json({error: errorMessage}, {status: 500})
    }
}