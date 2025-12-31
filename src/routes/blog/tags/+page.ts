import { getAllPosts } from "$lib/components/getAllPosts.ts";
import { getAllTags } from "$lib/components/getAllTags.ts";
import type { FrontMatter } from "$lib/interfaces.ts";

export async function load() {
    const posts = await getAllPosts();
    const tags = await getAllTags();
    return {
        posts,
        tags
    }
}