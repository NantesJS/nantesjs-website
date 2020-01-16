import React from 'react'

import { TitleBar } from './TitleBar'
import { Place } from './Place'
import { Talks } from './Talks'
import { Buttons } from './Buttons'

import styles from './NextMeetup.module.css'

export function NextMeetup () {
  return (
    <article className={styles.nextMeetup}>
      <TitleBar/>
      <Place/>
      <Talks/>
      <Buttons/>
    </article>
  )
}
