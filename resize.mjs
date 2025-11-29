#!/usr/bin/env node
import 'zx/globals'

// this file is written with https://github.com/google/zx
void (async function () {
    const files = fs.readdirSync('./static/images/')
    for (const element of files) {
        if (!element.match(/\.(jpg|jpeg|png|gif|webp)$/i)) continue;

        try {
            const output = await $`identify -format "%[fx:w]" ./static/images/${element}`
            const width = parseInt(output.stdout.trim())

            if (isNaN(width)) {
                console.warn(`Could not determine width for ${element}. Output: '${output.stdout}'`)
                continue
            }

            console.log(`File: ${element}, Width: ${width}`)

            if (width > 2000) {
                console.log(chalk.blue(`Resizing ${element}...`))
                await $`convert -resize 2000x ./static/images/${element} ./static/images/${element}`
            }
        } catch (error) {
            console.error(`Error processing ${element}:`, error)
        }
    }
})()
