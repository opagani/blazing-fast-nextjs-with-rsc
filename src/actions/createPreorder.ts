"use server"
import { addPreorder } from "@/db/preorders";
import { Preorder } from "@/lib/typings";
import { validatePreorder } from "@/validation/preorder";
import { revalidatePath } from "next/cache";

/**
 * /!\ Next.js server actions are in alpha at the time of writing (10/2023)
 * Syntax may slightly evolve over time before they are officially released
 * 
 * If you don't want to use an action here,
 * you could instead write a Route Handler (= an API endpoint)
 * to achieve the same purpose: storing a product in the database
 */
export async function createPreorderAction(formData: FormData) {
    const maybePreorder: any = {
        email: formData.get("email"),
    }
    const preorder = validatePreorder(maybePreorder)
    await addPreorder(preorder)

    // We trigger revalidation of pages that rely on the products list,
    // we need one call per page
    revalidatePath("/")
    revalidatePath("/preorder")
    // We could also use "revalidateTag", see "resetProducts" action
    // both approaches are equivalent

    // NOTE: Next.js will magically cleanup the client-side cache (Router cache) too
    // If JavaScript is disabled, it will just reload the whole page
    // if JavaScript is enabled, it is more fine-grained and updates only the relevant data
}