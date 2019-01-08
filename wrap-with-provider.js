import React from "react"
import { compose } from 'recompose'
import loader from 'hoc-react-loader'

import {
  getCorporations,
  getMeetups,
  getSpeakers,
  getTalks,
} from './src/api'
import {
  createStore,
  simpleObject,
  keyValue,
} from 'k-ramel'
import {
  provider,
  inject,
} from '@k-ramel/react'

const Children = ({ children }) => <div>{children}</div>

const store = createStore({
  data: {
    meetups: keyValue({ key: 'id' }),
    speakers: keyValue({ key: 'id' }),
    corporations: keyValue({ key: 'id' }),
    talks: keyValue({ key: 'id' }),
  },
  ui: { menu: simpleObject(), loading: simpleObject() },
}, {
  init: { ui: { menu: { open: false }, loading: { init: true } } },
})

const Hoc = compose(
  provider(store),
  inject(store => ({
    load: async () => {
      if (typeof(window) === 'undefined') return

      const corporations = await getCorporations()
      store.data.corporations.set(corporations)

      const meetups = await getMeetups()
      store.data.meetups.set(meetups)

      const speakers = await getSpeakers()
      store.data.speakers.set(speakers)

      const talks = await getTalks()
      store.data.talks.set(talks)
      store.ui.loading.set({ init: false })
    },
  })),
  loader(),
)(Children)

export default ({ element }) => <Hoc>{element}</Hoc>
