import React, { Fragment } from 'react'
import { withPrefix } from 'gatsby'

import { FullWidthContainer } from '../FullWidthContainer'

import styles from './Sponsors.module.css'

export function Sponsors () {
  return (
    <Fragment>
      <FullWidthContainer className={styles.sponsors__hero}>
        <h3 className={styles.sponsors__title}>Sponsors 2020</h3>
      </FullWidthContainer>
      <div className={styles.sponsors__logos}>
        <a
          className={styles.sponsors__logo}
          href="https://unirakun.fr/"
        >
          <img
            alt="unirakun"
            src={withPrefix('/images/sponsor/big_unirakun.png')}
          />
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
        <a
          className={styles.sponsors__logo}
          href="https://eleven-labs.com/"
        >
          <img
            alt="eleven labs"
            src={withPrefix('/images/sponsor/eleven-labs.png')}
          />
        </a>
        <a
          className={styles.sponsors__logo}
          href="https://www.lucca.fr/"
        >
          <img
            alt="lucca"
            src={withPrefix('/images/sponsor/logo-lucca.svg')}
          />
        </a>
      </div>
    </Fragment>
  )
}
