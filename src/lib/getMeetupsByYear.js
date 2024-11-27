import { getYear } from 'date-fns'
import { parseJsonFilesInDirectory, parseDateFromString, readJsonFileFromDirectory } from './utils'
import { MEETUPS_DIRECTORY } from './utils/constants'
import { getMeetupById } from '@/lib'

const currentYear = new Date().getFullYear()

/**
 * Retrieves a sorted list of meetups filtered by the specified year.
 *
 * @param {number} [year=currentYear] - The year to filter meetups by.
 * @returns {Array<Object>} - A sorted array of meetups, each containing original data and a parsed `date` field.
 * @throws {Error} If the provided year is invalid.
 */
export function getMeetupsByYear (year = currentYear) {
    if (!Number.isInteger(year) || year <= 0) {
        throw new Error(`Invalid year provided: ${year}`)
    }

    const allFilesData = parseJsonFilesInDirectory({ directory: MEETUPS_DIRECTORY })

    const meetupList = allFilesData.map((meetup) => {
        return getMeetupById({ id: meetup.id })
    })

    return meetupList
        .filter((meetup) => meetup.date && getYear(meetup.date) === year)
        .sort((a, b) => b.date - a.date)
}
