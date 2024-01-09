import React from 'react'
import { withPrefix, Link } from 'gatsby'
import { array, shape, string } from 'prop-types'
import { FullDate } from '../../FullDate'
import { Talks } from './Talks'
import { formatRaw } from '../../../helper/date.helper'

import * as styles from './Meetup.module.css'

Meetup.propTypes = {
  date: string,
  filename: string,
  image: string,
  sponsor: shape({ name: string }),
  talks: array,
  title: string,
  venue: shape({ name: string }),
}

export function Meetup ({ date, filename, image, sponsor, talks, title, venue }) {
  const backgroundImage = `url(${ withPrefix(image) })`
  const posterUrl = `/posters/${ filename }-poster.jpg`

  return (
    <>
      <article className={styles.meetup}>
        <div className={styles.hideOnMobile}>
          <div className={styles.meetup__date}>
            <FullDate date={date} fontSize={.5} />
            <div
              className={styles.meetup__image}
              role="img"
              aria-label="image relative au sujet du meetup"
              style={{ backgroundImage }}
            />
          </div>
        </div>
        <div className={styles.meetup__content}>
          <header className={styles.meetup__header}>
            <Link to={`/${ filename }`}>
              <h4
                className={styles.meetup__title}
                title={title}
              >
                {title}
              </h4>
            </Link>
            <a className={styles.meetup__poster} href={posterUrl} target="_blank" rel="noreferrer">Affiche</a>
            <div className={styles.meetup__sponsors}>
              <p>
                {sponsor && (
                  <>
                    <span>
                  Sponsorisé par <b>{sponsor.name}</b>
                    </span>
                    <br />
                  </>
                )}
                {venue && (
                  <span>Hébergé par <b>{venue.name}</b></span>
                )}
              </p>
            </div>
          </header>
          <Talks talks={talks} />
          <div className={styles.showOnMobile}>
            <div className={styles.meetup__date}>
              <p>
                <time dateTime={formatRaw(date)}>
                  {date}
                </time>
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
