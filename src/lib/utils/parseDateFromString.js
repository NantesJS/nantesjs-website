import { isValid, parse } from 'date-fns'
import { fr } from 'date-fns/locale'

/**
 * Parses a date string into a Date object. Returns null if the string is invalid or empty.
 *
 * @param {string} dateString - The date string to parse.
 * @returns {Date|null} The parsed date, or null if invalid.
 */
export function parseDateFromString (dateString) {
    if (typeof dateString !== 'string' || dateString.trim() === '') {
        console.warn('Invalid date string provided:', dateString)
        return null
    }

    const date = parse(dateString, 'dd/MM/yyyy', new Date(), { locale: fr })

    if (!isValid(date)) {
        console.warn(`Invalid date format for string: "${dateString}"`)
        return null
    }

    return date
}
