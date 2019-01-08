import React from 'react'
import { string } from 'prop-types'

import styles from './Buttons.module.css'

Buttons.propTypes = {
  ticketsUrl: string,
}

export function Buttons ({ ticketsUrl }) {
  if (!ticketsUrl) return null

  return (
    <div className={styles.buttons}>
      <a
        className={styles.buttonDark}
        href={ticketsUrl}>Réserver votre place
      </a>
    </div>
  )
}
