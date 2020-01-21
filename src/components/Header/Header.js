import React from 'react'
import { Menu } from './Menu'
import { AboutLink } from './AboutLink'
import { ContributorsLink } from './ContributorsLink'
import { MeetupsLink } from './MeetupsLink'
import { Logo } from './Logo'
import { LargeContainer } from '../../components/LargeContainer'
import { SocialIcons } from '../SocialIcons'
import { ConnexionLink } from './ConnexionLink'
import styles from './Header.module.css'

export function Header () {
  // eslint-disable-next-line max-len
  const proposalLink = 'https://conference-hall.io/public/event/DWIXMKeUnghfgJHerwEh'
  return (
    <header className={styles.header}>
      <LargeContainer>
        <nav className={styles.header__container}>
          <Logo className={styles.header__logo} />
          <div className={styles.header__menu}>
            <Menu>
              <div className={styles.header__link}>
                <MeetupsLink />
                <ContributorsLink />
                <AboutLink />
              </div>
              <div className={styles.header__subject}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={proposalLink}
                  className={styles.menu__button}
                >
                            Proposer un sujet
                </a>
              </div>
              <div className={styles.header__connexion}>
                <ConnexionLink/>
              </div>
            </Menu>
            <div className={styles.header__socialMenu}>
              <SocialIcons className={styles.menu__socialIcons} />
              <div className={styles.socialMenu__connexion}>
                <ConnexionLink />
              </div>
            </div>
          </div>
        </nav>
      </LargeContainer>
    </header>
  )
}
