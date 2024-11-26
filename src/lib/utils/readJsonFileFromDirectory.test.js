import path from 'path'
import fs from 'fs'
import { describe, expect, it, beforeEach, afterEach } from 'vitest'
import { readJsonFileFromDirectory } from './readJsonFileFromDirectory'

const testDirectory = path.join(process.cwd(), 'src/data/test')
const testFilename = 'test1.json'
const testFileContent = JSON.stringify({ title: 'Test 1' })

const invalidDirectory = 123
const invalidFilename = null

describe('readJsonFileFromDirectory', () => {
    beforeEach(() => {
        fs.mkdirSync(testDirectory, { recursive: true })
        fs.writeFileSync(path.join(testDirectory, testFilename), testFileContent)
    })

    afterEach(() => {
        fs.rmSync(testDirectory, { recursive: true })
    })

    it('should correctly read and return file content', () => {
        const result = readJsonFileFromDirectory({
            directory: testDirectory,
            filename: testFilename
        })

        expect(result).toEqual(testFileContent)
    })

    it('should return null for invalid input types', () => {
        const result = readJsonFileFromDirectory({
            directory: invalidDirectory,
            filename: invalidFilename
        })

        expect(result).toBeNull()
    })
})
