import React from 'react'
import { string, object, array } from 'prop-types'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import he from 'he'

import styles from './Talks.module.css'

Circle.propTypes = {
  src: string,
  style: object,
  className: string,
}

function Circle ({ src = '', className, style }) {
  return (
    <div
      className={classNames(styles.circle, className)}
      style={{ backgroundImage: `url(${ src })`, ...style }}
    />
  )
}

Avatars.propTypes = {
  speakers: array,
}

function Avatars ({ speakers }) {
  const speakersWithLink = speakers.filter(speaker => speaker.link)
  return (
    <div className={styles.avatars}>
      {speakersWithLink.map((speaker, index) => {
        let style = {}
        if (speakers.length > 1) {
          const minSize = 25
          const variableSize = 75 / speakersWithLink.length
          const percent = `${ minSize + variableSize }%`
          const position = `${ index * variableSize }%`

          style = {
            width: percent,
            paddingTop: percent,
            borderRadius: percent,
            position: 'absolute',
            top: position,
            left: position,
          }
        }

        return (
          <Circle
            key={speaker.id}
            style={style}
            className={classNames(
              styles.avatars__portrait,
              {
                [styles.avatars__portraitSingle]: speakersWithLink.length === 1
              }
            )}
            src={
              `https://avatars.charlyx.dev/twitter?username=${ speaker.link }&size=original`
            }
          />
        )
      })}
    </div>
  )
}

Talks.propTypes = {
  talks: array,
}

export function Talks ({ talks = [] }) {
  return (
    <div className={styles.talks}>
      {talks.map(talk => (
        <div key={talk.id} className={styles.talk}>
          <Avatars speakers={talk.speakers} />
          <div>
            <h2 className={styles.talk__title}>{he.decode(talk.title)}</h2>
            <div
              className={styles.talk__description}
              dangerouslySetInnerHTML={{ __html: he.decode(talk.description) }}
            />
            <div className={styles.talk__speakers}>
              <FontAwesomeIcon
                icon={faTwitter}
              />&nbsp;
              {talk.speakers
                .map(speaker => speaker.link ? (
                  <a
                    key={speaker.id}
                    href={"https://twitter.com/"+speaker.link}
                  >
                    {speaker.link}
                  </a>
                ) : speaker.name)
                .reduce((prev, curr) => [prev, ', ', curr])}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
