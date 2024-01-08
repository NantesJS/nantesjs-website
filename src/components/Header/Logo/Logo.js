import React from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'
import { Link } from 'gatsby'

import * as styles from './Logo.module.css'
import logo from './logo.svg'

Logo.propTypes = {
  className: string,
  imageClassName: string,
}

export function Logo ({ className, imageClassName }) {
  return (
    <Link
      className={classNames(styles.logo__link, className)}
      to="/"
    >
      <img
        className={classNames(styles.logo__image, imageClassName)}
        src={logo}
        alt="Logo NantesJS"
      />
    </Link>
  )
}
