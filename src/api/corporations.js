import {
  get,
  getById
} from './utils.js'

const resource = 'corporations'

export const getCorporationById = getById(resource)
export const getCorporations = get(resource)
