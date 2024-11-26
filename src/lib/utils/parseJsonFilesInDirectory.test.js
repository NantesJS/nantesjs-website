import { describe, it, expect, vi, beforeEach } from 'vitest'
import { parseJsonFilesInDirectory } from './parseJsonFilesInDirectory'
import * as utils from './'

vi.mock('./getJsonFilenames.js', () => ({
    getJsonFilenames: vi.fn()
}))

vi.mock('./readJsonFileFromDirectory.js', () => ({
    readJsonFileFromDirectory: vi.fn()
}))
const mockFiles = [ 'test1.json', 'test2.json' ]

const mockFileContents = [
    JSON.stringify({ title: 'Test 1' }),
    JSON.stringify({ title: 'Test 2' })
]

describe('parseJsonFilesInDirectory', () => {
    beforeEach(() => {
        vi.resetAllMocks()
    })

    it('should correctly parse json files in a directory', () => {
        // given
        utils.getJsonFilenames.mockReturnValue(mockFiles)
        utils.readJsonFileFromDirectory.mockImplementation(({ filename }) => {
            return mockFileContents[mockFiles.indexOf(filename)]
        })
        // when
        const result = parseJsonFilesInDirectory({ directory: '/test/dir' })
        console.log(result)
        // then
        expect(result).toEqual([
            { id: 'test1', title: 'Test 1' },
            { id: 'test2', title: 'Test 2' }
        ])
    })

    it('should return an empty array for an empty directory', () => {
        // given
        utils.getJsonFilenames.mockReturnValue([])
        // when
        const result = parseJsonFilesInDirectory({ directory: '/empty/dir' })
        // then
        expect(result).toEqual([])
    })

    it('should handle file read errors gracefully', () => {
        // given
        utils.getJsonFilenames.mockReturnValue(['test1.md'])
        utils.readJsonFileFromDirectory.mockImplementation(() => {
            throw new Error('File read error')
        })
        // when
        const result = parseJsonFilesInDirectory({ directory: '/test/dir' })
        // then
        expect(result).toEqual([])
    })
})
