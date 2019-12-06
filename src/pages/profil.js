import React from 'react';
import firebase from 'firebase';

import styles from './profil.module.css';
import QRCode from '../../static/images/QRCode.png';
import Fusee from '../../static/images/Fusee.png';
import Smiley from '../../static/images/Smiley.png';

export default function Profil() {
  return (
    <div className={styles.profilPage}>
      <div className={styles.ImageAndName}>
        <img src={firebase.auth().currentUser.photoURL} alt="" className={styles.profilImage} />
        <h1>Bonjour {firebase.auth().currentUser.displayName}</h1>
      </div>
      <p>J'ai participé a N NantesJS au cours de l'année 2019</p>
      <div className={styles.badgesAndProfil}>
        <button className={styles.badgesButton} >Voir mes badges</button>
        <button className={styles.profilButton} >Mon Profil Public</button>
      </div>
      <div className={styles.QRCodeDiv}>
        <img src={QRCode} alt="QRCode" className={styles.QRCodeImage} />
        <button className={styles.QRCodeButton}>Scanner un QRCode</button>
        <div className={styles.fusee}>
          <img src={Fusee} alt="Fusee" className={styles.fuseeImage} />
          <button className={styles.badgesButton} >Voir mes badges</button>
        </div>
        <div className={styles.smiley}>
          <img src={Smiley} alt="Smiley" className={styles.smileyImage} />
          <button className={styles.profilButton} >Mon profil public</button>
        </div>
      </div>
      <button className={styles.signOut} onClick={() => firebase.auth().signOut()}>Sign out</button>
    </div>
  )
}