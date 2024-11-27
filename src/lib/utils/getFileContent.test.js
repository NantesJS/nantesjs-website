import path from 'path'
import fs from 'fs'
import { describe, expect, it, beforeEach, afterEach } from 'vitest'
import { getFileContent } from './getFileContent'

const testDirectory = path.join(process.cwd(), 'src/data/test')
const testFilename = 'test1.json'
const testFileContent = JSON.stringify({ title: 'Test 1' })

const invalidDirectory = 123
const invalidFilename = null

describe('getFileContent', () => {
    beforeEach(() => {
        fs.mkdirSync(testDirectory, { recursive: true })
        fs.writeFileSync(path.join(testDirectory, testFilename), testFileContent)
    })

    afterEach(() => {
        fs.rmSync(testDirectory, { recursive: true })
    })

    it('should correctly read and return file content', () => {
        const result = getFileContent({
            directory: testDirectory,
            filename: testFilename
        })

        expect(result).toEqual(testFileContent)
    })

    it('should return null for invalid input types', () => {
        const result = getFileContent({
            directory: invalidDirectory,
            filename: invalidFilename
        })

        expect(result).toBeNull()
    })
})
