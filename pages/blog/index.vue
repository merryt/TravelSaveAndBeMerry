<template>
  <article>
    <h1>Blog Post</h1>
    <p>BlogPosts: {{blogPosts}} </p>
    <p>---</p>
    <li v-for="blogPost in blogPosts">  
        <nuxt-link :to="blogPost.slug">{{ blogPost.title }}</nuxt-link>
    </li>
  </article>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      console.log(this.$store.state.blogPosts)
      return this.$store.state.blogPosts;
    },
  },
};
</script>