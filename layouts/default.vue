<template>
    <div>
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
    background-color: var(--yellow-1);
}
.display {
    font-family: 'Amatic SC', cursive;
}

.serif {
    font-family: 'Montserrat', sans-serif;
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
</style>
