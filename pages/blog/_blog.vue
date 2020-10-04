<template>
    <article>
        <h1>{{ blogPost.title }}</h1>
        <div v-html="$md.render(blogPost.body)" />
        {{ blogPost }}
    </article>
</template>

<script>
export default {
    async asyncData({ params, payload }) {
        if (payload) return { blogPost: payload }
        else
            return {
                blogPost: await require(`~/static/posts/${params.blog}.json`),
            }
    },
}
</script>
