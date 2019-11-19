import React from 'react'
import { string } from 'prop-types'

import styles from './Buttons.module.css'

Buttons.propTypes = {
  ticketsUrl: string,
  id: string,
}

export function Buttons ({ ticketsUrl, id }) {
  if (!ticketsUrl) return null

  return (
    <div className={styles.buttons}>
      <a
        className={styles.buttonDark}
        href={ticketsUrl}>Réserver votre place
      </a>
      <a
        className={styles.buttonDark}
        target="_blank"
        rel="noopener noreferrer"
        href={ `/${ id }.png` }
      >
        Affiche
      </a>
    </div>
  )
}
