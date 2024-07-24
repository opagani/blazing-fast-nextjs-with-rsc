"use client"

import { Product } from "@/lib/typings";
import { useEffect, useState } from "react"

/**
 * This a sample code from React documentation
 * 
 * But you should probably instead:
 * - use a library (as recommended in React docs)
 * - try to use a React Server Component
 * to avoid the need for client-side data fetching
 * which leads to cascading calls
 * @see https://react.dev/learn/you-might-not-need-an-effect
 */
function useData<T = any>(url: string): T | null {
    const [data, setData] = useState(null);
    useEffect(() => {
        let ignore = false;
        fetch(url)
            .then(response => response.json())
            .then(json => {
                if (!ignore) {
                    setData(json);
                }
            });
        return () => {
            ignore = true;
        };
    }, [url]);
    return data;
}

/**
 * This is a fake component
 * showing how you would fetch data client-side
 * instead of within an RSC
 * @returns
 */
export function ProductListClient() {
    const products = useData<Array<Product>>("/api/products")
    if (!products) return <div>Loading products...</div>
    if (!products.length) return (
        <div className="py-8 px-4 text-center">
            <p className="text-3xl">No products yet!</p>
        </div>)
    console.log("Rendering the products list with ", products.length, " products")
    return <div className="grid grid-cols-4 gap-4">
        {
            products.map((product, idx) => {
                return <li key={product.name}>{product.name}</li>
            })
        }
    </div>

}