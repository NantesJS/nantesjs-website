import fs from 'fs'

/**
 * Gets filenames from a given directory.
 * Filters to include only json files.
 *
 * @param {string} directory - The directory to read from.
 * @returns {string[]} - An array of json filenames.
 */
export function getFilenames (directory) {
    if (typeof directory !== 'string') {
        console.error('Invalid type for directory')
        return []
    }

    try {
        const fileNames = fs.readdirSync(directory)
        return fileNames.filter((filename) => filename.endsWith('.json'))
    } catch (error) {
        console.error(`Error reading directory ${directory}:`, error)
        return []
    }
}
