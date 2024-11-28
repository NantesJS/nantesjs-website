import fs from 'fs'
import path from 'path'
import { generatePoster } from '../lib/generatePoster.js'
import { getFileContent } from '../lib/utils/getFileContent.js'
import { MEETUPS_DIRECTORY, POSTERS_DIRECTORY } from '../lib/utils/constants.js'
import { getJsonFilenames } from '../lib/utils/getJsonFilenames.js'

async function main () {
    console.log('🔍 Checking for new meetups without posters...')
    const fileNames = getJsonFilenames(MEETUPS_DIRECTORY)

    const meetups = fileNames
        .map((file) => {
            const meetup = getFileContent(file, MEETUPS_DIRECTORY)
            return {
                ...meetup,
                file
            }
        })

    const postersToGenerate = meetups.filter(({ id }) => {
        const posterPath = path.join(POSTERS_DIRECTORY, `meetup-${id}-poster.jpg`)
        return !fs.existsSync(posterPath)
    })

    console.log(`🚀 Generating ${postersToGenerate.length} posters...`)
    for (const meetup of postersToGenerate) {
        await generatePoster(meetup)
        console.log(`✅ Poster generated for ${meetup.file}`)
    }
}

main().catch((error) => {
    console.error('❌ Error generating posters:', error)
})
