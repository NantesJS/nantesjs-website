import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { OldMeetups } from './OldMeetups'

export function OldMeetupsContainer () {
  return (
    <StaticQuery
      query={graphql`
            {
              allMarkdownRemark(
                filter: { frontmatter: { status: { eq: "done" } } }
                sort: { fields: [frontmatter___date], order: ASC }
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
        const meetups = edges.map(edge => edge.node.frontmatter)
        return <OldMeetups meetups={meetups} />
      }}
    />
  )
}
