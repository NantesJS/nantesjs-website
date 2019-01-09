import React from "react"
import { compose } from 'recompose'

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
} from '@k-ramel/react'

const Children = ({ children }) => <div>{children}</div>

const store = createStore({
  ui: { menu: simpleObject() },
}, {
  init: { ui: { menu: { open: false } } },
})

const Hoc = compose(
  provider(store),
)(Children)

export default ({ element }) => <Hoc>{element}</Hoc>
