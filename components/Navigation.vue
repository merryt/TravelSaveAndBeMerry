<template>
    <div class="navigation">
        <div class="logo">TSBM</div>
        <div class="nav-items">
            <nuxt-link :to="{ path: '/' }" tag="a">
                Home
            </nuxt-link>
            <nuxt-link :to="{ path: '/blog' }" tag="a">
                Blog
            </nuxt-link>
        </div>
    </div>
</template>

<style scoped>
.navigation {
    width: 100%;
    position: absolute;
    background: white;
    display: flex;
    justify-content: space-between;
}

.nav-items > a {
    text-transform: uppercase;
    font-weight: 100;
    font-size: 24px;
    margin-left: 1rem;
    text-decoration: none;
    color: var(--blackish);
}
</style>
