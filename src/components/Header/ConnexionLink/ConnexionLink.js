import React from 'react';
import { Link } from 'gatsby';
import { MenuLink } from '../MenuLink';
import firebase from 'firebase';
import UserLogo from '../../../../static/images/user-silhouette.png';
import styles from '../MenuLink/MenuLink.module.css'

export function ConnexionLink () {

  const verifyConnexion = () => {
    if(firebase.auth().currentUser){
      return (
        <React.Fragment>
          <div>
            <Link 
              id={styles.profil}
              activeClassName={styles.menu__linkSelected} 
              className={styles.menu__link}
              to='/page-connexion/'
              >
              <img src={UserLogo}/> Mon Profil
            </Link>
          </div>
          <div>
            <Link 
              className={styles.menu__link}
              to='/page-connexion/'
              >
              <img src={UserLogo}/> Déconnexion
            </Link>
          </div>
        </React.Fragment>
      )
    }else{
      return (
        <Link 
        activeClassName={styles.menu__linkSelected} 
        className={styles.menu__link}
        to='/page-connexion/'
        >
          <img src={UserLogo}/> Se connecter
        </Link>
      )
    }
  };

  return (
    <div className={styles.connexion}>
      <MenuLink
        to="/page-connexion/"
        label={verifyConnexion()}
        className={styles.test}
      />
    </div>
  )
}