---
title: Static RSC - the new default
privateVideoUrl: https://stream.mux.com/FdPbyFi3hqmG00j7h7CaPDC62006ZkAQbRm3rr02FVe02f4.m3u8
isPublicLesson: true
---

## Meet React Server Components

As the landscape of web development evolves, new techniques and technologies emerge that can significantly improve the performance and user experience of web applications. 

One such technology that has recently been introduced is "React Server Components", aka RSCs. 

These components are themselves made possible thanks to the new architecture brought by Next.js 13, known as the App Router. 

RSCs represent the most tremendous paradigm shift in React since the introduction of hooks.

A React Server Components, in its simplest form, is really like a template written in JSX, a function that takes some data as parameters (the “props”) and returns HTML or more React Components.

```jsx
// Hello world in Next.js App Router:
// this is a statically rendered React Server Component
export function HelloWorld(props) {
    return <p>Hello world! My name is: {props.name}</p>
}
```

## Server Components vs Client Components

Before RSCs, we only had one type of React components: Client Components. 

It was already possible to render client components on the server, but they still needed some client-side JavaScript to work.

This process of rendering a Client Component first on the server, and then in the browser, is called hydration. Hydration allows the server-rendered component to become interactive when it lands in the browser.

React Server Components on the other hand, are rendered only on the server and do not require any client-side JavaScript to work. 

:::info
The `HelloWorld` component above has no actual server requirements, so it can be rendered client-side too. The [RFC that introduces Server Components](https://github.com/reactjs/rfcs/blob/bf51f8755ddb38d92e23ad415fc4e3c02b95b331/text/0000-server-components.md#sharing-code-between-server-and-client) calls such components "shared components", meaning they can be used by other server components or client components. [This video from Lauren Tan (React Core team)](https://www.youtube.com/watch?v=TQQPAU21ZUw&t=1707s) gives great explanations. Later on we will meet "pure" RSCs with actual server requirements.
:::

## Static, server-only components are the new default

The fact that RSCs don't need any client-side JavaScript makes them more performant than Client Components. And in Next.js, performance is always the default, so all your React components are Server Components unless stated otherwise.

```jsx
// This directive marks all components for this file
// as Client Components
"use client"
export function HelloWorldAlert(props) {
    // The "onClick" event handler
    // can't be used in a server component
    // That's why we need a client component
    return <button onClick={() => {
      alert("Hello World")
    }}>Click me</button>
}
```

Client component are needed when you need some JavaScript-based interactivity: using event handlers (`onClick`) or React hooks.

:::tip
Pure HTML interactive elements are compatible with RSCs: forms, inputs, submit buttons. That's because they do not use client-side JavaScript but are instead features provided directly by the browser engine/HTML.
:::

As a default, Next RSCs are also static. As long as they don’t use cookies, headers or basically any request-specific data, they are rendered only once at build-time.

## Keep it as static as possible

Static + RSC is the default in Next.js and it also happens to be the most optimal combo for a website. It needs no server computations after the initial build step and no client computations either. 

They are rendered once for all when you build the application. You can have 3 million users accessing your website, there is only 1 computation needed to render a page HTML content when using only RSCs.

This is kind of a dream scenario that we want to maintain as long as possible, until we really really need to switch to dynamic or client-side rendering.

However you shouldn't feel disappointed when static RSCs fall short. 

Using client-side rendering is still perfectly fine: that's how you make the application interactive and interesting for the end user. 

In module 4, we will learn how to mix client-side rendering and static rendering. Dynamic (request-time) server-side rendering is also fine, we will use it in module 5 to display a component that is specific to the current user.


## Is React the new PHP?

React Server Components have sparked debates about their similarity with PHP. Indeed, they render HTML and React components, which mirrors PHP's template-based approach. 

All languages with web servers have similar templating systems: Jinja in Python Django, “html/template” package in Go, EJS with Node.js, ERB for Ruby on Rails...

So is React becoming PHP? 

No, because RSCs are not just server templates like the other tools I’ve mentioned. A fundamental difference lies in the deep integration with React client components. 

That’s what we do in the "preorder-section" component, which is a Client Component rendered by a Server Component page.

```tsx
// src/components/preorder-section.tsx

// This is a Client component 
// (the default BEFORE Next.js App Router)
// it uses a hook
export function PreorderSection({initialCount}){ 
const { data , error, isLoading } = useSWR<{ count: number }>(
  '/api/preorder/count',
  jsonFetch,
)
return (<p>
    Join the other {data.count} customers who have already preordered.
  </p>)
}
---
//src/app/preorder/page.tsx

// This is a React Server Component 
// (the default AFTER Next.js App Router)
// Note that it can be "async",
// and that it can render a Client component
export default async function PreorderPage() {
  const preordersCount = await rscCountPreorders()
  return <PreorderSection initialCount={preordersCount} />
}
```

Some may argue that Web Components can also bring interactivity to traditional server-side rendered content, so **"PHP + Web Component"** could be equivalent to **"React Server Components + Client-side React"**.

That’s not totally wrong and for instance Go + Lit + Tailwind is a very interesting mix I had the chance to explore in a previous professional experience. 

But that’s not totally true either, because the integration between PHP and web components is not as deep: 
- You need to learn 2 languages
- Server-side rendering web components is still in active development
- In React, the server-rendered elements are “known” by the client-side elements (not just the HTML but their structure and props).


:::tip
Someone crafted a “use php” directive to allow using PHP within React Server Components: [nextjs-use-php](https://github.com/bufferhead-code/nextjs-use-php).
Obviously as a joke but the fact that it works is proving the incredible capabilities of React Server Components!
:::

Guillermo Rauch tweeted a good summary of the differences between Next.js App Router and PHP [here](https://twitter.com/rauchg/status/1728459008544272657). I've talked about deep integration with Client Components, but there are other aspects too that differentiate React like the ability to render components concurrently.


## Towards Server-only applications in Next.js

Thanks to RSC, and Server Actions that we will discover in lesson 3, the App Router brings the possibility to write “full server” applications and bring client-side code only as a last resort.
