import { TProduct } from "@/types";

type TAction = {
    type: 'getAllProducts' | 'getCategoryProduct'
    payload?: TProduct
}

export const initialState = []

export const productReducer = (state: TProduct[] | [], action: TAction) => {
    const {type, payload} = action
    const baseUrl = process.env.BASE_URL_DEV
    switch(type){
        case 'getAllProducts': {
            const res = fetch(`${baseUrl}/api/items`)
                    .then(res => res.json())
                    .then((data: TProduct) => data)
        return res
        }
        case 'getCategoryProduct': {

        }
    }
}

