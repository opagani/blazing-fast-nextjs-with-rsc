import { rscGetProducts } from "@/fetchers/products"
import { Product } from "@/lib/typings"
import { Suspense } from "react"

function ProductItem({ product }: { product: Product }) {
    return (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <img
                alt="Product image"
                className="rounded-lg mb-4"
                height="150"
                src="/placeholder.svg"
                style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                }}
                width="150"
            />
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200 mb-2">{product.name}</h3>
            <p className="text-gray-700 dark:text-gray-300">${product.price}</p>
        </div>
    )
}

export function ProductList() {
    // Suspense is a feature that lets you do asynchronous calls
    // directly in React Server Components
    //
    // In previous versions of Next/React,
    // we had to use "getServerSideProps" or "getStaticProps" at page-level,
    // or load data client-side,
    // there were no server components
    return (
        <Suspense fallback={"Loading the latest products..."}>
            <ProductListAsync />
        </Suspense>
    )
}
/**
 * Pro-tip: if you want to avoid having 2 components anytime you need an async call,
 * you can check the Async component pattern there: 
 * https://buildui.com/recipes/await-component
 */
async function ProductListAsync() {
    const products = await rscGetProducts()
    console.log("Rendering the products list with ", products.length, " products")
    if (!products.length) return (
        <div className="py-8 px-4 text-center">
            <p className="text-3xl">No products yet!</p>
        </div>)
    return <div className="grid grid-cols-4 gap-4">
        {
            products.map((product, idx) => {
                return <ProductItem key={idx} product={product} />
            })
        }
    </div>

}
