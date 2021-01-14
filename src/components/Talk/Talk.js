import React from 'react'
import he from 'he'
import { array, shape, string } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import { Avatars } from '../Avatars'

import styles from './Talk.module.css'

Talk.propTypes = {
  talk: shape({
    speakers: array(shape({
      id: string.isRequired,
      name: string.isRequired,
      link: string,
    })),
    title: string.isRequired,
    description: string.isRequired,
  })
}

export function Talk ({ talk }) {
  return (
    <div className={styles.talk}>
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
  )
}
