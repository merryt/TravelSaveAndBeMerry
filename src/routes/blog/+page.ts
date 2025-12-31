import { getAllPosts } from "$lib/components/getAllPosts.ts";
import type { FrontMatter } from "$lib/interfaces.ts";

export async function load() {
    const posts = await getAllPosts();
    return {
        posts
    }
}