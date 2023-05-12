interface FrontMatter {
    date: Date;
    updatedDate: Date;
    description: string;
    title: string;
    coverPhoto: string;
    authors: string;
    tags: string;
}

export async function getAllPosts() {
    // TODO: refactor all post files into a shared component
    const allPostFiles = import.meta.glob('../../routes/blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const resolved: unknown = await resolver()
            const frontMatter: FrontMatter = resolved.metadata
            const postPath = path.slice(12, -3)
            console.log(postPath)
            return {
                meta: frontMatter,
                path: postPath
            }
        })
    )
    const sortedPosts = allPosts.sort((a, b) => {
        return Number(new Date(b.meta.date)) - Number(new Date(a.meta.date))
    })
    return sortedPosts
}