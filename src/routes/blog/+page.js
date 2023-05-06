export async function load({ params }) {
    const allPostFiles = import.meta.glob('../blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
    console.log(`blog/+page.js:`, params)
    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver()
            const postPath = path.slice(2, -3)
            return {
                meta: metadata,
                path: postPath
            }
        })
    )
    const sortedPosts = allPosts.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date)
    })

    return {
        posts: sortedPosts
    }
}