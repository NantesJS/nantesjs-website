import { parseDateFromString, getFileContent } from '@/lib/utils'
import { MAIN_DIRECTORY } from '@/lib/utils/constants'

/**
 * Retrieves a specific meetup by its id.
 *
 * @param {number} id - The id of the meetup
 * @returns {Object|null} An object containing meetup, or `null` if an error occurs.
 * @throws {Error} If the provided id is invalid.
 */

export function getMeetupById({ id }) {
  const meetup = getFileContent(`meetup-${id}`)

  if (meetup) {
    const sponsors = getFileContent('sponsors', MAIN_DIRECTORY)
    const hostings = getFileContent('hosting', MAIN_DIRECTORY)

    return {
      ...meetup,
      date: parseDateFromString(meetup.date),
      sponsor:
                sponsors.find((sponsor) => sponsor.id === meetup.sponsor) ||
                null,
      hosting:
                hostings.find((hosting) => hosting.id === meetup.hosting) ||
                null,
    }
  }
}
