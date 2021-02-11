import React from 'react'
import { array } from 'prop-types'
import { Talk } from '../../Talk'

import styles from './Talks.module.css'

Talks.propTypes = {
  talks: array,
}

export function Talks ({ talks = [] }) {
  return (
    <div className={styles.talks}>
      {talks.map(talk => <Talk key={talk.id} talk={talk} />)}
    </div>
  )
}
