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
}

export function Picture ({
  source,
  className,
}) {
  return (
    <div
      style={{ backgroundImage: `url(${ source })` }}
      className={classNames(styles.picture__frame, className)}
    />
  )
}
