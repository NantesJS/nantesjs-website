import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import {
  bool,
  object,
  string
} from 'prop-types'
import styles from './SocialLink.module.css'

SocialLink.propTypes = {
  className: string,
  hideLabel: bool,
  href: string,
  icon: object,
  label: string,
  size: string,
}

SocialLink.defaultProps = {
  className: '',
  hideLabel: false,
}

export function SocialLink ({
  className = '',
  href,
  icon,
  label,
  size,
  hideLabel,
}) {
  return (
    <a
      className={className}
      href={href}
      title={label}
    >
      <FontAwesomeIcon
        className={classNames({ [styles.iconWithMargin]: Boolean(label) })}
        icon={icon}
        size={size}
      />
      {hideLabel ? '' : label}
    </a>
  )
}
