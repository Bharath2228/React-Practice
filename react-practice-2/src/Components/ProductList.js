import { useState} from "react"
import { useFetch } from "../hooks/useFetch"

export const ProductList = () => {

    const [url, setUrl] = useState("http://localhost:8000/products")
    const { data: products, loading, error } = useFetch(url)

    // const fetchProducts = useCallback( async () => {
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     setProducts(data)
    // }, [url])

    // useEffect(() => {
    //     fetchProducts();
    // }, [fetchProducts]) 
    

  return (
    <section>
        <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
        <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock</button>

        {loading && <p>Loading....</p>}

        {error && <p>{error}</p>}

        {products && products.map((product) => (
            <div className="card" key={product.id}>
                <p>{product.name}</p>
                <p>
                    <span>${product.price}</span>
                    <span>{product.in_stock ? "In Stock" : "Unavailable"}</span>
                </p>
            </div>
        ))}
    </section>
  )
}
