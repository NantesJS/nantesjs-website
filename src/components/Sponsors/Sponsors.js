import React, { Fragment } from 'react'
import { withPrefix } from 'gatsby'

import { FullWidthContainer } from '../FullWidthContainer'

import styles from './Sponsors.module.css'

export function Sponsors () {
  return (
    <Fragment>
      <FullWidthContainer className={styles.sponsors__hero}>
        <h3 className={styles.sponsors__title}>Sponsors 2019</h3>
      </FullWidthContainer>
      <div className={styles.sponsors__logos}>
        <a href="https://alakarte.io/">
          <img
            alt="alakarte io"
            className={styles.sponsors__logo}
            src={withPrefix('/images/sponsor/alakarteio.png')}
          />
        </a>
      </div>
    </Fragment>
  )
}
