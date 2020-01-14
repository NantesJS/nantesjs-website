import React, { useState, useContext } from 'react';
import firebase from 'firebase';
import Config from './Config/config';
<<<<<<< HEAD
import {sha256} from 'js-sha256';
=======
import { sha256 } from 'js-sha256';

>>>>>>> origin/send-qrcode-tofirebase-jordan
import styles from './profil.module.css';
import QRCode from '../../static/images/QRCode.png';
import Fusee from '../../static/images/Fusee.png';
import Smiley from '../../static/images/Smiley.png';
import { FullWidthContainer } from '../components/FullWidthContainer';
import QrReader from 'react-qr-reader';
import { ParticipationOK } from './ParticipationOK/';
import { ParticipationNON } from './ParticipationNON/';
import CtxCounter from './CtxCounter';

export default function Profil() {

  const [isHere, setIsHere] = useState(false);
<<<<<<< HEAD
  const [result, setResult] = useState('Nothing');
=======
  const [result, setResult] = useState(''); //ce qui est scanné
>>>>>>> origin/send-qrcode-tofirebase-jordan
  const [counter, setCounter] = useContext(CtxCounter);
  const [test, setTest] = useState('') //ce qui est dans la base de données

  const handleClick = () => {
    setIsHere(!isHere);
  };

  const handleScan = data => {
    if (data) {
      setResult(data)
      console.log(result + "C'est ce QRcode scanné")
    }
  };


  let db = firebase.firestore(Config);
<<<<<<< HEAD
  let app = db.collection('nantesjs').orderBy('Date', 'desc').limit(1)

  // RECUPERE L'ID DU MEETUP SUR FIREBASE
  app.get().then((doc) => {
      let lastElement = doc.docChanges()[doc._snapshot.docChanges.length-1]
      let array = lastElement.doc.data() 
      setTest(array.QrCode)
  });
=======
  let app = db.collection('nantesjs').doc('meetup12');

  app.get().then(function(doc) {
    if (doc.exists) {
        setTest(doc.data().QrCode)
        console.log(test + "c'est ce qu'il y a dans la DB")
        console.log(chiffretest + "chiffre test")
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
})
>>>>>>> origin/send-qrcode-tofirebase-jordan

  let chiffretest = sha256(test)

  return (
    <div className={styles.profilPage}>
<<<<<<< HEAD
      {result !== sha256(test) ?
=======
      {result !== chiffretest ?
>>>>>>> origin/send-qrcode-tofirebase-jordan
        <div>
          <div className={styles.profilPage__ImageAndName}>
            <h1>Mon profil</h1>
            <p>J'ai participé à {counter} NantesJS au cours de l'année 2020</p>
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
                  onError={(error) => { console.log(error) }}
                  onScan={handleScan}
                />
                <button onClick={handleClick} className={styles.QRCodeDiv__QRCodeButton}>Retour</button>
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
        :
        <div>
<<<<<<< HEAD
          {result === sha256(test) ?
=======
          {result === chiffretest ?
>>>>>>> origin/send-qrcode-tofirebase-jordan
            <ParticipationOK />
            :
            <ParticipationNON/>
            }
        </div>
      }
    </div>
  )
}