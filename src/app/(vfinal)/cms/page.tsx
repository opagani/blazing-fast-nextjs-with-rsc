/**
 * This page is restricted to our admin user,
 * we want new products to be shown in the product list to all users,
 * but those lists are static
 * => how to force them to rerender on-demand?
 */
import { ProductCreationForm } from "@/components/product-creation-form";
import { ProductsReset } from "@/components/products-reset";

export default function ProductAdmin({ searchParams }: { searchParams: any }) {
    return (
        <div className="p-16 space-y-4">
            <ProductCreationForm searchParams={searchParams} />
            <ProductsReset />
        </div>

    )
}