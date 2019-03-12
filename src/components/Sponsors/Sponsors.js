import React, { Fragment } from 'react'
import { withPrefix } from 'gatsby'

import { FullWidthContainer } from '../FullWidthContainer'
import { MyMoneyBank } from './MyMoneyBank'

import styles from './Sponsors.module.css'

export function Sponsors () {
  return (
    <Fragment>
      <FullWidthContainer className={styles.sponsors__hero}>
        <h3 className={styles.sponsors__title}>Sponsors 2019</h3>
      </FullWidthContainer>
      <div className={styles.sponsors__logos}>
        <a
          className={styles.sponsors__logo}
          href="https://alakarte.io/"
        >
          <img
            alt="alakarte io"
            src={withPrefix('/images/sponsor/alakarteio.png')}
          />
        </a>
        <a
          className={styles.sponsors__logo}
          href="https://www.mymoneybank.fr/"
        >
          <MyMoneyBank />
        </a>
        <a
          className={styles.sponsors__logo}
          href="https://seyos.fr/"
        >
          <img
            alt="seyos"
            src={withPrefix('/images/sponsor/seyos.png')}
          />
        </a>
        <a
          className={styles.sponsors__logo}
          href="https://nantes.zenika.com/#/"
        >
          <img
            alt="zenika"
            src={withPrefix('/images/sponsor/zenika.png')}
          />
        </a>
        <a
          className={styles.sponsors__logo}
          href="https://www.oxiane.bzh/"
        >
          <img
            alt="oxiane"
            src={withPrefix('/images/sponsor/oxiane.png')}
          />
        </a>
        <a
          className={styles.sponsors__logo}
          href="https://www.externatic.fr/"
        >
          <img
            alt="externatic"
            src={withPrefix('/images/sponsor/externatic.png')}
          />
        </a>
        <a
          className={styles.sponsors__logo}
          href="https://www.sfeir.com/"
        >
          <img
            alt="sfeir"
            src={withPrefix('/images/sponsor/sfeir.png')}
          />
        </a>
      </div>
    </Fragment>
  )
}
