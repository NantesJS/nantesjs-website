import { getJsonFilenames } from './getJsonFilenames'
import { readJsonFileFromDirectory } from './readJsonFileFromDirectory'

/**
 * Parses files in a given directory and returns their data.
 *
 * @typedef {Object} FileData
 * @property {string} id - L'identifiant du fichier, extrait du nom du fichier.
 * @property {Object} fileContents - Le contenu du fichier JSON.
 * @param {string} directory - Le répertoire où chercher les fichiers.
 * @returns {FileData[]} - Un tableau d'objets contenant les données extraites des fichiers JSON.
 *
 */
export function parseJsonFilesInDirectory ({ directory }) {
    const jsonFilenames = getJsonFilenames(directory)

    return jsonFilenames.map((filename) => {
        const fileData = extractJsonFileData(directory, filename)
        if (fileData) {
            return fileData
        }
    }).filter(Boolean) // Enlever les valeurs `null`
}

/**
 * Extracts the data from a markdown file.
 *
 * @param {string} directory - The directory where the file is located.
 * @param {string} filename - The name of the file.
 * @returns {object|null} The extracted file data or null in case of an error.
 */
function extractJsonFileData (directory, filename) {
    try {
        const jsonContent = readJsonFileFromDirectory({ directory, filename })
        const fileContents = JSON.parse(jsonContent)
        const id = filename.replace(/\.json$/, '')

        return { id, ...fileContents }
    } catch (error) {
        throw new Error(`File ${filename} could not be processed`)
    }
}
