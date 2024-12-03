import { getYear } from 'date-fns'
import { MAIN_DIRECTORY, MEETUPS_DIRECTORY } from '../lib/utils/constants.js'
import { getFileContent } from '../lib/utils/getFileContent.js'
import { getJsonFilenames } from '../lib/utils/getJsonFilenames.js'
import { parseDateFromString } from '../lib/utils/parseDateFromString.js'

const currentYear = new Date().getFullYear()
const sponsors = getFileContent('sponsors', MAIN_DIRECTORY)
const hostings = getFileContent('hosting', MAIN_DIRECTORY)

/**
 * Retrieves a sorted list of meetups filtered by the specified year.
 *
 * @param {number} [year=currentYear] - The year to filter meetups by.
 * @returns {Array<Object>} - A sorted array of meetups, each containing original data and a parsed `date` field.
 * @throws {Error} If the provided year is invalid.
 */
export function getMeetupListByYear(year = currentYear) {
  if (!Number.isInteger(year) || year <= 0) {
    throw new Error(`Invalid year provided: ${year}`)
  }

  const meetupList = getMeetupList()

  return meetupList
    .filter(
      (meetup) => meetup.date && getYear(new Date(meetup.date)) === year
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

/**
 * Parses files in a given directory and returns their data.
 *
 * @typedef {Object} FileData
 * @property {string} id - L'identifiant du fichier, extrait du nom du fichier.
 * @property {Object} fileContents - Le contenu du fichier JSON.
 * @returns {FileData[]} - Un tableau d'objets contenant les données extraites des fichiers JSON.
 *
 */
export function getMeetupList() {
  const jsonFilenames = getJsonFilenames(MEETUPS_DIRECTORY)

  return jsonFilenames
    .map((filename) => {
      const meetup = getFileContent(filename)

      if (meetup) {
        return {
          ...meetup,
          date: parseDateFromString(meetup.date),
          sponsor:
                        sponsors.find((s) => s.id === meetup.sponsor) || null,
          hosting:
                        hostings.find((h) => h.id === meetup.hosting) || null,
        }
      }
    })
    .filter(Boolean) // Enlever les valeurs `null`
}
