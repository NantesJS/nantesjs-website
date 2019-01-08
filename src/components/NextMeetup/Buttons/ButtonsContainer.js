import { first, get } from 'lodash'
import { inject } from '@k-ramel/react'

import { Buttons } from './Buttons'

const mapState = store => {
  const meetup = first(store.data.meetups.getBy('status', 'next'))

  return {
    ticketsUrl: get(meetup, 'ticketsUrl'),
  }
}

export const ButtonsContainer = inject(mapState)(Buttons)
