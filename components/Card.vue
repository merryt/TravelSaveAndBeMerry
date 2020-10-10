<template>
    <div class="card">
        <img class="card-img" :alt="cardData.title" :src="cardData.thumbnail" />

        <h2 class="display">{{ cardData.title }}</h2>
        <p v-html="cardData.description"></p>
        <div class="card-author-profile">
            <img class="profile-img" alt="" src="#" />
            Randi
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
    mounted() {
        console.log(this.cardData)
    },
}
</script>

<style>
.card {
    animation: 1s appear;
    width: 30%;
    overflow: hidden;
    box-shadow: var(--shadowColor);
    background-color: var(--white);
    margin-top: var(--large-margin);
    border-radius: var(--border-radius-size);
}
.card-img {
    width: 100%;
}

.card > h2 {
    margin: 0 var(--small-margin);
    color: var(--green-3);
}
.card > p {
    margin-left: var(--small-margin);
    margin-right: var(--small-margin);
}
.card-author-profile {
    margin-left: var(--small-margin);
    margin-right: var(--small-margin);
}

@keyframes appear {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
