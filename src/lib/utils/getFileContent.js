import fs from 'fs'
import path from 'path'
import { MEETUPS_DIRECTORY } from '../utils/constants.js'

/**
 * Reads and returns the content of a json file. If an error occurs, logs the error and returns null.
 *
 * @param {string} directory - The directory where the file is located.
 * @param {string} filename - The name of the file to read.
 * @returns {null|string} The file's contents as a string, or null if an error occurs.
 */
export function getFileContent (filename, directory = MEETUPS_DIRECTORY) {
    const fullPath = path.join(directory, `${filename}.json`)

    try {
        const jsonContent = fs.readFileSync(fullPath, 'utf8')
        return JSON.parse(jsonContent)
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.warn(`File not found: ${fullPath}`)
        } else {
            console.error(`Error reading file ${fullPath}:`, error)
        }
        return null
    }
}
