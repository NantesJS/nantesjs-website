import React from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'

import { SocialLinks } from '../SocialLinks'
import * as styles from './SocialIcons.module.css'

SocialIcons.propTypes = {
  className: string,
}

export function SocialIcons ({ className }) {
  return (
    <div className={classNames(styles.socialIcons, className)}>
      <SocialLinks
        className={styles.socialIcons__links}
        linkClassName={styles.socialIcons__link}
        withoutLabel
        bordered
        iconSize="lg"
      />
    </div>
  )
}
