<template>
    <div class="promo-card">
        <h4>Travel, Save, and be Merry</h4>
        <h2 class="display">{{ tag }}</h2>
        <svg
            width="183"
            height="149"
            viewBox="0 0 183 149"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.5"
                d="M52.1029 41.75C53.8349 38.75 58.1651 38.75
            59.8971 41.75L94.5381 101.75C96.2702 104.75 94.1051 108.5 90.641
            108.5H21.359C17.8949 108.5 15.7298 104.75 17.4619 101.75L52.1029
                       41.75Z"
                stroke="white"
                stroke-width="7"
            />
            <path
                opacity="0.5"
                d="M104.603 13.75C106.335 10.75 110.665 10.75 112.397 13.75L163.06 101.5C164.792 104.5 162.627 108.25 159.162 108.25H57.8375C54.3734 108.25 52.2083 104.5 53.9404 101.5L104.603 13.75Z"
                stroke="white"
                stroke-width="7"
            />
        </svg>

        <nuxt-link
            v-for="post in topThreePosts"
            :key="post.slug"
            :to="{ path: 'blog/' + post.slug }"
            tag="a"
        >
            {{ post.title }}
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            default: 'Photography',
        },
    },
    data() {
        return {
            primaryAuthor: {},
            posts: this.$store.state.blogPosts,
            allAuthors: this.$store.state.authors,
        }
    },
    computed: {
        topThreePosts() {
            const postsMatchingTag = this.posts.filter((post) => {
                return post.tag.includes(this.tag)
            })
            return postsMatchingTag.slice(0, 3)
        },
    },
}
</script>

<style>
.promo-card {
    /* some styles come from card  */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    position: relative;
    background-color: var(--green-3);
}

.promo-card > * {
    position: relative;
    z-index: 10;
    color: white;
}

.promo-card::before,
.promo-card::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.promo-card::before {
    background: url(/imgs/crystalmills4.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    filter: blur(8px) sepia(76%) hue-rotate(89deg) grayscale(17%)
        brightness(0.6);
    z-index: 1;
    opacity: 90%;
}
.promo-card::after {
    z-index: 2;
    opacity: 60%;
    background-color: var(--green-3);
}

.promo-card > h4 {
    font-size: 14px;
    font-weight: 500;
    margin: 33px 0 0 0;
}
.promo-card > h2 {
    margin: 0;
    color: var(--white);
    text-align: center;
    font-size: 56px;
}

.promo-card > a {
    text-decoration: none;
    margin-top: var(--small-margin);
    padding-bottom: var(--small-margin);
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
}
.promo-card > a:last-of-type {
    border-bottom: none;
}
</style>
