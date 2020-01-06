import React, { useEffect, useState, Fragment } from 'react'
import Layout from '../components/layout'
import styles from './page-connexion.module.css';
import firebase from 'firebase';
import Profil from './profil';
import iconConnexion from './iconConnexion.png';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function PageConnexion() {

  const [connect, setConnect] = useState(false);

  // Config d'authentification
  let uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }

  // Verifier si l'uilisateur est deja connecter 
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setConnect(!!user)
    })
  }, []);

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
                  <p className={styles.title__titleText}>Connectez-vous pour participer au tirage au sort à chaque Meetup !</p>
                </div>
                <div className={styles.allPage__iconAndSignIn}>
                  <img
                    src={iconConnexion}
                    alt='icon for illustrate a connexion'
                    className={styles.allPage__picture}
                  />
                  <StyledFirebaseAuth
                    className={styles.iconAndSignIn__auth}
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                  />
                </div>
              </Fragment>
            )
        }
      </div>
    </Layout>
  )
}