"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useId } from "react"

export function PreorderSection() {
  // TODO: 
  // Step 1:
  // - get the preorders from the "/api/preorder/count" endpoint
  // using SWR and client-side data fetching
  // Step 2:
  // - create a new preorder when the form is submitted,
  // using a server action 
  // Step 3:
  // - then get the preorders from the server, as props
  // - use SWR "fallback" mechanism to use the server value
  // as the initial value of SWR
  // Step 4:
  // - add polling to refetch from the API endpoint automatically
  // Step 5:
  // - call the "mutate" function when the form is submitted
  // so that SWR locally update the value
  const emailId = useId()
  const finalCount = 1
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 
      mx-auto
      px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Preorder our latest product now
          </h2>
          <p className="mx-auto max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Join the other {finalCount} customers who have already preordered.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex space-x-2" >
            <Input className="max-w-lg flex-1"
              id={emailId}
              name="email"
              placeholder="Enter your email"
              type="email" />
            <Button
              className="bg-blue-500 text-white rounded-lg" type="submit">
              Preorder Now
            </Button>
          </form>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">We will notify you when the product is available.</p>
        </div>
      </div>
    </section>
  )
}
