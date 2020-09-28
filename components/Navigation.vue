<template>
    <div class="navigation">
        <div class="logo"></div>
        <div class="nav-items">
            <span>Home</span>
            <span>Blog</span>
            <span>Colorado</span>
        </div>
    </div>
</template>

<style scoped>
.navigation {
    display: flex;
    justify-content: space-between;
}

.nav-items {
    display: flex;
}

.nav-items > span {
    text-transform: uppercase;
    font-weight: 100;
    font-size: 24px;
    margin-left: 1rem;
}
</style>
