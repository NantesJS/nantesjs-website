import React from 'react'
import {
  bool,
  string
} from 'prop-types'
import classNames from 'classnames'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faSlack from '@fortawesome/fontawesome-free-brands/faSlack'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import { SocialLink } from '../SocialLink'
import styles from './SocialLinks.module.css'

SocialLinks.propTypes = {
  bordered: bool,
  vertical: bool,
  withoutLabel: bool,
  iconSize: string,
  className: string,
  linkClassName: string,
}

const links = [
  {
    // eslint-disable-next-line max-len
    href: 'https://join.slack.com/t/nantesjs/shared_invite/enQtNTM0MjA0NTE0NTkzLTlkYzQ4NGQyYjEyMjM4YTllMjQ5MGEwMDI2ZDc5YjI2YWEyOWMzMTQ3OTc5Yjg1ZDA0ODhmMzU1OTMyZjBkNWY',
    label: 'Slack',
    icon: faSlack,
  },
  {
    href: 'https://twitter.com/NantesJS',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    href: 'https://github.com/NantesJS',
    label: 'Github',
    icon: faGithub,
  },
]

export function SocialLinks ({
  bordered,
  vertical,
  withoutLabel,
  iconSize = '1x',
  className,
  linkClassName,
}) {
  return (
    <div className={classNames(styles.socialNetwork, className, {
      [styles.socialNetworkVertical]: vertical,
      [styles.socialNetworkInline]: vertical && withoutLabel,
    })}>
      {links.map(link => (
        <SocialLink
          key={link.label}
          className={classNames(styles.socialNetwork__link, linkClassName, {
            [styles.socialNetwork__linkBordered]: bordered,
          })}
          href={link.href}
          icon={link.icon}
          size={iconSize}
          label={link.label}
          hideLabel={withoutLabel}
        />
      ))}
    </div>
  )
}
