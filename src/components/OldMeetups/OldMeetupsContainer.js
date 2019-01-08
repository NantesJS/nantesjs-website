import { inject } from '@k-ramel/react'
import { compareDesc } from 'date-fns'
import { parse } from 'date-fns/fp'

import { OldMeetups } from './OldMeetups'

const parseDate = parse(new Date(), 'dd/MM/yyyy')

const mapState = store => {
  const meetups = store.data.meetups
    .getBy('status', 'done')
    .sort((a, b) => {
      const aDate = parseDate(a.date)
      const bDate = parseDate(b.date)

      return compareDesc(aDate, bDate)
    })

  return {
    meetups,
  }
}

export const OldMeetupsContainer = inject(mapState)(OldMeetups)
