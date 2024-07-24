module.exports = ({ dedent }) => ({
  title: "Blazing Fast Next.js with React Server Components",
  slug: "blazing-fast-next.js-with-react-server-components",
  permalink: "/courses/blazing-fast-next.js-with-react-server-components",
  gitRepoHttpUrl:
    "https://gitlab.com/fullstackio/books/blazing-fast-next.js-with-react-server-components",
  tags: ["nextjs","rsc"],
  publicLessonCount: 0,
  previewPercent: 40,
  modulePrefix: "module_",
  lessonDirsGlob: "module_*/lesson_*",
  moduleDirsGlob: "module_*",
  authorSlugs: ["ericburel"],
  isFree: false,
  isShownPublicly: false,
  previewPagesOnSite: false,
  useDeltas: true,
  useMdx: true, 
  heroVideoUrl: "https://stream.mux.com/lB5Ea2GRjkZmKx52unbsR7KpGt01PqnXrkeMOfrF0000Oo.m3u8",
  posterImageUrl: "./images/twitter.jpg",
  ogImageUrl: "./images/twitter.jpg",
  twitterPromoImageUrl: "./images/twitter.jpg",
  replitUrl: "https://replit.com/@newlineauthors/blazing-fast-app-vfinal",
  codeRepo: {
    gitRepoHttpUrl:
      "https://gitlab.com/fullstackio/displaying-updated-data-app",
    title: "Displaying Updated Data App",
    language: "react",
    version: "18.2.0",
  },
  /* INSTRUCTIONS: Read the template below, write your own version, and then delete this comment (and the extra text) */
  summary: dedent(`
  Learn how to build blazingly fast websites with Next.js. Static rendering is often underrated: it’s very fast, very cheap, but hard to use in advanced scenarios. This course introduces students to personalization with static rendering by using React Server Components, the latest paradigm shift in React. By the end of this course, you'll have learned advanced Next.js concepts like server actions, static revalidation, client-server relaying, or partial prerendering, and you'll know when and how to apply different server rendering strategies in large, production-grade Next.js applications. This course mixes recent advanced concepts like Server Action and static rendering in a way that students won’t find in the documentation. Not only will this apply to any content application but also it will apply to dashboards or multi-tenant SaaS. 
  
  `),
  whatYouWillLearn: {
    items: [
      {
        text: "Why the performance of a content application matters and how it's related to different rendering strategies",
      },
      {
        text: "How to statically fetch data on a server with React Server Components (RSC)",
      },
      {
        text: "How to update static pages with fresh content via data revalidation in Server Actions",
      },
      { text: "How to perform relaying with SWR, a React Hooks library for data fetching" },
      {
        text: "How to mix dynamic and static rendering via Partial Prerendering (PPR), an experimental feature introduced in Next.js 14",
      },
    ],
  },
  whatYouWillBuild: {
    items: [
      {
        text: "Fetch and cache data from a database inside a React Server Component.",
        image:
          "./images/what_you_will_build/fetch-cache-data-database-react-server-component.png",
      },
      {
        text: "Handle form submissions using Next.js Server Actions.",
        image:
          "./images/what_you_will_build/form-submission-nextjs-server-actions.png",
      },
      {
        text: "Perform client-side data fetching in Next.js with SWR.",
        image:
          "./images/what_you_will_build/client-side-data-fetching-nextjs-swr.png",
      },
    ],
  },
  primaryDescriptionMarkdown: dedent(`
  
## **Blazing Fast Next.js with React Server Components**

### Build a Content Application with Dynamic Data - Newline Commerce

Welcome to the "Blazing Fast Next.js with React Server Components - Design patterns to accelerate Next.js Apps with Static Rendering and Server Actions" course. Throughout this program, we will guide you through the intricacies of Next.js, focusing on Server Actions and static rendering techniques. In this informative journey, we will collaboratively construct a content application named Newline Commerce.

Join us as we explore the foundations of Next.js, implementing dynamic data and server-side actions to bring Newline Commerce to life. This course is your gateway to mastering the art of server actions and static rendering in the context of real-world web development.

### How The Course Works

- The Blazing Fast Next.js with React Server Components course is a 6-module online program where you will delve into Next.js powerful patterns such as Server Actions, Static Rendering, Client-Server Relaying or Partial Prerendering. Learn to deliver fresh content to your end users with optimal performances and cost efficiency.
- Remote: Take the course from anywhere, allowing you to participate from the comfort of your preferred location.
- Self-paced: Tailor the course to fit your schedule. With a self-paced structure, you have the flexibility to learn at your own pace, ensuring a stress-free educational experience.
- Community: Engage with other students in a collaborative learning environment. Share insights, discuss challenges, and expand your understanding within a supportive community.
- Structured: Experience a cohesive and organized learning journey. The course is structured to guide you through each module in a logical and progressive fashion, ensuring a comprehensive understanding of Next.js Server Actions and Static Rendering.

### The Challenge

Navigating the realm of Next.js can be a daunting endeavor for many aspiring developers. As you embark on your journey to master this powerful framework, you may encounter several challenges:

- **Complexity Overload:** Next.js, with its robust capabilities, can overwhelm newcomers. Understanding the intricate balance between Next.js server-centric features and data update requirements requires a structured approach.
- **Dynamic Content Dilemma:** Implementing dynamic content in web applications often poses a challenge, especially when it comes to delivering fresh data efficiently to end users.
- **Performance Concerns:** Ensuring optimal performance while maintaining cost efficiency is difficult. Achieving this balance with Next.js demands a nuanced understanding of its patterns and practices.
- **Lack of Cohesive Learning Resources:** Piecing together information from various sources can be time-consuming and confusing. A structured learning path is essential for a comprehensive understanding of Next.js.

### The Frustration

Newcomers often find themselves frustrated by the lack of clarity and guidance in mastering Next.js. The complexity of static rendering aside from trivial use cases can be a significant roadblock, leading to confusion and hindered progress.

### How This Course Helps

The "Blazing Fast Next.js with React Server Components" course is designed to address these challenges head-on. Through a carefully crafted curriculum, you will gain a clear understanding of Next.js, overcome common hurdles, and confidently apply static rendering with revalidation in your web development projects.


### Unlock the Potential of Next.js in 2024

In the dynamic landscape of web development, staying ahead is key. Here's why learning Next.js in 2024 is advantageous for you:

1. **Enhanced Performance:**
Next.js continues to evolve, offering enhanced performance features that cater to the growing demand for faster, more efficient web applications.
2. **Industry Relevance:**
As of 2024, Next.js maintains its position as a leading framework, backed by a vibrant community and widespread adoption in the industry. Learning it now ensures you align with current development trends.
3. **Scalability for Modern Applications:**
In an era where scalability is paramount, Next.js provides the tools to build scalable applications that adapt to the demands of modern web development.
4. **SEO Optimization:**
Next.js server-side rendering capabilities contribute to improved SEO performance, a crucial factor for ensuring your web applications are discoverable and accessible.
5. **Developer-Friendly Ecosystem:**
With an ever-expanding ecosystem and a focus on developer experience, learning Next.js in 2024 means immersing yourself in a framework designed to streamline your development workflow.

Equip yourself with the skills to thrive in the current web development landscape. Learning Next.js in 2024 positions you at the forefront of technology, offering a competitive edge in your professional journey.
  `),
  courseSyllabusDescriptionMarkdown: dedent(`
The **Blazing Fast Next.js with React Server Components** course equips you with the skills needed to master Next.js Static Rendering, coupled with Server Actions but also client-side and dynamic rendering. From foundational concepts to practical implementation, you'll gain a deep understanding of how to leverage Next.js for optimal performance and dynamic content delivery.
  `),
  numProjects: 1,
  linesOfCode: 1035,
  ctaFeatures: {
    features: [
      { text: "Build and display a product list" },
      { text: "Craft an administration area to update the products" },
      {
        text: "Design a preorder form and call-to-action with real-time updates",
      },
    ],
  },
  authorBios: {
    ericburel: dedent(`

### Meet Eric Burel - Your Next.js Course Author

**Eric Burel - Developer, Teacher, and R&D Funding Consultant**

Meet the mind behind "Blazing Fast Next.js with React Server Components" - Eric Burel. Eric, based in France, wears multiple hats as a developer, teacher, and R&D funding consultant. His professional journey has been marked by a diverse range of experiences, contributing to the deep knowledge he brings to this course.

**Professional and Academic Credentials:**

Eric holds a degree from Grenoble INP Ensimag, a prestigious computer science engineering school in France, reflecting his strong academic foundation. As a member of the Devographics collective, he actively contributes to open source projects, notably the State of JavaScript/CSS/HTML surveys.

**Work Experience:**

Eric's career has been enriched through collaborations from top-level international startups to emerging entrepreneurship projects. He not only imparts live Next.js training in France and abroad but has also crafted the Next.js frontend for a grid management software, later acquired by Schneider Electrics.

**Passions Beyond Development:**

Beyond the code, Eric finds joy listening to electronic and hip-hop music and exploring little-know facts about his favorite hits. This passion not only adds a personal touch but also reflects his dedication to sharing knowledge in diverse and engaging ways.

**Contributions to the Field:**

Eric's commitment to innovation is evident in his contribution to the field. He has formalized and published a new pattern for the Jamstack named "Segmented Rendering," aimed at reducing web applications' CPU consumption. This dedication to advancing industry practices sets the tone for a course designed to empower learners with cutting-edge insights.

**Why Learn Next.js with Eric:**

Eric's extensive background, spanning live training sessions, open-source contributions, and real-world project experiences, positions him as the ideal instructor for "Blazing Fast Next.js with React Server Components." His nuanced understanding of Next.js, combined with a passion for effective teaching, ensures a learning experience that goes beyond the basics.

**Relevance to You:**

Choosing this course means learning from an individual deeply ingrained in the world of Next.js development, with real-world applications and contributions to the framework's ecosystem. Eric's unique blend of expertise and hands-on experience makes this course a standout choice in the realm of Next.js education.

`),
  },
  faq: [
    {
      q: "1. What is Blazing Fast Next.js with React Server Components?",
      a: `"Blazing Fast Next.js with React Server Components" is an online course designed to help seasoned software engineers master Next.js, focusing on advanced concepts like static rendering and revalidation with server actions. The course provides a comprehensive exploration of these topics, empowering learners to enhance web application performance and efficiently deliver dynamic content.`,
    },

    {
      q: `2. Who is this course for?`,
      a: `This course is tailored for intermediate and senior software engineers looking to deepen their understanding of Next.js. If you have a solid foundation in JavaScript and React and are eager to explore advanced Next.js patterns, such as server actions and static rendering, this course is ideal for you. Whether you're aiming to optimize performance, implement secure authentication, or master the intricacies of Next.js, this course caters to your needs.`,
    },

    {
      q: `3. What if I don't like the course?`,
      a: `We understand that every learner is unique. If the course doesn't meet your expectations, we offer a 100% satisfaction guarantee within the first 30 days. Simply reach out to our support team, and we'll process a refund for you. Your satisfaction and learning experience are our priorities.`,
    },
    {
      q: `4. How long does the course take to complete?`,
      a: `The course is self-paced, allowing you to progress at a speed that suits your schedule. With a total video runtime of approximately 1 hour and 20 minutes, the course is structured into 6 modules and 14 lessons. Whether you choose to complete it in a week or take a more extended timeline, the flexibility is yours.`,
    },
    {
      q: `5. Can I access the course from anywhere?`,
      a: `Absolutely. The course is remote-friendly, enabling you to access the content from anywhere with an Internet connection. Whether you're at home, work, or on the go, you can engage with the course materials at your convenience.`,
    },
    {
      q: `6. How is the course structured?`,
      a: `The course is structured into 6 modules, each covering specific aspects of Next.js Server Actions and Static Rendering. From foundational concepts to advanced techniques, the modules guide you through a cohesive learning journey, ensuring a comprehensive understanding of Next.js.`,
    },
    {
      q: `7. What prerequisites do I need for this course?`,
      a: `To make the most of this course, we recommend a solid proficiency in JavaScript and React, along with prior experience in web development. Familiarity with HTML and CSS is also beneficial. These prerequisites ensure you have the foundational knowledge to grasp the advanced concepts presented in the course.`,
    },
    {
      q: `8. Is there a community for course participants?`,
      a: `Yes, there is a community where you can engage with fellow participants. Share insights, collaborate on projects, and expand your professional network within an inclusive and supportive environment.`,
    },
    {
      q: `9. What sets this course apart from others?`,
      a: `This course stands out due to its focus on advanced Next.js patterns and the expertise of the course author, Eric Burel. With real-world project experiences, live training sessions, and contributions to the Next.js ecosystem, Eric brings a unique blend of knowledge and hands-on experience to your learning journey.`,
    },

    {
      q: `10. Will I receive a certificate upon completion?`,
      a: `Yes, upon completing the course, you will receive a certificate of completion. This certificate acknowledges your dedication to mastering Next.js Server Actions and Static Rendering.`,
    },

    {
      q: `11. How does the course enhance my career?`,
      a: `Mastering Next.js, especially with a focus on server actions and static rendering, positions you as a valuable asset in the competitive world of web development. The skills acquired in this course are directly applicable to real-world projects, making you a sought-after professional in the industry.`,
    },
    {
      q: `12. How much does the course cost?`,
      a: `The course is priced at $39, offering an affordable and valuable investment in your professional development. With a range of content and the expertise of the course author, it provides substantial value for those looking to advance their skills in Next.js.`,
    },
  ],
});