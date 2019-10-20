import React, { Fragment, createContext, useState } from 'react'
import { node } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'

import styles from './Menu.module.css'

export const MenuContext = createContext({ closeMenu: () => {} })

Menu.propTypes = {
  children: node,
}

Menu.defaultProps = {
  children: null,
}

export function Menu ({ children }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <Fragment>
      <div className={styles.hideOnDesktop}>
        <div className={styles.menu}>
          <button
            className={styles.menu__button}
            onClick={() => setOpen(!isOpen)}
            aria-label="Ouvrir le menu"
          >
            <FontAwesomeIcon
              className={styles.menu__icon}
              icon={faBars}
              size="2x"
            />
          </button>
        </div>
        {isOpen && (
          <MenuContext.Provider value={{ closeMenu: () => setOpen(false) }}>
            <div className={styles.menu__contentResponsive}>
              {children}
            </div>
          </MenuContext.Provider>
        )}
      </div>
      <div className={styles.showOnDesktop}>
        <div className={styles.menu__content}>
          {children}
        </div>
      </div>
    </Fragment>
  )
}
