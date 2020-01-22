import React from 'react'
import styles from '../profil.module.css'
import VotingNO from '../../../static/images/VotingNO.png'
import { FullWidthContainer } from '../../components/FullWidthContainer'
import { Link } from 'gatsby'


export function ParticipationNON () {

  function refreshPage () {
    window.location.reload(true)
  }

  return (
    <div>
      <div className={styles.profilPage__ImageAndName}>
        <h1>Mon profil</h1>
        <p>Vous avez déjà enregistré votre participation pour ce NantesJS...</p>
      </div>
      <FullWidthContainer>
        <div className={styles.profilPage__QRCodeDiv}>
          <div className={styles.QRCodeDiv__QRCodeImageOn}>
            <img src={VotingNO} alt="QRCode" className={styles.QRCodeDiv__QRCodeImage} />
            <Link  to='page-connexion'>
              <button className={styles.QRCodeDiv__QRCodeButton} onClick={refreshPage}>Revenir à mon profil</button>
            </Link>
          </div>
        </div>
      </FullWidthContainer>
    </div>
  )
}