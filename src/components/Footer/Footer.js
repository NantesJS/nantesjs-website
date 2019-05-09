import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'

import { Logo } from '../Header/Logo'

import styles from './Footer.module.css'

export function Footer () {
  return (
    <footer className={styles.footer}>
      <Logo
        className={styles.footer__logo}
        imageClassName={styles.footer__image}
      />
      <p className={styles.footer__copyright}>
        <FontAwesomeIcon
          className={styles.menu__icon}
          icon={faHeart}
        />&nbsp;
        <Link className={styles.footer__link} to="/">NantesJS</Link>&nbsp;
              - © 2011-2019
      </p>
    </footer>
  )
}
