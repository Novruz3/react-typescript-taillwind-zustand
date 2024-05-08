import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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

export const Main = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<Product[] | null>(null)

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            try {
                const response = await axios.get<Product[]>("https://fakestoreapi.com/products")
                setData(response.data)
            } catch (err) {
                console.error(err)
            }
            setLoading(false)
        }
        getProduct()
    }, [])

    return (
        <div>
            <p className="text-5xl font-bold flex justify-center">The lastest products</p>
            {loading ? <p>Loading...</p> :
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {
                                data?.map((product) => {
                                    return (
                                        <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full border">
                                            <Link to={`/product/${product.id}`} className="block relative h-48 rounded overflow-hidden">
                                                <img alt={product.title} className="cursor-pointer object-center object-contain w-full h-full block" src={product.image} />
                                            </Link>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                                                <Link to={`/product/${product.id}`} className="cursor-pointer text-gray-900 title-font text-lg font-medium">{product.title}</Link>
                                                <p className="mt-1">${product.price}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}
