import React from 'react'

import { TitleBar } from './TitleBar'
import { Place } from './Place'
import { Talks } from './Talks'
import { Buttons } from './Buttons'

import './NextMeetup.module.css'

export function NextMeetup () {
  return (
    <div>
      <TitleBar/>
      <Place/>
      <Talks/>
      <Buttons/>
    </div>
  )
}
