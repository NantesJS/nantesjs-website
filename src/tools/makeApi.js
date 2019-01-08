const {
  readdirSync,
  readFileSync,
} = require('fs')

const path = require('path')

const { safeLoad } = require('js-yaml')

const { isEmpty } = require('lodash')

const {
  createResourceWithEntities,
  mkdir,
} = require('./utils')

const {
  getCorporations,
  getSpeakers,
  getTalks,
} = require('./apiSelectors')

const DATA_DIR = path.join(__dirname, '..', '..', 'datas', 'meetups')
const meetups = readdirSync(DATA_DIR)
  .filter(file => /\.md$/.test(file))
  .map(file => (
    safeLoad(readFileSync(path.join(DATA_DIR, file)))
  ))

if (isEmpty(meetups)) {
  throw Error(`Could not generate API:
  no markdown file found in ${ __dirname }.`)
}

const BUILD_DIR = path.join(__dirname, '..', '..', 'public')
mkdir(BUILD_DIR)

const API_DIR = path.join(BUILD_DIR, 'api')
mkdir(API_DIR)

createResourceWithEntities(
  'meetups',
  meetups,
  ['date', 'status', 'title'],
  API_DIR
)

const corporations = getCorporations(meetups)
createResourceWithEntities('corporations', corporations, 'name', API_DIR)

const talks = getTalks(meetups)
createResourceWithEntities('talks', talks, 'title', API_DIR)

const speakers = getSpeakers(talks)
createResourceWithEntities('speakers', speakers, 'name', API_DIR)
