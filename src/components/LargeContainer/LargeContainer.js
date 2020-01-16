import React from 'react'
import { node, bool, object } from 'prop-types'
import classNames from 'classnames'

import styles from './LargeContainer.module.css'

LargeContainer.propTypes = {
  style: object,
  children: node,
  relative: bool,
}

export function LargeContainer ({ children, relative, style }) {
  return (
    <div style={style} className={classNames(styles.largeContainer, {
      [styles.largeContainerRelative]: relative,
    })}>
      {children}
    </div>
  )
}
