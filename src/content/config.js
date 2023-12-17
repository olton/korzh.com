import { defineCollection, z, reference } from "astro:content"

const authors = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        email: z.string(),
        photo: z.string(),
        role: z.string(),
        github: z.string(),
    })
})

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        author: z.string().optional(),
        cover: z.object({
            src: z.string(),
            alt: z.string().default('Alt text')
        }),
        description: z.string().optional(),
        draft: z.boolean().default(false),
        category: z.string().default('general'),
        tags: z.array(z.string()),
        time: z.string().default('1 min'),
        footnote: z.string().optional(),
        sort: z.number().optional(),
        relatedPosts: z.array(reference('blog')).optional(),
    })
})

const news = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date()
    })
})

const docs = defineCollection({
    type: 'content',
    schema: z.object({
        target: z.string().optional(),
        title: z.string().optional(),
        description: z.string().optional(),
        lastUpdated: z.date().optional(),
        prev: z.string().optional(),
        next: z.string().optional(),
    })
})

export const collections = {
    authors,
    blog,
    news,
    "docs-js": docs,
}