import { resetProducts } from "@/db/products"
import { revalidatePath, revalidateTag } from "next/cache"
import { productsTag } from "@/fetchers/products"

export async function resetProductsAction() {
    "use server"
    await resetProducts()
    if (process.env.USE_UNSTABLE) {
        revalidateTag(productsTag)
        // We could also call "revalidatePath"
        // for each page we want to update
        // Both approaches are equivalent
    } else {
        // If you don't want to use the "unstable_cache"
        // you have to use "revalidatePath"
        // because (as of Next.js 13.4) normal "cache" can't have a tag
        revalidatePath("/")
        revalidatePath("/products")

    }
}