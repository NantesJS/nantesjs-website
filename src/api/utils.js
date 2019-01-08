let basename = process.env.GATSBY_BASENAME || '/nantesjs'

if (process.env.NODE_ENV === 'development') {
  basename = ''
}

export const getById = resource => async id => {
  const res = await fetch(`${ basename }/api/${ resource }/${ id }.json`)
  const json = await res.json()
  return json
}

export const get = resource => async () => {
  const res = await fetch(`${ basename }/api/${ resource }.json`)
  const list = await res.json()
  const getResourceById = getById(resource)

  const updatedlist = await Promise.all(list.map(({ id }) => {
    return getResourceById(id)
  }))

  return updatedlist
}
