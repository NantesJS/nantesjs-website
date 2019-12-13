import React, { useState } from 'react';

import styles from './profil.module.css';
import QRCode from '../../static/images/QRCode.png';
import Fusee from '../../static/images/Fusee.png';
import Smiley from '../../static/images/Smiley.png';
import { FullWidthContainer } from '../components/FullWidthContainer';
import QrReader from 'react-qr-reader';

export default function Profil() {

  const [isHere, setIsHere] = useState(false);
  const [result, setResult] = useState('Nothing')

  const handleClick = () => {
    setIsHere(!isHere);
  };

  const handleScan = data => {
    if(data){
      setResult(data)
    }
  };

  return (
    <div className={styles.profilPage}>
      <div className={styles.profilPage__ImageAndName}>
        <h1>Mon profil</h1>
        <p>J'ai participé à XX NantesJS au cours de l'année 2020</p>
      </div>

      <FullWidthContainer>
        <div className={styles.profilPage__QRCodeDiv}>
          <div className={isHere ? styles.QRCodeDiv__QRCodeImageOff : styles.QRCodeDiv__QRCodeImageOn}>
            <img src={QRCode} alt="QRCode" className={styles.QRCodeDiv__QRCodeImage} />
            <button className={styles.QRCodeDiv__QRCodeButton} onClick={handleClick}>Scanner un QRCode</button>
          </div>
          <div className={isHere ? styles.QRCodeDiv__cameraOn : styles.QRCodeDiv__cameraOff}>  
            <QrReader 
              delay={300}
              onError={(error) => {console.log(error)}}
              onScan={handleScan}
            />
          </div>
          <div className={styles.QRCodeDiv__fusee}>
            <img src={Fusee} alt="Fusee" className={styles.fusee__fuseeImage} />
            <button className={styles.fusee__badgesButton} >Voir mes badges</button>
          </div>
          <div className={styles.QRCodeDiv__smiley}>
            <img src={Smiley} alt="Smiley" className={styles.smiley__smileyImage} />
            <button className={styles.smiley__badgesButton} >Mon profil public</button>
          </div>
        </div>
      </FullWidthContainer>
    </div>
  )
}