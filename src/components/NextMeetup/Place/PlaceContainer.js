import { first, get } from 'lodash'
import { inject } from '@k-ramel/react'

import { Place } from './Place'

const mapState = store => {
  const meetup = first(store.data.meetups.getBy('status', 'next'))

  return {
    latitude: get(meetup, 'venue.latitude'),
    longitude: get(meetup, 'venue.longitude'),
  }
}

export const PlaceContainer = inject(mapState)(Place)
