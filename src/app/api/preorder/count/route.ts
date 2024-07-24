import { countPreorders } from "@/db/preorders";
import { NextResponse } from "next/server";

// Be careful with "GET" in Route Handlers:
// It gets rendered statically as a default!
// "revalidatePath" won't work on route handlers
// (at least at time of writing with Next 13.4.9)
export const dynamic = "force-dynamic"

export async function GET(): Promise<NextResponse> {
    return NextResponse.json({
        count: await countPreorders()
    })
}
