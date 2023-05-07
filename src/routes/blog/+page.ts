interface FrontMatter {
    date: Date;
    updatedDate: Date;
    description: string;
    title: string;
    coverPhoto: string;
    authors: string;
    tags: string;
}

export async function load() {

    const allPostFiles = import.meta.glob('../blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const resolved: unknown = await resolver()
            const frontMatter: FrontMatter = resolved.metadata
            const postPath = path.slice(2, -3)
            return {
                meta: frontMatter,
                path: postPath
            }
        })
    )
    const sortedPosts = allPosts.sort((a, b) => {
        return Number(new Date(b.meta.date)) - Number(new Date(a.meta.date))
    })

    return {
        posts: sortedPosts
    }
}