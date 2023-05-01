exports.handler = async (event, context, callback) => {
    // example files to grab
    // 2020-11-09-about-us
    // 2023-04-19-türkiye-part-ii-cappadocia-and-istanbul
    // 2023-03-30-how-to-launch-a-boat-in-fethiye
    const { postUrl } = event.queryStringParameters
    console.log(`getting ${postUrl}`)

    try {
        const {
            date,
            updatedDate,
            body,
            description,
            title,
            thumbnail,
            author,
            tag,
        } = await require(`../static/posts/${postUrl}.json`)
        let responseBody = '---\n'
        if (date) {
            responseBody += `date: ${date} \n`
        }
        if (updatedDate) {
            responseBody += `updatedDate: ${updatedDate}\n`
        }
        if (description) {
            responseBody += `description: ${description}\n`
        }
        if (title) {
            responseBody += `title: ${title}\n`
        }
        if (thumbnail) {
            responseBody += `title: ${thumbnail}\n`
        }
        if (author) {
            responseBody += `authors: ${author}\n`
        }
        if (tag) {
            responseBody += `tags: ${tag}\n`
        }

        responseBody += '---\n'

        responseBody += body.replace(/[^\x00-\x7F]/g, '')

        callback(null, {
            statusCode: 200,
            body: responseBody,
        })
    } catch {
        callback(null, {
            statusCode: 200,
            body: 'it goofed up, you probably used the wrong query paramater. try postUrl=2020-11-09-about-us',
        })
    }
}
