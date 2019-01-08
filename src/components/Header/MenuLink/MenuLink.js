import React from 'react'
import {
  string,
  func
} from 'prop-types'
import { omit } from 'lodash'
import { Link } from 'gatsby'

import styles from './MenuLink.module.css'

MenuLink.propTypes = {
  label: string,
  link: string,
  onClick: func,
}

export function MenuLink ({ label, onClick, ...otherProps }) {
  return (
    <Link
      activeClassName={styles.menu__linkSelected}
      className={styles.menu__link}
      onClick={onClick}
      {...omit(otherProps, ['staticContext'])}
    >
      {label}
    </Link>
  )
}
