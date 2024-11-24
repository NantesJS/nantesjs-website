import fs from 'fs'
import path from 'path'

/**
 * Reads and returns the content of a file. If an error occurs, logs the error and returns null.
 *
 * @param {string} directory - The directory where the file is located.
 * @param {string} filename - The name of the file to read.
 * @returns {null|string} The file's contents as a string, or null if an error occurs.
 */
export function readFileFromDirectory ({ directory, filename }) {
    if (typeof directory !== 'string' || typeof filename !== 'string') {
        console.error('Invalid directory or filename')
        return null
    }

    const fullPath = path.join(directory, filename)

    try {
        return fs.readFileSync(fullPath, 'utf8')
    } catch (error) {
        console.error(`Error reading file ${fullPath}:`, error)
        return null
    }
}
