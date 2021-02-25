import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import { FullWidthContainer } from '../components/FullWidthContainer'
import { Meetup } from '../components/OldMeetups/Meetup'
import { array, number, shape } from 'prop-types'

Meetups.propTypes = {
  pageContext: shape({
    meetups: array,
    years: array,
    year: number,
  }),
}

export default function Meetups ({ pageContext: { meetups, years, year } }) {
  return (
    <Layout>
      <section>
        <FullWidthContainer>
          <h1>Évènements de {year}</h1>
        </FullWidthContainer>
        {meetups.map(meetup => {
          return <Meetup {...meetup} key={meetup.id} />
        })}
      </section>
      <section>
        <FullWidthContainer>
          <h2>Consulter les événements des autres années</h2>
        </FullWidthContainer>
        <nav>
          <ul>{
            years.sort((a, b) => b - a).map(year => {
              return (
                <li key={year}>
                  <Link to={`/${ year }`}>{year}</Link>
                </li>
              )
            })
          }</ul>
        </nav>
      </section>
    </Layout>
  )
}
