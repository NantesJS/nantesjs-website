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
                edges { node { frontmatter {
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
                      speakers {
                          id
                          name
                          link
                      }
                  }
                }
              } } }
            }
            `}
      render={({ allMarkdownRemark: { edges } }) => {
        const meetups = edges
          .map(edge => edge.node.frontmatter)
          .sort((a, b) => {
            const aDate = parseDate(a.date)
            const bDate = parseDate(b.date)

            return compareDesc(aDate, bDate)
          })
        return <OldMeetups meetups={meetups} />
      }}
    />
  )
}
