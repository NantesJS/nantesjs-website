const {
  mkdirSync,
  writeFileSync,
} = require('fs')

const path = require('path')

const {
  flatMapDeep,
  flow,
  isEmpty,
  isNil,
  pick,
  reject,
  uniqBy,
  values,
} = require('lodash/fp')

const mkdir = dir => {
  try {
    mkdirSync(dir)
  } catch (e) {
    if (e.code !== 'EEXIST') throw e
  }
}

const createEntities = (name = 'entities', entities = [], rootDir = '.') => {
  const baseDir = path.join(rootDir, name)
  mkdir(baseDir)

  entities.forEach(({ id, ...entity }) => {
    const href = `/${ name }/${ id }.json`

    const entityJSON = {
      ...entity,
      href,
      id,
    }

    const fileName = path.join(baseDir, `${ id }.json`)
    writeFileSync(fileName, JSON.stringify(entityJSON))
  })
}

const createResource = (
  name = 'resource',
  entities = [],
  properties,
  rootDir = '.'
) => {
  if (isEmpty(properties)) return

  mkdir(rootDir)

  const pickProperties = pick(properties)

  const resource = entities.map(({ id, ...entity }) => {
    // eslint-disable-next-line no-console
    if (isNil(id)) console.warn(`Missing entity#ID in resource ${ name }.`)

    const href = `/${ name }/${ id }.json`

    const newEntity = pickProperties(entity)

    return {
      ...newEntity,
      href,
      id,
    }
  })

  const fileName = path.join(rootDir, `${ name }.json`)
  writeFileSync(fileName, JSON.stringify(resource))
}

const createResourceWithEntities = (name, entities, properties, rootDir) => {
  createResource(name, entities, properties, rootDir)
  createEntities(name, entities, rootDir)
}

const getEntities = entities => flow(
  pick(entities),
  values
)

const getUniqueEntities = (entities, key = 'id') => flow(
  flatMapDeep(getEntities(entities)),
  reject(isEmpty),
  uniqBy(key)
)

module.exports = {
  createResourceWithEntities,
  getUniqueEntities,
  mkdir,
}
