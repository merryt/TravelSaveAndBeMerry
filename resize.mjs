#!/usr/bin/env zx

// this file is written with https://github.com/google/zx
void (async function () {
    await fs.readdirSync('./static/images/').forEach(async (element) => {
        const width =
            await $`identify -format "%[fx:w]" ./static/images/${element}`
        if (width > 2000) {
            console.log(chalk.blue(element))
            await $`convert -resize 2000x ./static/images/${element} ./static/images/${element}`
        }
    })
})()
