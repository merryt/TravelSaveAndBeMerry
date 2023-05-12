import { getAllPosts } from "$lib/components/getAllPosts.ts";

interface FrontMatter {
    date: Date;
    updatedDate: Date;
    description: string;
    title: string;
    coverPhoto: string;
    authors: string;
    tags: string;
}

export async function load() {
    let sortedPosts: Promise<{ meta: FrontMatter; path: string }[]> = getAllPosts();
    const topPosts = (await sortedPosts).slice(0, 6)
    console.log(topPosts.length)
    return {
        posts: topPosts
    }
}