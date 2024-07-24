import { Preorder } from "@/lib/typings"

export function validatePreorder(maybePreorder: any): Preorder {
    console.log("Trying to create preorder:", maybePreorder)
    // Always validate user inputs!!
    // In a real application you could use a more advanced library
    // like Zod or Joi
    if (!maybePreorder.email || typeof maybePreorder.email !== "string") {
        throw new Error("Expected a string for preorder email")
    }
    // since we have validated the data, we can safely cast to a Product type
    const preorder = maybePreorder as Preorder
    return preorder
}