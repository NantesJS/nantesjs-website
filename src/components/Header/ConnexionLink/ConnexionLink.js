import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { MenuLink } from '../MenuLink';
import firebase from 'firebase';

import UserLogo from '../../../../static/images/user-silhouette.svg';
import PowerSettingLogo from '../../../../static/images/power-setting.svg';
import styles from '../MenuLink/MenuLink.module.css'

export function ConnexionLink() {

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setAuth(!!user)
    })
  }, []);

  const verifyConnexion = () => {
    if (auth === true) {
      return (
        <React.Fragment>
          <div className={styles.profilSetting}>
            <Link
              id={styles.profil}
              activeClassName={styles.menu__linkSelected}
              className={styles.menu__link}
              to='/page-connexion/'
            >
              <img src={UserLogo} alt="User Icon" className={styles.marginRightImage} /> Mon Profil
            </Link>
          </div>
          <div className={styles.powerSetting}>
            <Link
              className={styles.menu__link}
              onClick={() => firebase.auth().signOut()}
            >
              <img src={PowerSettingLogo} alt="Power Icon" className={styles.marginRightImage} /> Déconnexion
            </Link>
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <Link
          activeClassName={styles.menu__linkSelected}
          className={styles.menu__link}
          to='/page-connexion/'
        >
          <img src={UserLogo} alt="User icon" className={styles.marginRightImage} /> Se connecter
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