---
title: Update data, with Server Actions
privateVideoUrl: https://stream.mux.com/GclbVCCRGw5BxRH4DMUuCVM6Zhlln48z53C1DdXlgCY.m3u8
isPublicLesson: true
---

## Actions, running on the Server

React Server Components are a unique feature that allows fetching data directly from the database. The primary advantage of using Server Components is their significant performance benefits as they involve fewer client computations and reduced loading time. However, they can only read and display data, not alter them.

Server Actions, on the other hand, allow to run operations such as creating, updating, or deleting data. Server Actions do not require any client-side JavaScript either to be triggered.

So, Server Actions are actions that run on the server. It’s great when a technology says what it does and does what it says!

The fun part is that they can be imported and used in Client Components too, if you need a more interactive behaviour for your app.

That's a positive consequence of deeply integrating the server part and the client part with React both sides, something that would be more complex to setup without React.

Thanks to Server Actions, our React components, be they Server or Client components, are not just able to display data, but also to update them or "mutate" them.

:::note
The "mutation" wording may come from the GraphQL ecosystem, where we distinguish guetting data (querying) and creating/updatating/deleting data (mutating).
:::

RSCs are like a miniature server-side web applications, they can live autonomously while communicating efficiently with the other components they relate to.

Next will do some “magic” at build-time, so the server code of course never leaks in your client-code. You have may to mark the function with the “use server” directive, or put it in a separate file.

:::warning

Server Actions were disabling static generation for pages in previous versions of Next.js. This was a bug, not intentional.

This is fixed in Next 14, remember to update your existing apps.

:::

## Still worried about security?

We have talked about security already for displaying data, but being able to update them might worry you even more, and that's totally fair.

This is also discussed in [Sebastian Markbåge article](https://nextjs.org/blog/security-nextjs-server-components-actions), but remember that you can also optionally import the “server-only” package in relevant code  for extra security: [server-only](https://nextjs.org/blog/security-nextjs-server-components-actions). 

Marking a file or function with the `"use server"` directive will have a similar effect, but limited to build-time.

## Server Actions vs client-side updates

Server Actions are better understood by comparing with the alternative: API route with client-side request : “Ajax”, POST request with fetch, XHR, axios… 

Either way we need to work in at least 2 files, and we end up building reusable API endpoints that are most often actually used by only one client component. That’s a waste of code that can be prevented with Server Actions.

```tsx
// A form without a Server Action:
// - needs client-side JavaScript
// - needs an API endpoint, that in turns need security...
<form className="space-y-4" 
    onSubmit={(evt) => {
      const name = evt.target.name
      const price = evt.target.price
      const res = await fetch("/api/product/rest", {
        method: "POST",
        body: JSON.stringify({ name, price })
      headers: {
          "content-type": "application/json",
        }
      })
    }}
  >
  ...
</form>
```

```tsx
// A form with a Server Action:
// - it just works
<form className="space-y-4" action={createProductAction}>
  ...
</form>
```


What if you already have another API to process forms, separate from my Next.js app?  That’s still better to call it server-side, using a Server Action. The other API can stay private and totally internal to your organization, so it’s easier to secure the system. 

:::warning
I've seen people using Server Actions to fetch data in effects, in replacement to Route Handlers. [This is now officially discouraged](https://react.dev/reference/react/use-server) because Server Actions results cannot be properly cached, since they use a POST request.
:::

## Benefits of RSCs and Server Actions on the example of GraphQL

I want to mention that as an experienced GraphQL developer, being able to send queries and trigger mutations from the server really changed my life. 

I actually learnt this trick while learning Remix (thanks to Thomas Heyenbrock [remix-graphql](https://www.npmjs.com/package/remix-graphql) package) but it applies to Next.js and React Server Components too. 

The difference is that RSCs allow to do that at component-level and not just page-level like Remix loaders, if you happen to be familiar with Remix.

Previously, I had to rely on client-side data fetching with heavy client like Apollo, either for getting data or updating them. Apollo is a wonderful but complex piece of technology, most often overkill for medium-sized apps and making the JS bundle much bigger. 

By moving GraphQL calls server-side, I could simplify the client-code a lot.

:::tip
I name this pattern “CheapQL”, because it much less costly than client-side GraphQL!
:::

## Backend For Frontend

At this point, you might be interested in the concept of [“Backend For Frontend” from Sam Newman](https://samnewman.io/patterns/architectural/bff/). It's a generalization of the idea of moving complex client-side data-fetching and updating logic to the server whenever possible.

This paradigm explains how creating API endpoints specifically tailored for frontend can make the whole architecture more efficient. 

RSCs are even more efficient in the sense that they don’t even require to craft a new API endpoint.

## Check Point: now you can write Next.js applications using only Server Components

At this point we now how to get data, and trigger a database update, using only server-side code with zero client-side JavaScript needed.

Next will still use a bit of JS if it’s enabled to make the form user experience more pleasant. This is what we call **progressive enhancement** and it's a pillar of providing the best possible user experience on the web.
