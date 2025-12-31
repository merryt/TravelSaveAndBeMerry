import { getAllPosts } from '$lib/components/getAllPosts'
import type { FrontMatter } from "$lib/interfaces";

export async function load({ params }) {
    // todo :
    // - Remove self from related

    const post = await import(`../${params.slug}.md`)
    let { title, date, description, coverPhoto, authors, tags, updatedDate } = post.metadata
    const content = post.default
    let filteredPosts: any = []
    let firstTag = tags ? tags.split(",")[0] : "Europe"

    const sortedPosts: Promise<{ meta: FrontMatter; path: string }[]> = getAllPosts();
    filteredPosts = (await sortedPosts).filter((post) => post.meta.tags?.includes(firstTag))

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