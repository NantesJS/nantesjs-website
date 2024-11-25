import { getYear } from 'date-fns'
import { parseFilesInDirectory, parseMeetupDate } from './utils'
import { MEETUPS_DIRECTORY } from './utils/constants'

export function getSortedMeetupListByYear (year) {
    const currentYear = year || new Date().getFullYear()
    const allFilesData = parseFilesInDirectory({ directory: MEETUPS_DIRECTORY })

    return allFilesData
        .map((meetup) => ({
            ...meetup,
            date: parseMeetupDate(meetup.date)
        }))
        .filter((meetup) => meetup.date && getYear(meetup.date) === currentYear)
        .sort((a, b) => b.date - a.date)
}

export function getPreviousYears () {
    const currentYear = new Date().getFullYear()
    const allFilesData = parseFilesInDirectory({ directory: MEETUPS_DIRECTORY })

    const parsedData = allFilesData
        .map((meetup) => ({
            year: parseMeetupDate(meetup.date).getFullYear()
        }))
        .filter((year) => year !== currentYear)

    return [...new Set(parsedData.map((meetup) => meetup.year))]
}
