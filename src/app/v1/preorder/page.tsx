/**
 * In this page, we are fetching the preorders count server-side,
 * but this means user need to refresh
 * 
 * We will plug server-side data-fetching
 * to client-side data fetching with SWR
*  so the data get updated without a need to refresh
 */
import { PreorderSection } from "@/components/v1/preorder-section"

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

export default async function PreorderPage() {
    // TODO: 
    // - get the preorders count
    // - pass the count to the client component
    return <PreorderSection />
}