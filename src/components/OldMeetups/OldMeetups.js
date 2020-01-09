import React, { Fragment } from 'react'
import { array } from 'prop-types'
import { withPrefix } from 'gatsby'
import he from 'he'

import isUrl from 'is-url'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/fontawesome-free-brands'


import { FullDate } from '../FullDate'
import { FullWidthContainer } from '../FullWidthContainer'

import styles from './OldMeetups.module.css'

Talks.propTypes = {
  talks: array,
}

function Talks ({ talks }) {
  return (
    <ul className={styles.talks}>
      {talks.map(talk => (
        <li className={styles.talk} key={talk.id}>
          <div>
            <p className={styles.talk__title}>{he.decode(talk.title)}</p>
            {talk.speakers && talk.speakers
              .map(speaker => speaker.link ? (
                isUrl(speaker.link) ? (
                  <a
                    className={styles.talk__speaker}
                    key={speaker.id}
                    href={speaker.link}
                  >
                    {
                      speaker.name
                    }
                  </a> ) : (
                  <a
                    className={styles.talk__speaker}
                    key={speaker.id}
                    href={"https://twitter.com/"+speaker.link}
                  >
                    {
                      `@${ speaker.link }`
                    }
                  </a>
                )
              ) : speaker.name)
              .reduce((prev, curr) => [prev, ', ', curr])}
          </div>
          {talk.video && (
            <a className={styles.talk__video}
              title="Voir la video"
              href={talk.video}>
              <FontAwesomeIcon icon={faYoutube} aria-hidden="true"/>
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}

OldMeetups.propTypes = {
  meetups: array,
}

export function OldMeetups ({ meetups }) {
  return (
    <section>
      <FullWidthContainer className={styles.oldMeetups__hero}>
        <div>
          <h3 className={styles.oldMeetups__title}>Évènements passés</h3>
          <p className={styles.oldMeetups__description}>
            {meetups.length} meetups depuis janvier 2012
          </p>
        </div>
      </FullWidthContainer>
      {meetups.map(meetup => {
        const backgroundImage = `url(${ withPrefix(meetup.image) })`
        return (
          <Fragment key={meetup.id}>
            <article className={styles.meetup}>
              {/*
                  Bug with MediaQuery and mixing class names
                  https://github.com/gatsbyjs/gatsby/pull/8092
                  <MediaQuery minWidth={768}/>
                    <div className={styles.meetup__date}>
                */}
              <div className={styles.hideOnMobile}>
                <div className={styles.meetup__date}>
                  <FullDate date={meetup.date} fontSize={.5} />
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
                  <h4
                    className={styles.meetup__title}
                    title={meetup.title}
                  >
                    {meetup.title}
                  </h4>
                  <div className={styles.meetup__sponsors}>
                    <p>
                      {meetup.sponsor && (
                        <Fragment>
                          <span>
                            Sponsorisé par <b>{meetup.sponsor.name}</b>
                          </span>
                          <br />
                        </Fragment>
                      )}
                      {meetup.venue && (
                        <span>Hébergé par <b>{meetup.venue.name}</b></span>
                      )}
                    </p>
                  </div>
                </header>
                <Talks talks={meetup.talks} />
                <div className={styles.showOnMobile}>
                  <div className={styles.meetup__date}>
                    <p>{meetup.date}</p>
                  </div>
                </div>
              </div>
            </article>
          </Fragment>
        )
      })}
    </section>
  )
}
