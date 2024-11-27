import { readJsonFileFromDirectory } from '@/lib/utils'
import { MAIN_DIRECTORY } from '@/lib/utils/constants'

/**
 * Retrieves a specific type of data by its id.
 *
 * @param {number} id - The id of the data
 * @param {string} type - The type of the data
 * @returns {Object|null} An object containing data, or `null` if an error occurs.
 * @throws {Error} If the provided id is invalid.
 */

export function getDataById ({ id, type }) {
    if (typeof id !== 'number' || id <= 0) {
        throw new Error(`Invalid ${type} id`)
    }


    try {
        const jsonContent = readJsonFileFromDirectory({
            directory: MAIN_DIRECTORY,
            filename: `${type}.json`
        })
        const fileContents = JSON.parse(jsonContent)

        return fileContents.find((content) => content.id === id)
    } catch (error) {
        console.error(`Error reading or parsing ${type} data for ID: ${id}`, error)
        return null
    }
}
