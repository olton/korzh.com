import { defineCollection, z, reference } from "astro:content"

const authors = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        email: z.string(),
        photo: z.string(),
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

export const collections = { authors, blog }