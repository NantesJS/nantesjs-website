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
        const years = [...new Set(nodes.map(node => {
          return parseDate(node.frontmatter.date).getFullYear()
        }))]
        years.pop() // remove current year (lazy ass)

        const meetups = nodes
          .filter(node => node.frontmatter.date.includes(new Date().getFullYear()))
          .map(node => node.frontmatter)
          .sort((a, b) => {
            const aDate = parseDate(a.date)
            const bDate = parseDate(b.date)

            return compareDesc(aDate, bDate)
          })
        return <OldMeetups meetups={meetups} years={years} />
      }}
    />
  )
}
