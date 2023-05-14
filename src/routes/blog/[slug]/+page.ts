import { getAllPosts } from '$lib/components/getAllPosts.js'
import type { FrontMatter } from "$lib/interfaces.ts";

export async function load({ params }) {
    const post = await import(`../${params.slug}.md`)
    let { title, date, description, coverPhoto, authors, tags, updatedDate } = post.metadata
    const content = post.default
    let filteredPosts: any = []
    const firstTag = tags.split(",")[0]
    if (firstTag) {
        const sortedPosts: Promise<{ meta: FrontMatter; path: string }[]> = getAllPosts();
        filteredPosts = (await sortedPosts).filter((post) => post.meta.tags?.includes(firstTag))
    }
    authors = authors.toString().split(',')

    return {
        description,
        coverPhoto,
        content,
        title,
        date,
        authors,
        tags,
        firstTag,
        updatedDate,
        related: filteredPosts.slice(0, 2)
    }
}