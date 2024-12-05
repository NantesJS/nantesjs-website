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
import faTwitch from '@fortawesome/fontawesome-free-brands/faTwitch'
import { SocialLink } from '../SocialLink'
import * as styles from './SocialLinks.module.css'

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
    label: 'YouTube',
    icon: faYoutube
  },
  {
    href: 'https://twitch.tv/nantesjs',
    label: 'Twitch',
    icon: faTwitch
  }
]

export function SocialLinks ({
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
          className={classNames(linkClassName)}
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
