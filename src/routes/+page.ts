import { getAllPosts } from "$lib/components/getAllPosts.ts";
import type { FrontMatter } from "$lib/interfaces.ts";

export async function load() {
    let sortedPosts: Promise<{ meta: FrontMatter; path: string }[]> = getAllPosts();
    const topPosts = (await sortedPosts).slice(0, 6)
    console.log(topPosts.length)
    return {
        posts: topPosts
    }
}