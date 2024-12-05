import React from 'react'
import { node, bool, object } from 'prop-types'

import * as styles from './LargeContainer.module.css'

LargeContainer.propTypes = {
  style: object,
  children: node,
  relative: bool,
}

export function LargeContainer ({ children, style }) {
  return (
    <div style={style} className={styles.largeContainer}>
      {children}
    </div>
  )
}
