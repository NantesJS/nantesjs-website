import {
  get,
  getById
} from './utils.js'

const resource = 'meetups'

export const getMeetupById = getById(resource)
export const getMeetups = get(resource)
