import { cookies } from 'next/headers'
import { Suspense } from 'react'

async function getUserFromToken(token: string | undefined) {
    // this is just a fake function
    // in a real app, it should get the current user
    return { name: "John Doe" }
}

export function UserInfo() {
    return (
        <Suspense fallback={"Loading user..."}>
            <UserInfoAsync />
        </Suspense>
    )
}

async function UserInfoAsync() {
    console.log("Rendering UserInfo")
    // We need cookies to detect who is the current user
    // Sadly, before Next 14, it would turn the whole page to dynamic rendering
    // We could use client-side rendering instead, but then we need an API route etc.
    // Now thanks to Partial Rendering we can have dynamic components
    // within static pages
    // That's perfect for small user-specific components
    const token = cookies().get("token")?.value
    const user = await getUserFromToken(token)
    return <span>{user.name}</span>
}