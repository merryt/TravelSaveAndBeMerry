import type { FrontMatter } from "$lib/interfaces.ts";

export async function getAllTags() {
    const allPostFiles = import.meta.glob('../../routes/blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const resolved: any = await resolver()
            const frontMatter: FrontMatter = resolved.metadata
            const postPath = path.slice(12, -3)
            frontMatter.authors = frontMatter.authors.toString().split(',')
            return {
                meta: frontMatter,
                path: postPath
            }
        })
    )
    let uniqueTags = new Set();
    allPosts.forEach(item => {
        if (item.meta.tags == undefined) {
            return
        }
        item.meta.tags.split(',').forEach(tag => {
            uniqueTags.add(tag.trim())
        })
    });
    return Array.from(uniqueTags)
}