import React, { useEffect, useState, useContext } from 'react'
import Config from '../../Config/config.default'
import styles from '../Profil/profil.module.css'
import VotingOK from '../../../static/images/VotingOK.png'
import { FullWidthContainer } from '../FullWidthContainer'
import { FirebaseContext } from '../firebase.context.js'

export function ParticipationOK () {

  const [user, setUser] = useState(null)
  const [meetup, setMeetup] = useState(null)
  const firebase = useContext(FirebaseContext)

  useEffect(() => {
    if (!firebase) return

    const authenticatedUser = firebase.auth().currentUser
    if (authenticatedUser) {
      setUser(authenticatedUser)
    }

    const db = firebase.firestore()

    // UPDATE LE TABLEAU DES INSCRITS SUR FIREBASE
    let update = props => {
      db.collection('nantesjs')
        .doc(props)
        .update({
          Participants: firebase.firestore.FieldValue.arrayUnion({
            Name : `${ user.displayName }`,
            Email : `${ user.email }`,
          })
        })
    }

    // RECUPERE L'ID DU DERNIER MEETUP SUR FIREBASE
    let app = db.collection('nantesjs').orderBy('Date', 'desc').limit(1)
    app.get().then(doc => {
      let lastElement = doc.docChanges()[doc._snapshot.docChanges.length - 1]
      let array = lastElement.doc.id
      update(array)
      setMeetup(array)
    })

    db.collection('user').doc(user.uid).update({ counter: firebase.firestore.FieldValue.increment(1) })
  }, [firebase])

  function refreshPage () {
    window.location.reload()
  }

  return (
    <div>
      <div className={styles.profilPage__ImageAndName}>
        <h1>Mon profil</h1>
        <p>Votre participation au NantesJS {meetup} a bien été enregistrée !</p>
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
