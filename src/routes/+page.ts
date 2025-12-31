import { getAllPosts } from "$lib/components/getAllPosts";
import type { FrontMatter } from "$lib/interfaces";

export async function load() {
    let sortedPosts: Promise<{ meta: FrontMatter; path: string }[]> = getAllPosts();
    const topPosts = (await sortedPosts).slice(0, 5)
    return {
        posts: topPosts
    }
}