import React from 'react'
import { string } from 'prop-types'
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
      <div className={styles.titlebarSmall}>
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
      </div>
      <div className={styles.titlebarLarge}>
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
        <div className={styles.dateLarge}>
          <FullDate date={date} />
        </div>
        <div className={styles.dateSmall}>
          <FullDate date={date} fontSize={.8} />
        </div>
      </div>
    </div>
  )
}
