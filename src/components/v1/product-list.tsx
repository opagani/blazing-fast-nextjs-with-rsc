import { Product } from "@/lib/typings"

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
    // TODO: fetch products 
    // using a direct server-side call to the database
    // You'll need to cut this component into:
    // - async function ProductListAsync (gets the data)
    // - export function ProductLIst (uses a suspense to wrap ProductListAsync)
    const products: Array<Product> = []
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