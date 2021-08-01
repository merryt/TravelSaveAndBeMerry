<template>
    <article>
        <Navigation />
        <div class="cards">
            <Card v-for="post in blogPosts" :key="post.slug" :cardData="post" />
        </div>
    </article>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Card from '~/components/Card.vue'
export default {
    components: { Navigation, Card },
    computed: {
        blogPosts() {
            return this.$store.state.blogPosts
        },
    },
}
</script>
