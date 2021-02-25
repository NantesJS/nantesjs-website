import React from 'react'
import { array } from 'prop-types'
import { Link } from 'gatsby'

import { FullWidthContainer } from '../FullWidthContainer'
import { Meetup } from './Meetup'

import styles from './OldMeetups.module.css'

OldMeetups.propTypes = {
  meetups: array,
  years: array,
}

export function OldMeetups ({ meetups, years }) {
  return (
    <>
    <section>
      <FullWidthContainer className={styles.oldMeetups__hero}>
        <div>
          <h3 className={styles.oldMeetups__title}>Évènements passés</h3>
        </div>
      </FullWidthContainer>
      {meetups.map(meetup => {
        return <Meetup {...meetup} key={meetup.id} />
      })}
    </section>
    <section>
      <FullWidthContainer className={styles.oldMeetups__hero}>
        <h3 className={styles.oldMeetups__title}>Consulter les événements des autres années</h3>
      </FullWidthContainer>
      <nav>
        <ul>{
          years.sort((a, b) => b - a).map(year => {
            return (
              <li key={year}>
                <Link to={`/${ year }`}>{year}</Link>
              </li>
            )
          })
        }</ul>
      </nav>
    </section>
    </>
  )
}
