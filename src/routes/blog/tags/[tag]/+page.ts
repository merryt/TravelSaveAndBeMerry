import { getAllPosts } from "$lib/components/getAllPosts.ts";

export async function load({ params }) {
    const posts = await getAllPosts()
    const filteredPosts = posts.filter(post => {
        if (post.meta.tags) {
            const tags = post.meta.tags.split(',').map(t => t.trim());
            return tags.includes(params.tag);
        }
        return false;
    })
    return {
        params,
        posts: filteredPosts
    }
}