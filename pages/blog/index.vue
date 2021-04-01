<template>
    <article>
        <Navigation />
        <h1>Blog Post</h1>
        <li v-for="blogPost in blogPosts" :key="blogPost.slug">
            <nuxt-link :to="blogPost.slug">{{ blogPost.title }}</nuxt-link>
        </li>
    </article>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
export default {
    components: { Navigation },
    computed: {
        blogPosts() {
            console.log(this.$store.state.blogPosts)
            return this.$store.state.blogPosts
        },
    },
}
</script>
