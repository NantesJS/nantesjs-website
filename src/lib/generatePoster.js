import path from 'path'
import fs from 'fs'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import nodeHtmlToImage from 'node-html-to-image'
import { POSTERS_DIRECTORY, TEMPLATE_DIRECTORY } from '../lib/utils/constants.js'
import { parseDateFromString } from '../lib/utils/parseDateFromString.js'

function loadSvgImage (imagePath) {
    const image = fs.readFileSync(imagePath, 'utf-8')
    const base64Image = Buffer.from(image).toString('base64')
    return 'data:image/svg+xml;base64,' + base64Image
}

function loadImage (imagePath) {
    const image = fs.readFileSync(imagePath)
    const base64Image = new Buffer.from(image).toString('base64')
    return 'data:image/jpeg;base64,' + base64Image
}

const logoBase64 = loadImage(path.join(process.cwd(), 'public/hero-logotype.png'))
const svgLogoBase64 = loadSvgImage(path.join(process.cwd(), 'public/nantesjs-logo.svg'))
const crossedSwords = loadSvgImage(path.join(process.cwd(), 'public/swords.svg'))

export async function generatePoster (meetup) {
    const outputPath = path.join(POSTERS_DIRECTORY, `meetup-${meetup.id}-poster.jpg`)

    // If poster already exists, we don't regenerate it
    if (fs.existsSync(outputPath)) return outputPath

    const templateFile = path.join(TEMPLATE_DIRECTORY, `${meetup.type || 'meetup'}-poster.html`)
    const talks = meetup.talks.map((talk) => ({
        ...talk,
        speakers: talk.speakers.map((speaker) => speaker.name).join(', ')
    }))

    await nodeHtmlToImage({
        output: outputPath,
        html: fs.readFileSync(templateFile).toString('utf8'),
        content: {
            ...meetup,
            hosting: meetup.hosting ? meetup.hosting.name : '',
            sponsor: meetup.sponsor ? meetup.sponsor.name : '',
            day: format(meetup.date, 'dd', { locale: fr }),
            month: format(meetup.date, 'MMM', { locale: fr }),
            logo: meetup.type ? logoBase64 : svgLogoBase64,
            talks,
            crossedSwords
        }
    })

    return outputPath
}
