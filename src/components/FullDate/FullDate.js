import React from 'react'
import { string, number } from 'prop-types'
import {
  formatDay,
  formatMonth,
  formatRaw,
  formatYear
} from '../../helper/date.helper'

import * as styles from './FullDate.module.css'

FullDate.propTypes = {
  date: string,
  fontSize: number,
}

FullDate.defaultProps = {
  fontSize: 1,
}

export function FullDate ({ date, fontSize }) {
  const dayStyle = {
    fontSize: `${ fontSize * 5.8 }rem`,
    lineHeight: `${ fontSize * 4.8 }rem`,
  }
  const yearAndMonthStyle = { fontSize: `${ fontSize * 2 }rem` }

  return (
    <time dateTime={formatRaw(date)} className={styles.date}>
      <span className={styles.date__column}>
        <span
          style={dayStyle}
          className={styles.date__day}
        >
          {formatDay(date)}
        </span>
        <span
          style={yearAndMonthStyle}
          className={styles.date__month}
        >
          {formatMonth(date)}
        </span>
      </span>
      <span
        style={yearAndMonthStyle}
        className={styles.date__year}
      >
        {formatYear(date)}
      </span>
    </time>
  )
}
