import { getAllPosts } from '$lib/components/getAllPosts.js'
import type { FrontMatter } from "$lib/interfaces.ts";

export async function load({ params }) {
    const post = await import(`../${params.slug}.md`)
    let { title, date, description, coverPhoto, authors, tags } = post.metadata
    const content = post.default
    let filteredPosts: any = []

    if (tags) {
        console.log(tags)
        const sortedPosts: Promise<{ meta: FrontMatter; path: string }[]> = getAllPosts();
        filteredPosts = (await sortedPosts).filter((post) => post.meta.tags?.includes(tags))
    }
    authors = authors.toString().split(',')
    console.log(authors)

    return {
        description,
        coverPhoto,
        content,
        title,
        date,
        authors,
        tags,
        related: filteredPosts.slice(0, 2)
    }
}