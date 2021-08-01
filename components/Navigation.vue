<template>
    <div class="navigation">
        <div class="logo display">
            <nuxt-link :to="{ path: '/' }"> Travel Save & Be Merry</nuxt-link>
        </div>
        <div class="nav-items">
            <nuxt-link :to="{ path: '/' }">Home</nuxt-link>
            <nuxt-link :to="{ path: '/blog' }">Blog</nuxt-link>
        </div>
    </div>
</template>

<style scoped>
.logo a {
    font-size: 24px;
    text-decoration: none;
    color: var(--green-3);
}
.navigation {
    width: 100%;
    padding: 10px;
    background: var(--white);
    display: flex;
    justify-content: space-between;
}

.nav-items > a {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 24px;
    margin-left: 1rem;
    text-decoration: none;
    color: var(--blackish);
}
</style>
