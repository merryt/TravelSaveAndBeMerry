<template>
    <article>
        <Navigation />
        <img alt="" class="hero" :src="blogPost.thumbnail" />
        <div class="blog-content">
            <div class="post-meta">
                <div
                    class="author"
                    v-for="author in authors"
                    v-bind:key="author.slug"
                >
                    <img
                        alt=""
                        class="authorPhoto"
                        :src="author.author_photo"
                    />
                    <h3 class="blog-author_name display">
                        {{ author.author_name }}
                    </h3>
                </div>
                <h3 class="blog-date display">
                    <div>
                        Posted:{{ blogPost.date | moment('MMMM Do YYYY') }}
                    </div>
                    <div v-if="updatedDate > 0">
                        Updated:
                        {{ blogPost.updatedDate | moment('MMMM Do YYYY') }}
                    </div>
                </h3>
            </div>
            <h1 class="display blog-header">{{ blogPost.title }}</h1>
            <div class="blog" v-html="$md.render(blogPost.body)"></div>
        </div>
        <div class="cards">
            <Card
                v-for="post in posts"
                v-bind:key="post.slug"
                v-bind:cardData="post"
                class="card"
            />
            <PromoCard class="card" tag="Photography"></PromoCard>
        </div>
    </article>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Card from '~/components/Card.vue'
import PromoCard from '~/components/PromoCard.vue'

export default {
    components: {
        Card,
        PromoCard,
        Navigation,
    },
    data() {
        return {
            posts: this.$store.state.blogPosts.slice(0, 2),
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
        updatedDate() {
            return Date.parse(this.blogPost.updatedDate)
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
.hero {
    object-fit: cover;
    width: 100%;
    height: 200px;
    margin-bottom: -4px;
}
.post-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.author {
    display: flex;
    align-items: center;
}
.authorPhoto {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
}
.blog-author_name,
.blog-date {
    color: var(--blackish);
    font-size: 2rem;
}
.blog-header {
    font-size: 4rem;
    color: var(--green-2);
}
.blog-content {
    background-color: var(--white);
    padding: var(--small-margin) 10% var(--large-margin) 10%;
    margin-top: 0;
}
.blog p {
    margin-bottom: var(--small-margin);
    line-height: 1.6em;
}
.blog iframe {
    margin-bottom: var(--small-margin);
}
</style>
