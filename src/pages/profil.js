import React from 'react';
import firebase from 'firebase';

import styles from './profil.module.css';
import QRCode from '../../static/images/QRCode.png';
import Fusee from '../../static/images/Fusee.png';
import Smiley from '../../static/images/Smiley.png';

export default function Profil() {
  return (
    <div className={styles.profilPage}>
      <div className={styles.profilPage__ImageAndName}>
        <h1>Mon Profil</h1>
      </div>
      <p>J'ai participé a N NantesJS au cours de l'année 2019</p>
      <div className={styles.profilPage__badgesAndProfil}>
        <button className={styles.badgesAndProfil__badgesButton} >Voir mes badges</button>
        <button className={styles.badgesAndProfil__profilButton} >Mon Profil Public</button>
      </div>
      <div className={styles.profilPage__QRCodeDiv}>
        <img src={QRCode} alt="QRCode" className={styles.QRCodeDiv__QRCodeImage} />
        <button className={styles.QRCodeDiv__QRCodeButton}>Scanner un QRCode</button>
        <div className={styles.QRCodeDiv__fusee}>
          <img src={Fusee} alt="Fusee" className={styles.fusee__fuseeImage} />
          <button className={styles.fusee__badgesButton} >Voir mes badges</button>
        </div>
        <div className={styles.QRCodeDiv__smiley}>
          <img src={Smiley} alt="Smiley" className={styles.smiley__smileyImage} />
          <button className={styles.smiley__profilButton} >Mon profil public</button>
        </div>
      </div>
      <button className={styles.profilPage__signOut} onClick={() => firebase.auth().signOut()}>Sign out</button>
    </div>
  )
}