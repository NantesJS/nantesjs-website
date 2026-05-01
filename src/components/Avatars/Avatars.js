import React from 'react'
import { array, object, string } from 'prop-types'
import classNames from 'classnames'

import * as styles from './Avatars.module.css'

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

export function Avatars ({ speakers }) {
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
              styles.avatars__portraitSingle,
              {
                [styles.avatars__portraitSingle]: speakersWithLink.length === 1
              }
            )}
            src={speaker.image}
          />
        )
      })}
    </div>
  )
}
