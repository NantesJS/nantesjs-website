import { getMeetupList } from '@/lib'

const currentYear = new Date().getFullYear()

/**
 * Retrieves a list of unique years (other than the current year) from the meetup data.
 *
 * @returns {number[]} - A sorted array of previous years in descending order.
 */
export function getPastMeetupYears() {
  const allFilesData = getMeetupList()

  const previousYears = allFilesData
    .map((meetup) => {
      return meetup.date ? meetup.date.getFullYear() : null
    })
    .filter((year) => year && year !== currentYear)

  return [...new Set(previousYears)].sort((a, b) => b - a)
}
