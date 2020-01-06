import React from 'react'

import Layout from '../components/layout'
import { NextMeetup } from '../components/NextMeetup'
import { OldMeetups } from '../components/OldMeetups'
import { Sponsors } from '../components/Sponsors'


function IndexPage() {

  return (
      <Layout>
        <NextMeetup />
        <Sponsors />
        <OldMeetups />
      </Layout>

  )
}

export default IndexPage
