import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { compareDesc } from 'date-fns'
import { parse } from 'date-fns/fp'

import { OldMeetups } from './OldMeetups'

const parseDate = parse(new Date(), 'dd/MM/yyyy')

export function OldMeetupsContainer () {
  return (
    <StaticQuery
      query={graphql`
            {
              allMarkdownRemark(
                filter: { frontmatter: { status: { eq: "done" } } }
              ) {
                nodes { frontmatter {
                  id
                  status
                  date
                  image
                  title
                  sponsor { name }
                  venue { name }
                  talks {
                      id
                      title
                      video
                      speakers {
                          id
                          name
                          link
                      }
                  }
                }
              } }
            }
            `}
      render={({ allMarkdownRemark: { nodes } }) => {
        const currentYear = new Date().getFullYear()

        const allMeetups = nodes
          .map(node => {
            const parsedDate = parseDate(node.frontmatter.date)

            return {
              ...node.frontmatter,
              parsedDate,
              year: parsedDate.getFullYear(),
            }
          })

        const meetups = allMeetups
          .filter(meetup => meetup.year === currentYear)
          .sort((a, b) => {
            return compareDesc(a.parsedDate, b.parsedDate)
          })

        const pastYearsMeetups = allMeetups.filter(meetup => meetup.year != currentYear)
        const years = [...new Set(pastYearsMeetups.map(meetup => meetup.year))]

        return <OldMeetups meetups={meetups} years={years} />
      }}
    />
  )
}
