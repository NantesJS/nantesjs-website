import React, { Fragment } from "react"
import { withPrefix } from "gatsby"

import { FullWidthContainer } from "../FullWidthContainer"

import * as styles from "./Sponsors.module.css"

export function Sponsors () {
  return (
    <Fragment>
      <FullWidthContainer className={styles.sponsors__hero}>
        <h3 className={styles.sponsors__title}>Sponsors</h3>
      </FullWidthContainer>
      <div className={styles.sponsors__logos}>
        <a className={styles.sponsors__logo} href="https://nantes.zenika.com/#/">
          <img
            alt="zenika"
            src={withPrefix('/images/sponsor/zenika.svg')}
          />
        </a>
        <a className={styles.sponsors__logo} href="https://www.externatic.fr/">
          <img
            alt="externatic"
            src={withPrefix("/images/sponsor/externatic.png")}
          />
        </a>
        <a className={styles.sponsors__logo} href="https://www.sfeir.com/">
          <img alt="sfeir" src={withPrefix("/images/sponsor/sfeir.png")} />
        </a>
        <a className={styles.sponsors__logo} href="https://www.bam.tech/">
          <img alt="BAM" src={withPrefix("/images/sponsor/bam.png")} />
        </a>
        <a className={styles.sponsors__logo} href="https://www.malt.fr/">
          <img alt="Malt" src={withPrefix("/images/sponsor/malt.svg")} />
        </a>
      </div>
    </Fragment>
  )
}
