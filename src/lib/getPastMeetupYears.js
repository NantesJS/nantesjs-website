import { parseJsonFilesInDirectory, parseDateFromString } from '@/lib/utils'
import { MEETUPS_DIRECTORY } from '@/lib/utils/constants'

const currentYear = new Date().getFullYear()

/**
 * Retrieves a list of unique years (other than the current year) from the meetup data.
 *
 * @returns {number[]} - A sorted array of previous years in descending order.
 */
export function getPastMeetupYears () {
    const allFilesData = parseJsonFilesInDirectory({ directory: MEETUPS_DIRECTORY })

    const previousYears = allFilesData
        .map((meetup) => {
            const parsedDate = parseDateFromString(meetup.date)
            return parsedDate ? parsedDate.getFullYear() : null
        })
        .filter((year) => year && year !== currentYear)

    return [...new Set(previousYears)].sort((a, b) => b - a)
}
