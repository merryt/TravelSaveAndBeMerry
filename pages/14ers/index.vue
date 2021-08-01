<template>
    <section>
        <Navigation />
        <div class="content">
            <h1>14ers Overview</h1>
            <p>
                A 14er is a peak that has an elevation of above 14,000 feet.
                There are a total of 53 in Colorado. We are progressing toward
                every 14er in Colorado. We are using this log to show every
                successful summit, so there will be duplicates!
            </p>
            <iframe
                src="https://docs.google.com/spreadsheets/d/1t72n62bEAW2w0IZxH03M07AOEoFVNOf9PFUZUwrNZ_o/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
                width="100%"
                height="600px"
            ></iframe>
        </div>
    </section>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
    components: {
        Navigation,
    },
}
</script>

<style scoped>
h1 {
    margin-top: var(--large-margin);
}
p {
    margin-top: var(--small-margin);
}
.content {
    padding: var(--small-margin) 10% var(--large-margin) 10%;
}
iframe {
    margin-top: var(--small-margin);
}
</style>
