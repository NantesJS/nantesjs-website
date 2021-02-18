import React from 'react'
import { string, bool } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitch } from '@fortawesome/fontawesome-free-brands'

import styles from './Buttons.module.css'

Buttons.propTypes = {
  ticketsUrl: string,
  remote: bool,
}

export function Buttons ({ ticketsUrl, remote = false }) {
  if (!ticketsUrl) return null

  return (
    <div className={styles.buttons}>
      <a
        className={styles.buttonDark}
        href={ticketsUrl}>{ remote ? (
          <>
            <FontAwesomeIcon icon={faYoutube} aria-hidden="true"/>
            &nbsp;Voir sur YouTube
          </>
        ) : ( 'Réserver votre place' ) }
      </a>
      { remote && (
        <a
          className={styles.buttonDark}
          href="https://twitch.tv/nantesjs">
          <FontAwesomeIcon icon={faTwitch} aria-hidden="true"/>
          &nbsp;Voir sur Twitch
        </a>
      )}
    </div>
  )
}
