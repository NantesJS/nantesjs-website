import React from "react"
import Layout from "../components/layout"
import { OldMeetups } from '../components/OldMeetups/OldMeetups'

export default function Meetups({ pageContext: { meetups, years } }) {
  return (
    <Layout>
      <OldMeetups meetups={meetups} years={years} />
    </Layout>
  )
}
