import { parseDateFromString, readJsonFileFromDirectory } from '@/lib/utils'
import { MEETUPS_DIRECTORY } from '@/lib/utils/constants'

/**
 * Retrieves data for a specific meetup by its ID.
 *
 * @param {string} id - The ID of the meetup.
 * @returns {Object|null} An object containing meetup data, including the parsed date, or `null` if an error occurs.
 * @throws {Error} If the provided ID is invalid.
 */
export async function getMeetupById (id) {
    if (typeof id !== 'string' || id.trim() === '') {
        throw new Error('Invalid meetup ID')
    }

    try {
        const jsonContent = readJsonFileFromDirectory({
            directory: MEETUPS_DIRECTORY,
            filename: `meetup-${id}.json`
        })
        const fileContents = JSON.parse(jsonContent)

        return {
            ...fileContents,
            id,
            date: parseDateFromString(fileContents.date)
        }
    } catch (error) {
        console.error(`Error reading or parsing meetup data for ID: ${id}`, error)
        return null
    }
}
