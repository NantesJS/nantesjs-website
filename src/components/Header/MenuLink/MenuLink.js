import React, { useContext } from 'react'
import { string } from 'prop-types'
import { Link } from 'gatsby'
import { MenuContext } from '../Menu/Menu'

import * as styles from './MenuLink.module.css'

MenuLink.propTypes = {
  label: string,
  link: string,
}

export function MenuLink ({ label, ...otherProps }) {
  const { closeMenu } = useContext(MenuContext)
  return (
    <Link
      activeClassName={styles.menu__linkSelected}
      className={styles.menu__link}
      onClick={closeMenu}
      {...otherProps}
    >
      {label}
    </Link>
  )
}
