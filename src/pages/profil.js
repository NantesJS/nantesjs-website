import React from 'react'

import styles from './profil.module.css'
import QRCode from '../../static/images/QRCode.png'
import Fusee from '../../static/images/Fusee.png'
import Smiley from '../../static/images/Smiley.png'
import { FullWidthContainer } from '../components/FullWidthContainer'

export default function Profil () {
  return (
    <div className={styles.profilPage}>
      <div className={styles.profilPage__ImageAndName}>
        <h1>Mon profil</h1>
        <p>J&apos;ai participé à XX NantesJS au cours de l&apos;année 2020</p>
      </div>

      <FullWidthContainer>
        <div className={styles.profilPage__QRCodeDiv}>
          <img
            src={QRCode}
            alt="QRCode"
            className={styles.QRCodeDiv__QRCodeImage}
          />
          <button className={styles.QRCodeDiv__QRCodeButton}>
            Scanner un QRCode
          </button>
          <div className={styles.QRCodeDiv__fusee}>
            <img src={Fusee} alt="Fusee" className={styles.fusee__fuseeImage} />
            <button className={styles.fusee__badgesButton}>
              Voir mes badges
            </button>
          </div>
          <div className={styles.QRCodeDiv__smiley}>
            <img
              src={Smiley}
              alt="Smiley"
              className={styles.smiley__smileyImage}
            />
            <button className={styles.smiley__badgesButton}>
              Mon profil public
            </button>
          </div>
        </div>
      </FullWidthContainer>
    </div>
  )
}
