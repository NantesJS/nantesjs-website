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
              - © 2011-2021
        <a href="https://www.netlify.com" style={{ marginLeft: '1rem' }}>
          <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
        </a>
      </p>
    </footer>
  )
}
