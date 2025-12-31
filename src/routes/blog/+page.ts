import { getAllPosts } from "$lib/components/getAllPosts";
import type { FrontMatter } from "$lib/interfaces";

export async function load() {
    const posts = await getAllPosts();
    return {
        posts
    }
}