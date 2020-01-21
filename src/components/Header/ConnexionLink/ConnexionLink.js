import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import { MenuLink } from '../MenuLink'
import { useFirebase } from '../../../firebase'

import UserLogo from '../../../../static/images/user-silhouette.svg'
import PowerSettingLogo from '../../../../static/images/power-setting.svg'
import styles from '../MenuLink/MenuLink.module.css'

export function ConnexionLink () {
  const firebase = useFirebase()

  const [auth, setAuth] = useState(false)

  useEffect(() => {
    if (!firebase) return
    firebase.auth().onAuthStateChanged(user => {
      setAuth(!!user)
    })
  }, [firebase])

  const verifyConnexion = () => {
    if(auth === true){
      return (
        <React.Fragment>
          <div className={styles.profilSetting}>
            <Link
              id={styles.profil}
              activeClassName={styles.menu__linkSelected}
              className={styles.menu__link}
              to='/page-connexion/'
            >
              <img src={UserLogo}/> Mon Profil
            </Link>
          </div>
          <div className={styles.powerSetting}>
            {firebase && (
              <Link
                className={styles.menu__link}
                onClick={() => firebase.auth().signOut()}
              >
                <img src={PowerSettingLogo} /> Déconnexion
              </Link>
            )}
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
  }

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
