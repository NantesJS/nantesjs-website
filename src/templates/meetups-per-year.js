import React from "react"
import Layout from "../components/layout"
import { OldMeetups } from '../components/OldMeetups/OldMeetups'
import { array, shape } from 'prop-types'

Meetups.propTypes = {
  pageContext: shape({
    meetups: array,
    years: array,
  }),
}

export default function Meetups ({ pageContext: { meetups, years } }) {
  return (
    <Layout>
      <OldMeetups meetups={meetups} years={years} />
    </Layout>
  )
}
