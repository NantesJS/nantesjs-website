import { describe, expect, it } from 'vitest'
import { parseDateFromString } from './parseDateFromString'

describe('parseDateFromString', () => {
  it('should return a valid Date for a date string', () => {
    const result = parseDateFromString('25/12/2024')
    expect(result).toBeInstanceOf(Date)
    expect(result?.getFullYear()).toBe(2024)
    expect(result?.getMonth()).toBe(11) // Décembre est le mois 11 (indexé à 0)
    expect(result?.getDate()).toBe(25)
  })

  it('should return null for an incorrect date string format', () => {
    const result = parseDateFromString('12-25-2024')
    expect(result).toBeNull()
  })

  it('should return null for an invalid date string', () => {
    const result = parseDateFromString('32/12/2024') // Jour invalide
    expect(result).toBeNull()
  })

  it('should return null for a completely invalid string', () => {
    const result = parseDateFromString('invalid-date')
    expect(result).toBeNull()
  })

  it('should return null for an empty string', () => {
    const result = parseDateFromString('')
    expect(result).toBeNull()
  })

  it('should return null for a null value', () => {
    const result = parseDateFromString(null)
    expect(result).toBeNull()
  })

  it('should return null for undefined', () => {
    const result = parseDateFromString(undefined)
    expect(result).toBeNull()
  })
})
