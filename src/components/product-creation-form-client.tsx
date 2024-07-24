"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

/** 
 * This is a just a demonstration
 * of how the form would work without Server Actions
 * => we would need client code!
 * 
 * It's not used in the final application
 */
function ProductCreationFormClient({ searchParams }: { searchParams: { added?: string } }) {
    const [formState, setFormState] = useState(null)
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Add Product</h1>
            </div>
            <form className="space-y-4"
                onSubmit={async (evt) => {
                    // In practice you should also manage errors etc.
                    // This just a quick demo to show that
                    // without actions, we need API endpoints
                    // @ts-ignore
                    const name = evt.target.name
                    // @ts-ignore
                    const price = evt.target.price
                    // NOTE: I didn't actually create this API endpoint
                    // Server Actions are much more practical!
                    const res = await fetch("/api/product/create", {
                        method: "POST",
                        body: JSON.stringify({ name, price }),
                        headers: {
                            "content-type": "application/json",
                        }
                    })
                    setFormState(formState)
                }}
            >
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="price">Price ($)</Label>
                    <Input id="price" name="price" required type="number" />
                </div>
                <Button className="w-full" type="submit">
                    Save Changes
                </Button>
                {searchParams.added && <div className="space-y-4">
                    <p className="text-green-800">

                        Successfully added product &quot;{searchParams.added}&quot;
                    </p>
                    <p>
                        Now check the <Link href="/products" target="_blank">product list</Link>
                        {" "}and the <Link href="/" target="_blank">homepage</Link>, they should show your new product.
                    </p>
                    {process.env.NEXT_PUBLIC_NODE_ENV === "development"
                        && <>
                            <p className="font-bold">
                                You need to run the app in production with
                            </p>
                            <p className="text-center">
                                <code><pre>npm run build && npm run start</pre></code>
                            </p>
                            <p>
                                to observe the impact of revalidation.
                            </p>
                            <p>
                                In development, static pages are always rerendered when you refresh.
                            </p>
                        </>
                    }
                </div>
                }
            </form>
        </div >
    )
}