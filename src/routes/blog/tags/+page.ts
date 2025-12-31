import { getAllPosts } from "$lib/components/getAllPosts";
import { getAllTags } from "$lib/components/getAllTags";
import type { FrontMatter } from "$lib/interfaces";

export async function load() {
    const posts = await getAllPosts();
    const tags = await getAllTags();
    return {
        posts,
        tags
    }
}