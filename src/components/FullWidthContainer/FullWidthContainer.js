import React from 'react'
import { node, string } from 'prop-types'
import classNames from 'classnames'

import * as styles from './FullWidthContainer.module.css'

FullWidthContainer.propTypes = {
  children: node,
  className: string,
}

export function FullWidthContainer ({ children, className }) {
  return (
    <div className={classNames(styles.wrapperFullWidth, className)}>
      <div className={styles.wrapperFullWidth__background} />
      <div className={styles.wrapperFullWidth__children}>
        {children}
      </div>
    </div>
  )
}
