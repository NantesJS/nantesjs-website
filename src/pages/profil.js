import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import Config from './Config/config'
import { sha256 } from 'js-sha256'
import styles from './profil.module.css'
import QRCode from '../../static/images/QRCode.png'
import Fusee from '../../static/images/Fusee.png'
import Smiley from '../../static/images/Smiley.png'
import { FullWidthContainer } from '../components/FullWidthContainer'
import QrReader from 'react-qr-reader'
import { ParticipationOK } from './ParticipationOK/'
import { ParticipationNON } from './ParticipationNON/'

export default function Profil() {

  const [isHere, setIsHere] = useState(false)
  const [result, setResult] = useState('Nothing')
  const [test, setTest] = useState('ok') //ce qui est dans la base de données
  const [register, setRegister] = useState(null)
  const [userCounter, setUserCounter] = useState(0)

  const handleClick = () => {
    setIsHere(!isHere)
  }

  const handleScan = data => {
    if (data) {
      setResult(data)
    }
  }

  let user = firebase.auth().currentUser
  let db = firebase.firestore(Config)
  let app = db.collection('nantesjs').orderBy('Date', 'desc').limit(1)

  // ICI A TRAVAILLER => VERIFIER SI L USER EXISTE
  const Utilisateurs = () => {
    db.collection('user').doc(user.uid).get().then(function (doc) {
      if (doc.exists) {
        Counter()
      } else {
        db.collection('user').doc(user.uid).set({
          counter: 0,
          id: user.uid,
          name: user.displayName,
          email: user.email
        })
      }
    })
  }

  async function Counter() {
    let counterUser
    if (db.collection('user').doc(user.uid).get()) {
      let test = db.collection('user').doc(user.uid).get()
      await test.then(function (doc) {
        counterUser = doc.data().counter
      })
      setUserCounter(counterUser)
    } else {
      null
    }
  }

  useEffect(() => {
    Utilisateurs()
  }, [])

  // RECUPERE L'ID DU MEETUP SUR FIREBASE
  app.get().then(doc => {
    let lastElement = doc.docChanges()[doc._snapshot.docChanges.length - 1]
    let array = lastElement.doc.data()
    setTest(array.QrCode)
  })


  // Verify User in Firebase
  const Verify = async () => {
    let coucou
    await app.get().then(doc => {
      let lastElement = doc.docChanges()[doc._snapshot.docChanges.length - 1]
      let array = lastElement.doc.data()
      coucou = array.Participants
    })
    if (result === sha256(test)) {
      if (coucou.map(item => item.Email).includes(user.email) === true) {
        setRegister(false)
      } else {
        setRegister(true)
      }
    } else {
      setRegister(false)
    }
  }

  return (
    <div className={styles.profilPage}>
      {result === 'Nothing' ?
        <div>
          <div className={styles.profilPage__ImageAndName}>
            <h1>Mon profil</h1>
            <p>J&apos;ai participé à {userCounter} NantesJS au cours de l&apos;année 2020</p>
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
                  onError={error => {
                    // eslint-disable-next-line no-console
                    console.log(error)
                  }}
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
          {Verify() | register === null ?
            <div>WAIT</div>
            :
            <div>
              {register === true ?
                <ParticipationOK />
                :
                <ParticipationNON />
              }
            </div>
          }
        </div>
      }
    </div>
  )
}
