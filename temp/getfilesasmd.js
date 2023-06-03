const fs = require('fs')
const http = require('http')

const listOfAllPosts = [
    '2023-04-19-türkiye-part-ii-cappadocia-and-istanbul',
    '2023-03-31-türkiye-part-i-fethiye-and-the-turquoise-coast',
    '2023-03-30-how-to-launch-a-boat-in-fethiye',
    '2023-03-02-lisbon-lagos-and-portimao…we’re-in-portugal',
    '2023-02-13-malta-month-of-merry-ment-part-ii',
    '2023-01-28-malta-month-of-merry-ment',
    '2022-11-11-merry-midwest-roadtrip-part-4-dc',
    '2022-10-31-merry-midwest-roadtrip-part-2-michigan',
    '2022-10-19-merry-midwest-roadtrip-part-3-cleveland',
    '2022-10-01-merry-midwest-roadtrip-part-i-north-shore-of-lake-superior',
    '2022-09-29-back-to-the-states',
    '2022-07-07-ev6-germany-2022',
    '2022-07-07-austria-to-visit-dylan',
    '2022-05-31-switzerland-2022-bike-trip',
    '2022-05-17-ev6-france-and-the-first-500-miles-of-our-journey-are-behind-us',
    '2022-05-01-eurovelo-3',
    '2022-04-27-getting-started-on-our-bike-trip',
    '2022-04-21-queretaro',
    '2022-04-11-puebla',
    '2022-03-04-san-cristóbal-de-las-casas',
    '2022-02-05-mexico-city-part-two-and-a-little-nc-and-denver',
    '2022-01-22-mexico-city-part-one',
    '2021-12-10-guadalajara-mexico-2021',
    '2021-12-02-merida',
    '2021-11-12-valladolid',
    '2021-11-05-puerto-morelos',
    '2021-10-26-playa-del-carmen-2021',
    '2021-10-18-tulum-mexico-2021',
    '2021-10-18-selling-all-our-stuff',
    '2021-04-07-shavano-tabeguache-traverse',
    '2021-04-07-packing-lite-list-for-him',
    '2021-04-07-packing-lite-list-for-her',
    '2021-04-07-mount-of-the-holy-cross',
    '2021-04-07-missouri-mountain',
    '2021-04-07-lost-creek-wilderness',
    '2021-04-07-la-plata',
    '2021-04-07-crested-butte-to-crystal-mills-via-schofield-pass',
    '2021-04-06-taking-a-sebatical',
    '2021-04-06-stuck-in-the-snow-after-mt-democrat',
    '2021-04-06-lessons-learned-living-in-490-square-feet',
    '2021-04-01-white-ranch-open-space',
    '2021-04-01-our-14ers-list',
    '2021-04-01-north-table-mountain',
    '2021-04-01-mt-huron',
    '2021-04-01-mt-bierstadt',
    '2021-04-01-dalmatian-coast-for-the-frugal-traveler',
    '2021-04-01-croatia-dalmatia-region-plan-your-own-adventure',
    '2021-04-01-a-correction-is-coming',
    '2020-11-09-about-us',
]

listOfAllPosts.forEach((slug) => {
    const target = `http://localhost:8888/.netlify/functions/post-to-md?postUrl=${slug}`
    http.get(target, (res) => {
        const file = fs.createWriteStream(`${slug}.md`)
        res.pipe(file)
        file.on('finish', () => {
            file.close()
            console.log(`File downloaded!`)
        })
    })
})
