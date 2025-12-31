import type { FrontMatter } from "$lib/interfaces";

export async function getAllPosts() {
    const allPostFiles = import.meta.glob('../../routes/blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            try {
                const resolved: any = await resolver()
                const frontMatter: FrontMatter = resolved.metadata
                const postPath = path.slice(12, -3)
                frontMatter.authors = frontMatter.authors ? frontMatter.authors.toString().split(',') : []
                return {
                    meta: frontMatter,
                    path: postPath
                }
            } catch (e) {
                console.error(`Error resolving post at ${path}:`, e)
                return null
            }
        })
    )
    const filteredPosts = allPosts.filter(post => post !== null)
    const sortedPosts = filteredPosts.sort((a, b) => {
        return Number(new Date(b.meta.date)) - Number(new Date(a.meta.date))
    })
    return sortedPosts as { meta: FrontMatter; path: string }[]
}