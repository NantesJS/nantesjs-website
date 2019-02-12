import React, { useContext } from 'react'
import {
  string,
  func
} from 'prop-types'
import { Link } from 'gatsby'
import { MenuContext } from '../Menu/Menu'

import styles from './MenuLink.module.css'

MenuLink.propTypes = {
  label: string,
  link: string,
}

export function MenuLink ({ label, ...otherProps }) {
  // eslint-disable-next-line unused-var
  const [isMenuOpen, setMenuOpen] = useContext(MenuContext)
  return (
    <Link
      activeClassName={styles.menu__linkSelected}
      className={styles.menu__link}
      onClick={() => setMenuOpen(false)}
      {...otherProps}
    >
      {label}
    </Link>
  )
}
