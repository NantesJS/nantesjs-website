import { parseMeetupDate, readFileFromDirectory } from '@/lib/utils'
import { MEETUPS_DIRECTORY } from '@/lib/utils/constants'

export async function getMeetupData (id) {
    const jsonContent = readFileFromDirectory({
        directory: MEETUPS_DIRECTORY,
        filename: `meetup-${id}.json`
    })
    const fileContents = JSON.parse(jsonContent)

    return {
        ...fileContents,
        id,
        date: parseMeetupDate(fileContents.date)
    }
}
