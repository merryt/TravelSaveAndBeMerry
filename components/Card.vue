<template>
    <div class="card">
        <img class="card-img" :alt="cardData.title" :src="cardData.thumbnail" />
        <nuxt-link
            :to="{ path: 'blog/' + cardData.slug }"
            tag="h2"
            class="display"
        >
            {{ cardData.title }}
        </nuxt-link>
        <p v-html="cardData.description"></p>
        <div class="card-author-profile">
            <img class="profile-img" alt="" :src="primaryAuthor.author_photo" />
            {{ primaryAuthor.author_name }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cardData: {
            type: Object,
            default() {
                return {
                    body: 'Empty body',
                    date: '2020-05-31T22:44:42.261Z',
                    description: 'Here is the description',
                    slug: '2020-05-31-test-post',
                    tags: ['sloths'],
                    thumbnail: '/img/2015-02-21-07.16.15.jpg',
                    title: 'Test post',
                }
            },
        },
    },
    data() {
        return {
            authors: '',
            primaryAuthor: {},
            allAuthors: this.$store.state.authors,
        }
    },
    mounted() {
        this.authors = this.allAuthors.filter(
            (author) =>
                author.slug.toLowerCase() ===
                this.cardData.author[0].toLowerCase(),
        )
        this.primaryAuthor = this.authors[0]
    },
}
</script>
