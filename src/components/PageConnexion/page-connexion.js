import React, { useEffect, useContext, useState, Fragment } from 'react'
import Layout from '../layout'
import styles from './page-connexion.module.css'
//import firebase from 'firebase'
import Profil from '../Profil/profil'
import iconConnexion from '../../pages/iconConnexion.png'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { FirebaseContext } from '../firebase.context.js'

export default function PageConnexion () {

  const [connect, setConnect] = useState(false)
  const [config, setConfig] = useState(null)
  const firebase = useContext(FirebaseContext)

  // Verifier si l'utilisateur est déjà connecté
  useEffect(() => {
    if (!firebase) return

    // Config d'authentification
    setConfig({
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false
      }
    })

    firebase.auth().onAuthStateChanged(user => {
      setConnect(!!user)
    })
  }, [firebase])

  return (
    <Layout>
      <div className={styles.allPage}>
        {
          connect ? (
            <Profil />
          ) : (
            <Fragment>
              <div className={styles.allPage__title}>
                <h1 className={styles.title__titleHeader}>Connexion</h1>
                <p className={styles.title__titleText}>
                  Connectez-vous pour participer au tirage au sort à chaque Meetup !
                </p>
              </div>
              <div className={styles.allPage__iconAndSignIn}>
                <img
                  src={iconConnexion}
                  alt='icon for illustrate a connexion'
                  className={styles.allPage__picture}
                />
                {config && (
                  <StyledFirebaseAuth
                    className={styles.iconAndSignIn__auth}
                    uiConfig={config}
                    firebaseAuth={firebase.auth()}
                  />
                )}
              </div>
            </Fragment>
          )
        }
      </div>
    </Layout>
  )
}
