#!/usr/bin/env zx
void (async function () {
    await fs.readdirSync('./static/imgs/').forEach(async (element) => {
        const width =
            await $`identify -format "%[fx:w]" ./static/imgs/${element}`
        if (width > 2000) {
            console.log(chalk.blue(element))
            await $`convert -resize 2000x ./static/imgs/${element} ./static/imgs/${element}`
        }
    })
})()
