import React from 'react'
import he from 'he'
import isUrl from 'is-url'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/fontawesome-free-brands'
import { array } from 'prop-types'

import styles from './Talks.module.css'

Talks.propTypes = {
  talks: array,
}

export function Talks ({ talks }) {
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
              href={`https://youtu.be/${ talk.video }`}>
              <FontAwesomeIcon icon={faYoutube} aria-hidden="true"/>
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}


