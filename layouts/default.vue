<template>
    <div>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Montserrat:wght@100;400;700&display=swap"
            rel="stylesheet"
        />
        <nuxt />
    </div>
</template>

<style>
:root {
    --green-3: #2a5655;
    --green-2: #3f8c7b;
    --green-1: #c0d8c5;
    --yellow-2: #f0ead9;
    --yellow-1: #f5f3f1;
    --blue-2: #35495e;
    --blue-3: #f4f8fb;
    --white: #ffffff;
    --blackish: #242424;
    --shadowColor: 0px 0px 10px 4px rgba(0, 0, 0, 0.08);

    --small-margin: 19px;
    --large-margin: 58px;

    --border-radius-size: 10px;
}

html {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background-color: var(--blue-3);
    background-color: var(--yellow-1);
}

html.wf-loading * {
    opacity: 0;
}

.display {
    /* we are bringing in just 700 weight */
    font-family: 'Amatic SC', sans-serif;
    font-weight: 700;
    font-display: swap;
}

.sans-serif {
    /* we are bringing in 100 400 700 */
    font-family: 'Montserrat', sans-serif;
    font-display: swap;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid var(--green-2);
    color: var(--green-2);
    text-decoration: none;
    padding: 10px 30px;
}

.button--green:hover {
    color: #fff;
    background-color: var(--green-2);
}

.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid var(--blue-2);
    color: var(--blue-2);
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
}

.button--grey:hover {
    color: #fff;
    background-color: var(--blue-2);
}

.cards {
    margin: 0 var(--large-margin);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    animation: 1s appear;
    width: 30%;
    overflow: hidden;
    box-shadow: var(--shadowColor);
    background-color: var(--white);
    margin-top: var(--large-margin);
    border-radius: var(--border-radius-size);
}

@media only screen and (max-width: 1000px) {
    .card {
        width: 48%;
    }
}

@media only screen and (max-width: 700px) {
    .card {
        width: 100%;
    }
}

.card-img {
    width: 100%;
    max-height: 120px;
    object-fit: cover;
}
.card-header-link {
    text-decoration: none;
    color: var(--green-3);
}

h2.card-header {
    margin: 0 var(--small-margin);
    color: var(--green-3);
    cursor: pointer;
}
.card > p {
    margin-left: var(--small-margin);
    margin-right: var(--small-margin);
    flex-grow: 5;
}
.card-author-profile {
    margin: var(--small-margin);
    display: flex;
    align-items: center;
}
.profile-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
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
