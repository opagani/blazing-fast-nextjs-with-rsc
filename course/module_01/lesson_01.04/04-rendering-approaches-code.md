---
title: Rendering in Newline Commerce (demo)
privateVideoUrl: https://stream.mux.com/021u3lYi901wjhl502Jsk01n5x919DGAHs2sExTEGavMRLQ.m3u8
isPublicLesson: true
coverImageUrl: https://image.mux.com/AVjBlWjFOAMjW9A024KFf9Q1hDrGvTcmgV2YcC01SbSUw/thumbnail.png?time=21 
---

## Code Examples

This a followup of lesson 3, showing some code for each rendering approach. Here are a few code extracts from the demo app.

:::tip
You'll notice that in Next.js, but also in other frameworks, rendering and data fetching are tightly related concepts. Because we always want to render *something*, and this something is...data! 

That's why these code samples are actually more about fetching data than generating some HTML, despite demonstrating different rendering patterns.
:::


### Client-side call (in the browser) using SWR in the preorder page:

```tsx
// src/components/preorder-section.tsx
const { data , error, isLoading } = useSWR<{ count: number }>(
  '/api/preorder/count',
  jsonFetch,
)
return (<p>
    Join the other {data.count} customers who have already preordered.
  </p>)
```

### Static (build-time) server-side data fetching in the product list:

```tsx
// src/components/product-list.tsx
async function ProductListAsync() {
  const products = await rscGetProducts()
  return (<div>
      {
        products.map((product, idx) => {
          return <ProductItem key={idx} product={product} />
        })
      }
    </div>)
}
```
### Dynamic (request-time) server-side data fetching of user info:

```tsx
// src/components/user-info.tsx
async function UserInfoAsync() {
  // cookies are only available in the request
  const token = cookies().get("token")?.value
  const user = await rscGetUser(token)
  return <span>{user.name}</span>
}
```
## Check point

We now have a better understanding of the 3 rendering techniques available in Next.js.

Understanding these techniques is key to optimizing the user experience of content applications. The choice of rendering technique depends on factors such as the type of data, user interaction, and performance requirements. 

In the next module, we are going to focus on Next.js "App Router" modern features that allow server-side rendering and interactions with data stored in the database: React Server Components and Server Actions.
