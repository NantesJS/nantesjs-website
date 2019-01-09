import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { TitleBar } from './TitleBar'

export function TitleBarContainer () {
  return (
    <StaticQuery
      query={graphql`
            {
              allMarkdownRemark(
                filter: { frontmatter: { status: { eq: "next" } } }
                limit: 1
              ) {
                edges { node { frontmatter {
                  id
                  title
                  date
                  image
                  sponsor {
                    id
                    name
                  }
                  venue {
                      id
                      name
                  }
                }
              } } }
            }
            `}
      render={({ allMarkdownRemark: { edges } }) => {
        const { title, date, image, venue, sponsor } = edges[0].node.frontmatter
        return (
          <TitleBar
            title={title}
            date={date}
            image={image}
            venue={venue.name}
            sponsor={sponsor.name}
          />
        )
      }}
    />
  )
}
