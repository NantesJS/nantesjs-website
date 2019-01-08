import { first, get } from 'lodash'
import { inject } from '@k-ramel/react'

import { TitleBar } from './TitleBar'

const mapState = store => {
  const meetup = first(store.data.meetups.getBy('status', 'next'))

  return {
    title: get(meetup, 'title'),
    date: get(meetup, 'date'),
    image: get(meetup, 'image'),
    sponsor: get(meetup, 'sponsor.name'),
    venue: get(meetup, 'venue.name'),
  }
}

export const TitleBarContainer = inject(mapState)(TitleBar)
