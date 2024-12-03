import fs from 'fs'
import path from 'path'

/**
 * Gets filenames from a given directory.
 * Filters to include only json files.
 *
 * @param {string} directory - The directory to read from.
 * @returns {string[]} - An array of json filenames.
 */
export function getJsonFilenames(directory) {
  try {
    const jsonFileList = fs
      .readdirSync(directory)
      .filter((file) => path.parse(file).ext === '.json')

    return jsonFileList.map((file) => path.parse(file).name)
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error)
    return []
  }
}
