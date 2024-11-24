import path from 'path'
import fs from 'fs'
import { describe, expect, it, beforeEach, afterEach } from 'vitest'
import { getFilenames } from './getFilenames.js'

const testDir = path.join(process.cwd(), 'src/data/test')
const emptyDir = path.join(process.cwd(), 'src/data/test/empty')
const nonExistentDir = path.join(testDir, 'nonexistent')

const mockFiles = [
    { name: 'test1.json', content: JSON.stringify({ title: 'Test 1' }) },
    { name: 'test2.json', content: JSON.stringify({ title: 'Test 2' }) },
    { name: 'test.txt', content: 'Non-json file' },
    { name: '.hiddenFile', content: 'Hidden file' }
]

describe('getFilenames', () => {
    beforeEach(() => {
        fs.mkdirSync(testDir, { recursive: true })
        fs.mkdirSync(emptyDir)

        mockFiles.forEach(({ name, content }) => {
            fs.writeFileSync(path.join(testDir, name), content)
        })
    })

    afterEach(() => {
        fs.rmSync(testDir, { recursive: true })
    })

    it('should return an array of json filenames', () => {
        const result = getFilenames(testDir)

        expect(result.length).toBe(2)
        expect(result).toEqual([
            'test1.json',
            'test2.json'
        ])
    })

    it('should return an empty array for an empty directory', () => {
        const result = getFilenames(emptyDir)

        expect(result).toEqual([])
    })
})
