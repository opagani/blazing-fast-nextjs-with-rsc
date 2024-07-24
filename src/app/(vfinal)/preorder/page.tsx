/**
 * In this page, we are fetching the preorders count server-side,
 * but this means user need to refresh
 * 
 * We will plug server-side data-fetching
 * to client-side data fetching with SWR
*  so the data get updated without a need to refresh
 */
import { PreorderSection } from "@/components/preorder-section"
import { countPreorders } from "@/db/preorders"
import { cache } from "react"

/** 
 * We could force the page to be dynamic,
 * so that we get fresh data on reload, but:
 * - forcing dynamicness is often suboptimal
 * compared to static + on-demande revalidation
 * - client-side navigation between pages will not immediately
 * show fresh data, the client cache may prevent that
 * (@see https://github.com/vercel/next.js/discussions/54075)
 * - user still has to hit refresh to get new data
 * 
 * Client-side data fetching guarantees quasi-real-time updates
*/
// export const dynamic = "force-dynamic"

const rscCountPreorders = cache(countPreorders)

export default async function PreorderPage() {
    const preordersCount = await rscCountPreorders()
    /** 
     * Initial count is computed during each server-side render
     * The client can then relay to get a more up-to-date value
     * 
     * NOTE: it's ok to pass value 
     * from a server component to a client component
     * as long as those value are serializable
     * (they have to go through the network)
     * 
     * The reverse is however impossible
     * (client components can't import server components)
     */
    return <PreorderSection initialCount={preordersCount} />
}