<template>
    <div>
        <Navigation />
        <div>
            <h1 class="title display">Travel Save & Be Merry</h1>

            <img alt="" src="" />

            <!-- example link -->
            <!-- <nuxt-link to="/blog/" class="button--green">blog</nuxt-link> -->
        </div>
    </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
    components: {
        Navigation,
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
    font-size: 17.95vw;
    letter-spacing: -7px;
}
</style>
