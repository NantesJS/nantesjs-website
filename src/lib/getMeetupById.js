import { getDataById } from '@/lib'
import { parseDateFromString, readJsonFileFromDirectory } from '@/lib/utils'
import { MEETUPS_DIRECTORY } from '@/lib/utils/constants'

/**
 * Retrieves a specific meetup by its id.
 *
 * @param {number} id - The id of the meetup
 * @returns {Object|null} An object containing meetup, or `null` if an error occurs.
 * @throws {Error} If the provided id is invalid.
 */

export function getMeetupById ({ id }) {
    if (typeof id !== 'number' || id <= 0) {
        throw new Error(`Invalid ${type} id`)
    }

    try {
        const jsonContent = readJsonFileFromDirectory({
            directory: MEETUPS_DIRECTORY,
            filename: `meetup-${id}.json`
        })

        const fileContents = JSON.parse(jsonContent)

        const parsedDate = parseDateFromString(fileContents.date)
        if (!parsedDate) {
            console.warn(`Invalid date for meetup: ${JSON.stringify(fileContents.id)}`)
        }

        const sponsor = getDataById({ id: fileContents.sponsor, type: 'sponsors' })
        const hosting = getDataById({ id: fileContents.hosting, type: 'hosting' })

        return {
            ...fileContents,
            date: parsedDate,
            sponsor,
            hosting
        }
    } catch (error) {
        console.error(`Error reading or parsing meetup for id: ${id}`, error)
        return null
    }
}
