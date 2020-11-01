<template>
    <article>
        <img alt="" :src="blogPost.thumbnail" />
        <h1>{{ blogPost.title }}</h1>
        <div class="post-meta">
            <div
                class="author"
                v-for="author in authors"
                v-bind:key="author.slug"
            >
                <img alt="" class="authorPhoto" :src="author.author_photo" />
                {{ author }}
            </div>
            {{ blogPost.date | moment('MMMM Do YYYY') }}
        </div>
        <hr />
        <div v-html="$md.render(blogPost.body)"></div>
        {{ blogPost.body }}
    </article>
</template>

<script>
export default {
    data() {
        return {
            test: 'er',
        }
    },
    async asyncData({ params, payload }) {
        if (payload) {
            const blogPostData = payload
            return {
                blogPost: blogPostData,
            }
        } else {
            return {
                blogPost: await require(`~/static/posts/${params.blog}.json`),
            }
        }
    },
    computed: {
        date() {
            return Date.parse(this.blogPost.date)
        },
        authors() {
            const allAuthors = this.$store.state.authors
            return allAuthors.filter((author) => {
                const authorSlug = author.slug.toLowerCase()
                for (author of this.blogPost.author) {
                    if (author.toLowerCase() === authorSlug) {
                        return true
                    }
                }
                return false
            })
        },
    },
}
</script>

<style>
.authorPhoto {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
}
</style>
