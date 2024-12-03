import fs from 'fs'
import path from 'path'
import { generatePoster } from '../lib/generatePoster.js'
import { POSTERS_DIRECTORY } from '../lib/utils/constants.js'
import { getMeetupList } from '../lib/getMeetupList.js'

async function main () {
    console.log('🚛 Removing last poster...')

    const folderContent = fs.readdirSync(POSTERS_DIRECTORY)

    if (folderContent.length > 0) {
        folderContent.forEach((file) => {
            fs.unlink(path.join(POSTERS_DIRECTORY, file), (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('🧹Poster deleted');
            })
        })
    } else {
        console.log('∅ No poster to delete')
    }

    console.log('🔍 Checking for the last meetup...')

    const meetups = getMeetupList()

    const posterToGenerate = meetups.find(({ status }) => status === 'next')

    console.log(`🚀 Generating poster...`)
    await generatePoster(posterToGenerate)

    console.log(`✅ Poster generated for ${posterToGenerate.title}`)
}

main().catch((error) => {
    console.error('❌ Error generating posters:', error)
})
