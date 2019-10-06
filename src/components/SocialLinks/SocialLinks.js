import React from 'react'
import {
  bool,
  string
} from 'prop-types'
import classNames from 'classnames'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faSlack from '@fortawesome/fontawesome-free-brands/faSlack'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faRssSquare from '@fortawesome/fontawesome-free-solid/faRssSquare'
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube'
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
    href: 'https://join.slack.com/t/nantesjs/shared_invite/enQtNTM0MjA0NTE0NTkzLTc3YWRkMjk3MTg3ZjEwYzVhYTA1YTA1OGE3MTdkMGE2ZjgzNzE1YzMwYWQwYmU0ZTEzNDhkZWUwZGY2ZjQ5OWY',
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
  {
    href: '/rss.xml',
    label: 'RSS',
    icon: faRssSquare
  },
  {
    href: 'https://www.youtube.com/c/NantesJS',
    label: 'Youtube',
    icon: faYoutube
  }
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
