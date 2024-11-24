import { describe, it, expect, vi, beforeEach } from 'vitest'
import { parseFilesInDirectory } from './parseFilesInDirectory'
import * as utils from './'

vi.mock('./getFilenames.js', () => ({
    getFilenames: vi.fn()
}))

vi.mock('./readFileFromDirectory.js', () => ({
    readFileFromDirectory: vi.fn()
}))
const mockFiles = [ 'test1.json', 'test2.json' ]

const mockFileContents = [
    JSON.stringify({ title: 'Test 1' }),
    JSON.stringify({ title: 'Test 2' })
]

describe('parseFilesInDirectory', () => {
    beforeEach(() => {
        vi.resetAllMocks()
    })

    it('should correctly parse json files in a directory', () => {
        // given
        utils.getFilenames.mockReturnValue(mockFiles)
        utils.readFileFromDirectory.mockImplementation(({ filename }) => {
            return mockFileContents[mockFiles.indexOf(filename)]
        })
        // when
        const result = parseFilesInDirectory({ directory: '/test/dir' })
        console.log(result)
        // then
        expect(result).toEqual([
            { id: 'test1', title: 'Test 1' },
            { id: 'test2', title: 'Test 2' }
        ])
    })

    it('should return an empty array for an empty directory', () => {
        // given
        utils.getFilenames.mockReturnValue([])
        // when
        const result = parseFilesInDirectory({ directory: '/empty/dir' })
        // then
        expect(result).toEqual([])
    })

    it('should handle file read errors gracefully', () => {
        // given
        utils.getFilenames.mockReturnValue(['test1.md'])
        utils.readFileFromDirectory.mockImplementation(() => {
            throw new Error('File read error')
        })
        // when
        const result = parseFilesInDirectory({ directory: '/test/dir' })
        // then
        expect(result).toEqual([])
    })
})
