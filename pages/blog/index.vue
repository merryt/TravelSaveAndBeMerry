<template>
    <article>
        <Navigation />
        <h1>Blog Post</h1>
        <li v-for="blogPost in blogPosts" v-bind:key="blogPost.slug">
            <nuxt-link :to="`blog/${blogPost.slug}`">{{
                blogPost.title
            }}</nuxt-link>
        </li>
    </article>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
export default {
    components: { Navigation },
    computed: {
        blogPosts() {
            return this.$store.state.blogPosts
        },
    },
}
</script>
