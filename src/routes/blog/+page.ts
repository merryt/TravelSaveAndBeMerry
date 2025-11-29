import { getAllPosts } from "$lib/components/getAllPosts.ts";
import type { FrontMatter } from "$lib/interfaces.ts";

export async function load() {
    const sortedPosts: Promise<{ meta: FrontMatter; path: string }[]> = getAllPosts();
    return {
        posts: sortedPosts
    }
}