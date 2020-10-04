<template>
    <div>
        <Navigation />
        <div>
            <h1 class="title display">Travel Save & Be Merry</h1>
            <div class="personas">
                <img alt="" src="Randi.png" />
                <img alt="" src="Tyler.png" />
            </div>

            <div class="about-us">
                <h2 class="display">About Us</h2>
                <p>
                    Randi and Tyler walk through their experiences traveling,
                    saving, and finding happiness, well, sorta, we just liked
                    the domain name! Tyler is a coder for The Motley Fool, and
                    Randi is a Quality Assurance Manager for Guild Education!
                </p>
            </div>

            <Card
                v-for="post in posts"
                v-bind:key="post.slug"
                :cardData="post"
            />

            <!-- example link -->
            <!-- <nuxt-link to="/blog/" class="button--green">blog</nuxt-link> -->
        </div>
    </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Card from '~/components/Card.vue'

export default {
    components: {
        Navigation,
        Card,
    },
    data() {
        return {
            posts: this.$store.state.blogPosts,
        }
    },
    head() {
        return {
            script: [
                {
                    src:
                        'https://identity.netlify.com/v1/netlify-identity-widget.js',
                },
            ],
        }
    },
}
</script>

<style>
.container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-size: 18vw;
    letter-spacing: -10px;
    width: 110%;
    overflow: hidden;
    margin-left: -5%;
    text-align: center;
    color: var(--green-2);
}
@media only screen and (max-width: 800px) {
    .title {
        font-size: 19.3vw;
    }
}

.personas {
    display: flex;
    justify-content: space-between;
    height: 300px;
    overflow: hidden;
    margin-top: -10vw;
}
.personas > img {
    align-self: start;
    /* todo, make this responsive, perhaps absolute with left and right for randi and tyler respectively  */
}
.about-us {
    background-color: var(--white);
    padding: 5% 20%;
}

.about-us > h2 {
    font-size: 2em;
    color: var(--green-3);
}
</style>
