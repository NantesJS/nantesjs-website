import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import {
  object,
  string
} from 'prop-types'
import styles from './SocialLink.module.css'

SocialLink.propTypes = {
  className: string,
  href: string,
  icon: object,
  label: string,
  size: string,
}

export function SocialLink ({
  className = '',
  href,
  icon,
  label,
  size,
}) {
  return (
    <a
      className={className}
      href={href}>
      <FontAwesomeIcon
        className={classNames({ [styles.iconWithMargin]: Boolean(label) })}
        icon={icon}
        size={size}
      />
      {label}
    </a>
  )
}
