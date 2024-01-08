import React from 'react'
import { Menu } from './Menu'
import { AboutLink } from './AboutLink'
import { CodeOfConduct } from './CodeOfConductLink'
import { ContributorsLink } from './ContributorsLink'
import { MeetupsLink } from './MeetupsLink'
import { Logo } from './Logo'
import { LargeContainer } from '../../components/LargeContainer'
import { SocialIcons } from '../SocialIcons'

import * as styles from './Header.module.css'

export function Header () {
  // eslint-disable-next-line max-len
  const proposalLink = 'https://conference-hall.io/public/event/DWIXMKeUnghfgJHerwEh'
  return (
    <header className={styles.header}>
      <LargeContainer style={{ overflow: 'hidden' }}>
        <nav className={styles.header__container}>
          <Logo className={styles.header__logo} />
          <div className={styles.header__links}>
            <SocialIcons className={styles.menu__socialIcons} />
            <Menu>
              <MeetupsLink />
              <ContributorsLink />
              <CodeOfConduct />
              <AboutLink />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={proposalLink}
                className={styles.menu__button}
              >
                          Proposer un sujet
              </a>
            </Menu>
          </div>
        </nav>
      </LargeContainer>
    </header>
  )
}
