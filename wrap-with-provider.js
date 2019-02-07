import React from "react"
import { compose } from 'recompose'

import {
  createStore,
  simpleObject,
} from 'k-ramel'
import {
  provider,
} from '@k-ramel/react'

const Children = ({ children }) => <div>{children}</div>

const store = createStore({
  ui: { menu: simpleObject() },
}, {
  init: { ui: { menu: { open: false } } },
  devtools: process.env.NODE_ENV !== 'production',
})

const Hoc = compose(
  provider(store),
)(Children)

export default ({ element }) => <Hoc>{element}</Hoc>
