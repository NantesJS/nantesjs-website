import React from 'react'
import { string, object, array } from 'prop-types'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'

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
  return (
    <div className={styles.avatars}>
      {speakers.map((speaker, index) => {
        let style = {}
        if (speakers.length > 1) {
          const minSize = 25
          const variableSize = 75 / speakers.length
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
              { [styles.avatars__portraitSingle]: speakers.length === 1 }
            )}
            src={
              `https://avatars.io/twitter/${ speaker.link.split('/').pop() }`
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
            <h3 className={styles.talk__title}>{talk.title}</h3>
            <p className={styles.talk__description}>{talk.description}</p>
            <div className={styles.talk__speakers}>
              <FontAwesomeIcon
                icon={faTwitter}
              />&nbsp;
              {talk.speakers
                .map(speaker => (
                  <a
                    key={speaker.id}
                    href={speaker.link}
                  >
                    {speaker.link.split('/').pop()}
                  </a>
                ))
                .reduce((prev, curr) => [prev, ', ', curr])}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
