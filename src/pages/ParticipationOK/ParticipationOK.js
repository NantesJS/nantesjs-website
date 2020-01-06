import React, { useContext, useEffect } from 'react';
import styles from '../profil.module.css';
import VotingOK from '../../../static/images/VotingOK.png';
import { FullWidthContainer } from '../../components/FullWidthContainer';
import CtxCounter from '../CtxCounter.js';


export function ParticipationOK() {

  const [counter, setCounter] = useContext(CtxCounter)

  function refreshPage() {
    window.location.reload();
    setCounter(counter + 1)
  }

  return (
    <div>
      <div className={styles.profilPage__ImageAndName}>
        <h1>Mon profil</h1>
        <p>Votre participation au NantesJS XX a bien été enregistrée !</p>
      </div>
      <FullWidthContainer>
        <div className={styles.profilPage__QRCodeDiv}>
          <div className={styles.QRCodeDiv__QRCodeImageOn}>
            <img src={VotingOK} alt="QRCode" className={styles.QRCodeDiv__QRCodeImage} />
            <button className={styles.QRCodeDiv__QRCodeButton} onClick={refreshPage}>Revenir à mon profil</button>
          </div>
        </div>
      </FullWidthContainer>
    </div>
  )
}