import { create } from "zustand"

interface Product {
    title: string
    category: string
    description: string
    image: string
    id: number
    price: number
    rating: {
        rate: number
        count: number
    }
}

interface ProductState {
    products: Product[] 
    addProduct : (product : Product) => void
    removeProduct : (product : Product) => void
}

const useProducts = create<ProductState>((set) => ({
    products: [],
    addProduct : (product) => set((state)=>({products : [...state.products, product]})),
    removeProduct : (product) => set((state)=>({products : state.products.filter((pro)=> pro.id !== product.id)}))
}))

export default useProducts