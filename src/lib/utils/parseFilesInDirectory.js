import { getFilenames } from './getFilenames.js'
import { readFileFromDirectory } from './readFileFromDirectory.js'

/**
 * Extracts the data from a markdown file.
 *
 * @param {string} directory - The directory where the file is located.
 * @param {string} filename - The name of the file.
 * @returns {object|null} The extracted file data or null in case of an error.
 */
function extractFileData (directory, filename) {
    try {
        const jsonContent = readFileFromDirectory({ directory, filename })
        const fileContents = JSON.parse(jsonContent)
        const id = filename.replace(/\.json$/, '')

        return { id, ...fileContents }
    } catch (error) {
        console.error(`Error processing file ${filename}:`, error)
        return null
    }
}

/**
 * Parses files in a given directory and returns their data.
 *
 * @param {string} directory - The directory to parse files from.
 * @returns {object[]} - An array of objects containing file data.
 */
export function parseFilesInDirectory ({ directory }) {
    const markdownFiles = getFilenames(directory)
    const filesData = markdownFiles.map((filename) => extractFileData(directory, filename))

    return filesData.filter((data) => data != null)
}
