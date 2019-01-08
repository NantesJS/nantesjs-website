import {
  get,
  getById
} from './utils.js'

const resource = 'talks'

export const getTalkById = getById(resource)
export const getTalks = get(resource)
