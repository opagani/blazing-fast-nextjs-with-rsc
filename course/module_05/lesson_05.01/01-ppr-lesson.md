---
title: Mix Static and Dynamic Rendering
privateVideoUrl: https://stream.mux.com/01Nc4Kd8D02WBltJiBJTIyhqwVuqEa9ojs67Q3ji7A7zY.m3u8
isPublicLesson: true
coverImageUrl: https://image.mux.com/E1SFmvge9rwtsXye4gFf43HAOAFjl1iXXzf9U0001vdlk/thumbnail.png?time=20 
---

## User specific data requires dynamic (per-request) rendering

When we use data that is specific to the current HTTP request, the page has to be dynamic. Or more precisely, it **had** to be dynamic, until Partial Prerendering (PPR) was announced.

For instance, the current user can be recognized based on an authentication token stored in the request coookies.

:::note
All we need to know about cookies for this course is that cookies are piece of data stored in the browser but sent automatically alongside every request (requests sent using client-side JavaScript or when opening a page in the browser).
:::

In this lesson we are going to create a dynamic component that relies on cookies, and display it in a static page, named `UserInfo`. It simply displays the current user name.

```tsx
// src/components/user-info.tsx
async function UserInfoAsync() {
  // cookies are only available in the request
  const token = cookies().get("token")?.value
  const user = await rscGetUser(token)
  return <span>{user.name}</span>
}
```

Notice the `rsc` prefix: it means that my `rscGetUser` function is safe to use in a RSC!
I could have included the call to `cookies()` directly in this function but left it out for illustration purpose.

This component is not a good fit for static rendering. Indeed, there is no request yet during build-time. We only know the current user when they send the request, thanks to the authentication token contained in the request cookies.


It's essential to remember that static rendering is best suited for public content, i.e., content that remains the same for all users.

Static rendering can also be useful when you have a group of users sharing the same characteristic, such as users from the same country.

But when you have user-specific content, dynamic, per-request rendering is the way to go.


## Scoping the dynamicness

Until recently, having a single dynamic component on a page would require rendering the entire page dynamically. 

But we don’t want to lose staticness just for a tiny component displaying user information. 

Keep in mind that dynamic rendering comes at a cost - literally. You have to render the page for every request, so it's a bit more expensive than static rendering. 

The difference is sometimes negligible for smaller applications with limited users, but huge at bigger scales.


Using client-side rendering like we have done in module 4 would work, but that’s overkill as we don’t need real-time updates either.

Instead we want rendering:
- on the server for everything (the "where")
- at build-time for most of the app (the "when" for the page)
- at request-time for the `UserInfo` component (the "when" for dynamic components)


## Partial Prerendering, a new experimental feature

It turns out Next 14 will allow that out-of-the-box, thanks to [Partial Prerendering](https://nextjs.org/learn/dashboard-app/partial-prerendering) (PPR).

Yes, there is nothing to do here! You just write your static page, write your dynamic component, and that's it.

:::warning
Partial Prerendering is not yet ready in Next **14.0**, we may have to wait for **14.1** for PPR to be released. 
But it is already documented in the [“Partial Prerendering” section of Next.js learn course](https://nextjs.org/learn/dashboard-app/partial-prerendering)
:::

:::note
You can try Partial Prerendering on Next.js canary branch, see the documentation [here](https://nextjs.org/docs/app/api-reference/next-config-js/partial-prerendering). But I strongly advise to wait for Next.js 14.1 to be released.
:::

## Observing PPR

You may have nothing to do from a code perspective, however it's important to observe what happens in presence of PPR. If it is set up correctly you should observe the following behaviour:

- The home page should be rendered only during build-time, server-side. Use console logs to observer this behaviour.
- The `UserInfo` component should be rendered everytime you refresh the page. Again, observe that using logs.
- The initial render should show a loader instead of the current user name. Check the first network request when refreshing the page (it's always the request triggered by your browser for the provided URL), or disable JavaScript.
- Then a request should be triggered to obtain the `UserInfo` component content (as a JSON payload rather than HTML, this payload is then interpreted by React to render the component).

## And what if I want static components in dynamic pages?

There are no ways to do the reverse: having a static component, inside a dynamic page. 

My personal conclusion is that this would be a more complicated situation to handle, both on Next.js side, and React side. At this point, keep in mind that we can statically render (= put in cache) pages, not components.

If you want to optimize your app, you can instead focus on correctly setting up your data source cache. This way, you can make the dynamic render and data fetching quite fast, to mitigate the impact of repeated computations.

## Check point

In module 3 we have learnt how to get fresh data with static rendering.

In module 4 we have learnt how to mix static and client-side rendering to automatically refresh data.

In this module, we have finally learnt how to mix static and dynamic rendering to display user specific information in the page while keeping it mostly static.

This means that we are now able to succesfully mix static rendering and the other 2 rendering techniques, dynamic and client-side!
