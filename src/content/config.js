import { defineCollection, z } from "astro:content"
const authorsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        email: z.string(),
        photo: z.string(),
    })
})

export const collections = {
    'authors': authorsCollection,
}