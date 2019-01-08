import React from 'react'
import { node, bool } from 'prop-types'
import classNames from 'classnames'

import styles from './LargeContainer.module.css'

LargeContainer.propTypes = {
  children: node,
  relative: bool,
}

export function LargeContainer ({ children, relative }) {
  return (
    <div className={classNames(styles.largeContainer, {
      [styles.largeContainerRelative]: relative,
    })}>
      {children}
    </div>
  )
}
