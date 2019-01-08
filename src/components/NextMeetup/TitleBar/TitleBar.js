import React from 'react'
import { string } from 'prop-types'
import MediaQuery from 'react-responsive'
import { withPrefix } from 'gatsby'

import { FullDate } from '../../FullDate'

import styles from './TitleBar.module.css'

TitleBar.propTypes = {
  title: string,
  image: string,
  sponsor: string,
  venue: string,
  date: string,
}

export function TitleBar ({ title, image, sponsor, venue, date }) {
  return (
    <div className={styles.titlebar}>
      <MediaQuery maxWidth={767}>
        <div>
          <div
            role="img"
            aria-label="image du meetup à venir"
            className={styles.titlebar__imageWrapper}
            style={{ backgroundImage: `url(${ withPrefix(image) })` }}
          />
          <FullDate date={date} fontSize={.8} />
        </div>
        <div className={styles.titlebar__infos}>
          <h1>{title}</h1>
          <p>
            Sponsorisé par <b>{sponsor}</b><br />
            Hébergé par <b>{venue}</b>
          </p>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <div
          className={styles.titlebar__imageWrapper}
          style={{ backgroundImage: `url(${ withPrefix(image) })` }}
        />
        <div className={styles.titlebar__infos}>
          <h1>{title}</h1>
          <p>
            Sponsorisé par <b>{sponsor}</b><br />
            Hébergé par <b>{venue}</b>
          </p>
        </div>
        <MediaQuery minWidth={992}>
          <FullDate date={date} />
        </MediaQuery>
        <MediaQuery maxWidth={991}>
          <FullDate date={date} fontSize={.8} />
        </MediaQuery>
      </MediaQuery>
    </div>
  )
}
