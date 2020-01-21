import React, { useEffect, useState, Fragment } from 'react'
import { useFirebase } from '../firebase'
import Layout from '../components/layout'
import styles from './page-connexion.module.css'
import Profil from './profil'
import iconConnexion from './iconConnexion.png'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

export default function PageConnexion () {
  const firebase = useFirebase()
  const [uiConfig, setUiConfig] = useState()
  const [connect, setConnect] = useState(false)


  // Verifier si l'uilisateur est deja connecter
  useEffect(() => {
    if (!firebase) return

    // Config d'authentification
    setUiConfig({
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
                  Connectez-vous pour participer&nbsp;
                  au tirage au sort à chaque Meetup !
                </p>
              </div>
              <div className={styles.allPage__iconAndSignIn}>
                <img
                  src={iconConnexion}
                  alt='icon for illustrate a connexion'
                  className={styles.allPage__picture}
                />
                {(firebase && uiConfig) && (
                  <StyledFirebaseAuth
                    className={styles.iconAndSignIn__auth}
                    uiConfig={uiConfig}
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
