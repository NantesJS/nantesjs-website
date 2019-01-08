import {
  get,
  getById
} from './utils.js'

const resource = 'speakers'

export const getSpeakerById = getById(resource)
export const getSpeakers = get(resource)
