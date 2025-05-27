import { TProduct } from "@/types";

type TAction = {
    type: 'getAllProducts' | 'getProduct'
    payload?: TProduct | string
}

export const initialState: TProduct[] = []

export const productReducer = (state: TProduct[], action: TAction) => {
    const {type, payload} = action
    switch(type){
        case 'getAllProducts': {
            return [...state, payload]
        }
        case 'getProduct': {
            return state
        }
        default:
            return state
    }
}

