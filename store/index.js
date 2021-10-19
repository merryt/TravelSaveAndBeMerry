export const state = () => ({
    blogPosts: [],
})

export const mutations = {
    setBlogPosts(state, list) {
        state.blogPosts = list
    },
    setAuthors(state, list) {
        state.authors = list
    },
}

export const actions = {
    async nuxtServerInit({ commit }) {
        const postFiles = await require.context(
            '~/static/posts/',
            false,
            /\.json$/,
        )
        const blogPosts = postFiles.keys().map((key) => {
            const res = postFiles(key)
            res.slug = key.slice(2, -5)
            return res
        })

        await commit('setBlogPosts', blogPosts.reverse())
        const authorFiles = await require.context(
            '~/static/authors/',
            false,
            /\.json/,
        )
        const authors = authorFiles.keys().map((key) => {
            const res = authorFiles(key)
            res.slug = key.slice(2, -5)
            return res
        })
        await commit('setAuthors', authors)
    },
}
