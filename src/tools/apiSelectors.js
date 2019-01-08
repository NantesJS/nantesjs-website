const { getUniqueEntities } = require('./utils')

const getCorporations = getUniqueEntities(['venue', 'sponsor'])

const getSpeakers = getUniqueEntities('speakers')

const getTalks = getUniqueEntities('talks')

module.exports = {
  getCorporations,
  getSpeakers,
  getTalks,
}
