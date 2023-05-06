export async function load({ params }) {
    const post = await import(`../${params.slug}.md`)
    const { title, date, description, coverPhoto, authors, tags } = post.metadata
    const content = post.default

    return {
        description,
        coverPhoto,
        content,
        title,
        date,
        authors,
        tags,
    }
}