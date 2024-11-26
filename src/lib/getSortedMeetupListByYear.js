import { getYear } from 'date-fns'
import { parseFilesInDirectory, parseMeetupDate } from './utils'
import { MEETUPS_DIRECTORY } from './utils/constants'

const currentYear = new Date().getFullYear()

export function getSortedMeetupListByYear(year = currentYear) {
    const allFilesData = parseFilesInDirectory({ directory: MEETUPS_DIRECTORY })

    return allFilesData
        .map((meetup) => ({
            ...meetup,
            date: parseMeetupDate(meetup.date),
        }))
        .filter((meetup) => meetup.date && getYear(meetup.date) === year)
        .sort((a, b) => b.date - a.date)
}

export function getPreviousYears() {
    const allFilesData = parseFilesInDirectory({ directory: MEETUPS_DIRECTORY })
    const previousYears = allFilesData
        .map((meetup) => parseMeetupDate(meetup.date).getFullYear())
        .filter((year) => year !== currentYear)

    return [...new Set(previousYears)]
}
