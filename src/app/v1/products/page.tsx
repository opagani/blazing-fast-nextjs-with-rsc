/**
 * This page shows a list of products
 * it uses static rendering to get the best possible performance
 * 
 * Yet, we'd like new products to show up immediately
 * when they are added to the product catalog
 * 
 * How to achieve that?
 */

import { ProductList } from "@/components/v1/product-list";

// Frequency-based revalidation is great
// but not as good as on-demand revalidation (in most scenario)
// export const revalidate = 5*60

export default async function ProductsPage() {
    return <ProductList />
}