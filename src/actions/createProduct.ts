"use server"
import { addProduct } from "@/db/products";
import { productsTag } from "@/fetchers/products";
import { Product } from "@/lib/typings";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

/**
 * /!\ Next.js server actions are in alpha at the time of writing (10/2023)
 * Syntax may slightly evolve over time before they are officially released
 * 
 * If you don't want to use an action here,
 * you could instead write a Route Handler (= an API endpoint)
 * to achieve the same purpose: storing a product in the database
 * 
 * The Server Action could also call a 3rd party API
 * instead of a the database directly
 */
export async function createProductAction(formData: FormData) {
    const product: any = {
        name: formData.get("name"),
        price: formData.get("price")
    }
    console.log("Trying to create product:", product)
    // Always validate user inputs!!
    // In a real application you could use a more advanced library
    // like Zod or Joi
    if (!product.name || typeof product.name !== "string") {
        throw new Error("Expected a string for product name")
    }
    if (!product.price) {
        throw new Error("Expected a product price")
    }
    product.price = parseFloat(product.price)
    if (isNaN(product.price)) {
        throw new Error("Product price is not a number")
    }
    // since we have validated the data, we can safely cast to a Product type
    const checkedProduct = product as Product
    await addProduct(checkedProduct)


    // ----

    // This code manages revalidation of the static content

    if (process.env.USE_UNSTABLE) {
        // We could use "revalidateTag", see "resetProducts" action
        // both approaches are equivalent
        // But revalidateTag needs the "unstable_cache"
        revalidateTag(productsTag)
    } else {
        // We trigger revalidation of pages that rely on the products list,
        // we need one call per page
        revalidatePath("/")
        revalidatePath("/products")
        // ... other paths
    }


    // ---

    redirect(encodeURI(`cms?added=${checkedProduct.name}`))
}