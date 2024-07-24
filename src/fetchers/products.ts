import { countPreorders } from "@/db/preorders";
import { getProducts } from "@/db/products";
// The unstable cache has an additional "tags" system
// so we can revalidate a database call,
// that is potentially used on multiple page,
// in one call instead of revalidating each page
// https://nextjs.org/docs/app/building-your-application/caching#unstable_cache
import { unstable_cache } from 'next/cache'
import { cache } from "react";

export const productsTag = "products"
export const preordersCountTag = "preorders_count"
/**
 * "cache" guarantees that the database is called only once,
 * even if the product list is used in multiple React Server Components
 * in the same page.
 * 
 * It is slightly equivalent to using a Context client-side,
 * but this all happens server-side.
 * 
 * Pro-tip: using the "rsc" prefix makes it clear
 * that this function is cached 
 * and safe to call in React Server Components
 * 
 * Using a tag let's use call "revalidateTag"
 * (instead of calling "revalidatePath" for each page)
 */
export const rscGetProducts = !!process.env.USE_UNSTABLE
    ? unstable_cache(getProducts, [], { tags: [productsTag] })
    // NOTE: if using "cache" directly,
    // you can't use "revalidateTag("products")", only "revalidatePath"
    : cache(getProducts)

export const rscCountPreorders = !!process.env.USE_UNSTABLE
    ? unstable_cache(countPreorders, [], { tags: [preordersCountTag] })
    // NOTE: if using "cache" directly,
    // you can't use "revalidateTag("products")", only "revalidatePath"
    : cache(countPreorders)