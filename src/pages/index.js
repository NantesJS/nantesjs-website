import React from 'react'

import Layout from '../components/layout'
import { NextMeetup } from '../components/NextMeetup'
import { OldMeetups } from '../components/OldMeetups'

function IndexPage () {
  return (
    <Layout>
      <NextMeetup />
      <OldMeetups />
    </Layout>
  )
}

export default IndexPage
