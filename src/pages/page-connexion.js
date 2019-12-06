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
      signInSuccess: () => false
    }
  }

  // Verifier si l'uilisateur est deja connecter 
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setConnect(!!user)
      console.log(user)
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
                <h1 className={styles.title}>Connexion</h1>
                <h3 className={styles.title2}>Connectez-vous pour participer au tirage au sort à chaque Meetup !</h3>
                <div className={styles.iconAndSignIn}>
                  <img
                    src={iconConnexion}
                    alt='icon for illustrate a connexion'
                    className={styles.picture}
                  />
                  <StyledFirebaseAuth
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