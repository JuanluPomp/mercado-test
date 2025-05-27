
export type TProduct = {
    category: string,
    description: string,
    id: number,
    image: string
    price: number
    rating: { rate: string, count: number }
    title: string
}

export interface CategoryProducts {
    id:       number;
    userId:   number;
    date:     Date;
    products: CategoryProduct[];
    __v:      number;
}

export interface CategoryProduct {
    productId: number;
    quantity:  number;
}
