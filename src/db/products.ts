// A package that fails client-side
// => an extra-security that prevents leaking server code client-side
// (eventhough it's not very probably)
import "server-only"

/**
 * This is a fake database that will store product
 * in a temporary file
 */

import path from "path";
import os from "os"
import fs from "fs/promises"
import { Product } from "@/lib/typings";
import { nanoid } from "nanoid";

function productsPath() {
    return path.join(os.tmpdir(), "newline-commerce-products.json")
}

async function replaceProducts(products: Array<Product>) {
    const filepath = productsPath()
    console.log(`Resetting ${filepath} with ${products.length} products`)
    await fs.writeFile(filepath, JSON.stringify(products, null, 2))
}

export async function addProduct(product: Product) {
    const existingProducts = await getProducts()
    // add a unique id
    product.id = nanoid()
    const updatedProducts = [product, ...existingProducts]
    await replaceProducts(updatedProducts)
    return product
}

async function seedProducts(): Promise<Array<Product>> {
    const seeded = Array(4)
        .fill({ name: "A great book", price: 49.9 })
        // add unique ids
        .map(p => ({ ...p, id: nanoid() }))
    await replaceProducts(seeded)
    return seeded
}

export const resetProducts = seedProducts

/**
 * Get products
 * Will automatically seed the list the first time it's called
 * @returns 
 */
export async function getProducts(): Promise<Array<Product>> {
    const filepath = productsPath()
    const data = (await fs.readFile(filepath, { flag: "a+" })).toString()
    console.log(`Getting products from file ${filepath}`)
    try {
        const products = JSON.parse(data) as Array<Product>
        return products
    } catch (err) {
        console.warn(`Couldn't parse file at ${filepath} as JSON. 
        If you run the application for the first time it's normal.`)
        const seeded = await seedProducts()
        return seeded
    }
}
