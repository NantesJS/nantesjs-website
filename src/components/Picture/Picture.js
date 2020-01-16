import React from 'react'
import {
  string,
  bool
} from 'prop-types'
import styles from './Picture.module.css'
import classNames from 'classnames'

Picture.propTypes = {
  source: string,
  className: string,
  portrait: bool,
  alt: string.isRequired,
  caption: bool,
}

Picture.defaultProps = {
  caption: false,
}

export function Picture ({
  source,
  className,
  alt,
  caption,
}) {
  return (
    <figure className={classNames(styles.picture, className)}>
      <img
        src={source}
        className={styles.picture__frame}
        alt={alt}
      />
      {caption && <figcaption>{alt}</figcaption>}
    </figure>
  )
}
