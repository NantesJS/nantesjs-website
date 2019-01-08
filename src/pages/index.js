import React from 'react'

import Layout from '../components/layout'
import { NextMeetup } from '../components/NextMeetup'
import { OldMeetups } from '../components/OldMeetups'

import styles from './index.module.css'

function IndexPage () {
  return (
    <Layout>
      <NextMeetup />
      <OldMeetups />
    </Layout>
  )
}

export default IndexPage
