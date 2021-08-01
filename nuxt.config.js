export default {
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['@/plugins/vue-moment.js'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/markdownit'],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
    },
    markdownit: {
        injected: true,
        html: true,
        breaks: true,
    },
    generate: {
        routes: () => {
            const fs = require('fs')
            const path = require('path')
            return fs.readdirSync('./static/posts').map((file) => {
                return {
                    route: `/blog/${path.parse(file).name}`, // Return the slug
                    payload: require(`./static/posts/${file}`),
                }
            })
        },
    },
    target: 'static',
}
