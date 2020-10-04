<template>
    <div class="card">
        <img alt="" src="#" />
        <h3>Crested Butte to Crystal Mills Via Shofield Pass</h3>
        <p v-html="cardData.body"></p>
        <div class="author-profile">
            <img alt="" src="#" />
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
                    body: 'Sample post here is some sample content',
                    date: '2020-05-31T22:44:42.261Z',
                    description: 'Lets go!!!!',
                    slug: '2020-05-31-test-post',
                    tags: ['sloths'],
                    thumbnail: '/img/2015-02-21-07.16.15.jpg',
                    title: 'Test post',
                }
            },
        },
    },
}
</script>
<style>
.card {
    animation: 1s appear;
    width: 30%;
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
