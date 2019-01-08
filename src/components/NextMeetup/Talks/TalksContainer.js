import { first, get } from 'lodash'
import { inject } from '@k-ramel/react'

import { Talks } from './Talks'

const mapState = store => {
  const meetup = first(store.data.meetups.getBy('status', 'next'))

  return {
    talks: get(meetup, 'talks'),
  }
}

export const TalksContainer = inject(mapState)(Talks)

